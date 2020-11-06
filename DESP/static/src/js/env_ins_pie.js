function pie1(mychart,a){
    var option = {
        backgroundColor: '#333333',
        color:['#ebdba4','#EA5151', '#FF7853', '#FFAE57', '#893448'],
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return '接入带宽使用率'+ params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },
    
        series : [
            {
                name:'存储量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                radius : ['10%', '60%'],
                encode:{
                    itemName:'category',
                    value:'value'
                },
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
                        length: 10,
                        length2: 20
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
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('./data/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.inside,
            },
            
        });

    });
mychart.setOption(option);
}




function pie2(mychart,a){
        
    var option = {
        backgroundColor: '#333333',
        color:[ '#ebdba4','#EA5151', '#FF7853', '#FFAE57','#893448',],
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return '无线网络覆盖率'+params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },
    
        series : [
            {
                name:'存储量',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                radius : ['10%', '60%'],
                encode:{
                    itemName:'category',
                    value:'value'
                },
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
                        length: 10,
                        length2: 20
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
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('./data/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.outside,
            },
            
        });

    });
    mychart.setOption(option);
}

    function pie3(mychart,a){
        var option = {
            backgroundColor: '#333333',
            color:['#FF7853', '#FFAE57','#EA5151',  '#ebdba4','#893448',],
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return '出口流量'+params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
            dataset:{
                source:[]
            },
        
            series : [
                {
                    name:'云服务',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    radius : ['10%', '60%'],
                    encode:{
                        itemName:'category',
                        value:'value'
                    },
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
                            length: 10,
                            length2: 20
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
                        return Math.random() * 200;
                    }
                }
            ]
        };
    
        $.get('./data/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.userate,
                },
                
            });
    
        });
    mychart.setOption(option);
    }



   