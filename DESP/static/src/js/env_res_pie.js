function pie1(mychart,a){
        
    option = {
        backgroundColor: '#333333',
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
                            color: '#e3e3e3',
                            fontSize:a*0.009,
                            
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
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

    $.get('./data/environment-resource.json').done(function (data) {
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
            backgroundColor: '#333333',
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
                                color: '#e3e3e3',
                                fontSize:a*0.009,
                                
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#e3e3e3'
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
    
        $.get('./data/environment-resource.json').done(function (data) {
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
            backgroundColor: '#333333',
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
                                color: '#e3e3e3',
                                fontSize:a*0.009
                                
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#e3e3e3'
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
    
        $.get('./data/environment-resource.json').done(function (data) {
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
            backgroundColor: '#333333',
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
                                color: '#e3e3e3',
                                fontSize:a*0.009,
                                
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#e3e3e3'
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
    
        $.get('./data/environment-resource.json').done(function (data) {
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


