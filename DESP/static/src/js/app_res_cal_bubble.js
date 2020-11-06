function bubble(mychart,a){
    option = {
        title: {
            text: '学科领域超算数据量及机时统计',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center'

        },
        tooltip:{
            formatter: function (params) {
                return params.name + '<br/>'+ '超算机时: ' + params.value[1] +'万小时' + '<br/>'+ '数据量: ' + params.value[2] +'TB';
            }
        },
        grid:{
            containLabel:true,
        },
        xAxis: {
            type:'category',
            name:'学科',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
                lineHeight:a*0.01,
            },
            axisTick:{
                show: true,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
                interval:0,
                rotate:40,
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                
                }
            },
            axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
            },
            
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },
            
        },
        yAxis: {
            type:'value',
            name:'万小时',
            show:true,
            
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: 'dashed',
                    color:'#aaaaaa',
                    opacity:0.4
                }
            },
            scale: true,
        },
        series: [{
            name: '物理、化\n学和数学',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.0156*5/// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#ff8563',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#ffaf99'
                    }, {
                        offset: 0.35,
                        color: '#ff8563'
                    }]),
                    opacity:0.7,
                }
            }
        }, {
            name: '应用科学和\n工程技术',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return  a*0.0027*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#893448',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#bf808c'
                    }, {
                        offset: 0.35,
                        color: '#893448'
                    }]),
                    opacity:0.8
                }
            }
        },{
            name: '信息科学',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return   a*0.0044*6 ; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#ffb980',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#f9f2ba'
                    }, {
                        offset: 0.35,
                        color: '#ffb980'
                    }]),
                    opacity:0.7
                }
            }
        },{
            name: '材料、前\n沿科学和\n未来科技',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.0074*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#b86f56',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#e4c1a1'
                    }, {
                        offset: 0.35,
                        color: '#b86f56'
                    }]),
                    opacity:0.7
                }
            }
        },{
            name: '天文和地\n球科学',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return  a*0.0029*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#FFAE57',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#ffcd9e'
                    }, {
                        offset: 0.35,
                        color: '#FFAE57'
                    }]),
                    opacity:0.7
                }
            }
        },{
            name: '生物生\n命科学',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return  a*0.0041*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#cc6025',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#e3a27f'
                    }, {
                        offset: 0.35,
                        color: '#cc6025'
                    }]),
                    opacity:0.7
                }
            }
        },
        {
            name: '生态环境',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.0018*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#e3e3e3',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#EA5151',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#f18989'
                    }, {
                        offset: 0.35,
                        color: '#EA5151'
                    }])
                }
            }
        },{
            name: '其他领域',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return  a*0.0004*6; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'个';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#fff',
                        fontSize:a*0.007,
                    },
                }
    
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: '#b5304d',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0.01,
                        color: '#e3a27f'
                    }, {
                        offset: 0.35,
                        color: '#b5304d'
                    }]),
                    opacity:0.7
                }
            }
        }
    ]
    };
mychart.setOption(option);


$.get('./data/app_res_cal.json').done(function (data) {
    //alert(data);
    if (typeof (data) == "string") {
        //alert('2'+data.std)
        data = JSON.parse(data);
        //alert('1'+data.year)
    }
    //alert(data);
    mychart.setOption({
        series: [{
            name: '物理、化学和数学',
            data: data.buble[0],
        }, {
            name: '应用科学和工程技术',
            data: data.buble[1],
        },{
            name: '信息科学', 
            data: data.buble[2],
    
        },{
            name: '材料、前沿科学和未来科技',
            data: data.buble[3],
            
        },{
            name: '天文和地球科学',
            data: data.buble[4],
            
        },{
            name: '生物生命科学',
            data: data.buble[5],
            
        },{
            name: '生态环境',
            data: data.buble[6],
            
        },{
            name: '其他领域',
            data: data.buble[7],
            
        }]
    });

});


    }
