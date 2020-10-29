function bub1(mychart,a){
    
    option = {
        //backgroundColor: '#333333',
        title: {
            text: '研究单位自建课题组 VS 建设数据库',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center'

        },
        tooltip:{
            formatter: function (params) {
                return params.name + '<br/>'+ '更新数据条数: ' + params.value[1] +'千万条' + '<br/>'+ '更新数据容量: ' + params.value[2] +'万GB';
            }
        },
        grid:{
            containLabel:true,
            left:45
        },
        xAxis: {
            type:'category',
            name:'主要\n资助方',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
                lineHeight:a*0.01,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
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
            name:'更新数据条数(千万条)',
            show:true,
            
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
                padding:[0,5,0,98]
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
            name: '面上项目',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.044; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
            name: '院其他任务',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.04; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
            name: '地方政府课题',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.012; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
            name: '青年科学基金项目',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.021; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
            name: '国家重点研发计划',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.02; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
            name: '所其他',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.007; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
        },{
            name: '自主部署',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.005; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
                    },
                    position: 'top',
                    textStyle:{
                        color:'#333333',
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
            name: '国家重大科技专项',
            data: [],
            type: 'scatter',
            symbolSize: function (data) {
                return a*0.001; /// 5e2;
            },
            label: {
                
                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万GB';
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
        }]
    };
mychart.setOption(option);


$.get('./data/app_res_data.json').done(function (data) {
    //alert(data);
    if (typeof (data) == "string") {
        //alert('2'+data.std)
        data = JSON.parse(data);
        //alert('1'+data.year)
    }
    //alert(data);
    mychart.setOption({
        series: [{
            name: '面上项目',
            data: data.buble[0],
        }, {
            name: '院其他任务',
            data: data.buble[1],
        },{
            name: '地方政府课题', 
            data: data.buble[2],
    
        },{
            name: '青年科学基金项目',
            data: data.buble[3],
            
        },{
            name: '国家重点研发计划',
            data: data.buble[4],
            
        },{
            name: '所其他',
            data: data.buble[5],
            
        },{
            name: '自主部署',
            data: data.buble[6],
            
        },{
            name: '国家重大科技专项',
            data: data.buble[7],
            
        }]
    });

});


    }
