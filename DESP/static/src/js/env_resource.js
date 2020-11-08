function bar1(mychart,a){
    option = {
        xAxis: {
            type: 'category',
            show:true,
            name:'GB',
            data: ['无','0~10','10~100','>100'],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },


        },
        grid:{
            containLabel:true,
        },
        yAxis: {
            type: 'value',
            name:'家',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
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
            splitNumber:5,
            min:0,
            max:35,
            interval:7,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            },
            formatter: '课件资源积累{b}GB: {c}家',


        },

        series: [{
            data: [15,35,31,23],
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,
            },
            barMaxWidth:60,

        }]
    };

    $.get('/static/DATA/environment-resource.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            xAxis: [

                {
                    name:'GB',
                    data: data.slide, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.slidevalue,
            }]
        });

    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            xAxis: {
                type: 'category',
                show:true,
                name:'个',
                data: ['无','0~10','>10'],
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#333333',
                    }
                },


            },
            yAxis: {
                type: 'value',
                name:'家',
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#333333',
                    }
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
                splitNumber:5,
                interval:14,
                min:0,
                max:56,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',

                },
                formatter: '课件资源积累{b}GB: {c}家',


            },

            series: [{
                data: [52,44,8],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                },
                barMaxWidth:80,

            }]
        };

        $.get('/static/DATA/environment-resource.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.edu);
            mychart.setOption({
                xAxis: [

                    {
                        name:'个',
                        data: data.edu, //类目数据（在类目轴中有效）
                    }
                ],

                series: [{
                    data: data.eduvalue,
                }]
            });

        });
    mychart.setOption(option);
}

function data_bub(mychart,a){
    option = {
        // backgroundColor: '#333333',
        title: {
            text: '科学数据资源统计情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center'

        },
        tooltip:{
            formatter: function (params) {
                return params.name + '<br/>'+ '数据容量: ' + params.value[1] +'TB' + '<br/>'+ '累计产生数据记录: ' + params.value[2] +'万条';
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
                fontSize:a*0.008,
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
                    fontSize:a*0.00750,
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
            name:'数据容量（TB）',
            show:true,

            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.008,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
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
                return a*0.04/// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return  a*0.003; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return   a*0.003 ; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return a*0.0045; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return  a*0.008; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return  a*0.02; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
                return a*0.045; /// 5e2;
            },
            label: {

                normal: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2]+'万条';
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
        },
        // {
        //     name: '其他领域',
        //     data: [],
        //     type: 'scatter',
        //     symbolSize: function (data) {
        //         return  a*0.004; /// 5e2;
        //     },
        //     label: {

        //         normal: {
        //             show: true,
        //             formatter: function (param) {
        //                 return param.data[2]+'万条';
        //             },
        //             position: 'top',
        //             textStyle:{
        //                 color:'#fff',
        //                 fontSize:a*0.007,
        //             },
        //         }

        //     },
        //     itemStyle: {
        //         normal: {
        //             shadowBlur: 30,
        //             shadowColor: '#b5304d',
        //             shadowOffsetY: 5,
        //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        //                 offset: 0.01,
        //                 color: '#e3a27f'
        //             }, {
        //                 offset: 0.35,
        //                 color: '#b5304d'
        //             }]),
        //             opacity:0.7
        //         }
        //     }
        // }
    ]
    };
mychart.setOption(option);


$.get('/static/DATA/environment-resource.json').done(function (data) {
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

        },
        // {
        //     name: '其他领域',
        //     data: data.buble[7],}
        ]
    });
    });
}

function fall1(mychart,a){

    option = {
        // backgroundColor:'#333333',
        //color:['#EA5151', '#FF7853', '#FFAE57'],
        title: {
            text: '研究单位自建文献情报资源种类',

            x:'center',//水平位置：居中
            //y:'bottom',//垂直位置：底部
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            },

        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '：' + tar.value + '家';
            }
        },
        grid:{
            containLabel:true,
        },
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data : ['单位总数','无','1~5','6~10','>10'],
            show:true,
            name:'种',
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
            splitNumber:5,
            interval:24,
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
            },


        },
        yAxis: {
            type : 'value',
            name:'家',
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
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
            splitLine:{
                lineStyle:{
                    color:'#333333',
                    opacity:0.3,
                }
            }
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack:  '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 103, 2, 0, 0]
            },
            {
                name: '文献情报资源种类',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                data:[104, 1, 101, 2, 0],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                },
                barMaxWidth:90,

            }
        ]
    };


    $.get('/static/DATA/environment-resource.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            xAxis: {
                data : data.category,
            },
            series: [
                {
                    name: '辅助',
                    data: data.support
                },
                {
                    name: '文献情报资源种类',
                    data:data.value
                }
            ]
        });

    });


    mychart.setOption(option);
}

function pie1(mychart,a){

    option = {
        // backgroundColor: '#333333',
        color:['#EA5151', '#FF7853', '#FFAE57', '#893448', '#ebdba4',],
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[
                ['product','文章数量'],
                ['小于500篇',44],
                ['500~1000篇',38],
                ['大于1000篇',22],

            ]
        },
        series : [
            {
                name:'文章数量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 5,
                        length2: 5
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 50;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-resource.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.chinese,
            },

        });

    });

    mychart.setOption(option);
}

    function pie2(mychart,a){
        option = {
            // backgroundColor: '#333333',
            color:['#EA5151', '#FF7853', '#FFAE57', '#893448', '#ebdba4',],
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
            dataset:{
                source:[
                ['product','文章数量'],
                ['小于50篇',64],
                ['50~100篇',18],
                ['大于100篇',22],
                ]
            },
            series : [
                {
                    name:'文章数量',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#333333',
                                fontSize:a*0.009,

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#333333'
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 5
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 80,
                            shadowColor: 'rgba(255,178,72,0.2)',
                            opacity:0.8,
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 50;
                    }
                }
            ]
        };

        $.get('/static/DATA/environment-resource.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.english,
                },

            });

        });
    mychart.setOption(option);
    }



    function pie3(mychart,a){
        option = {
            // backgroundColor: '#333333',
            color:['#EA5151', '#FF7853', '#FFAE57', '#893448', '#ebdba4',],
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
            dataset:{
                source:[
                    ['product','科普文章发稿量'],
                ['小于20篇',51],
                ['20~100篇',37],
                ['大于100篇',15],
                ]
            },
            series : [
                {
                    name:'科普文章发稿量',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#333333',
                                fontSize:a*0.009

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#333333'
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 5
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 80,
                            shadowColor: 'rgba(255,178,72,0.2)',
                            opacity:0.8,
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 50;
                    }
                }
            ]
        };

        $.get('/static/DATA/environment-resource.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.publish,
                },

            });

        });
    mychart.setOption(option);
    }

    function pie4(mychart,a){
        option = {
            // backgroundColor: '#333333',
            color:['#FFAE57', '#FF7853',  '#893448', '#ebdba4',],
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
            dataset:{
                source:[
                    ['product','科普视频数量'],
                ['无',20],
                ['1～5个',43],
                ['6～10个',14],
                ['大于10个',26]
                ]
            },
            series : [
                {
                    name:'科普视频数量',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#333333',
                                fontSize:a*0.009,

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#333333'
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 5
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 80,
                            shadowColor: 'rgba(255,178,72,0.2)',
                            opacity:0.8,
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 50;
                    }
                }
            ]
        };

        $.get('/static/DATA/environment-resource.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.vedio,
                },

            });

        });
    mychart.setOption(option);
    }


