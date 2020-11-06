function fall1(mychart){
        
    option = {
        backgroundColor:'#333333',
        //color:['#EA5151', '#FF7853', '#FFAE57'],
        
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '家';
            }
        },
    
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data : ['单位总数','小于100','100~500','500`1000','1000~5000','大于5000'],
            show:true,
            name:'单位：TB',
            nameTextStyle:{
                color:'#e3e3e3',
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            
            
        },
        yAxis: {
            type : 'value',
            name:'单位：家',
            nameTextStyle:{
                color:'#e3e3e3',
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            splitLine:{
                lineStyle:{
                    color:'#e3e3e3',
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
                data: [0, 73, 41, 24, 4, 0]
            },
            {
                name: '存储容量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
    
                data:[103, 30, 32, 17, 20, 4],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                    shadowBlur:5,
                    shadowColor:'#FF7853'
                },
                barMaxWidth:90,
                
            }
        ]
    };
    
    mychart.setOption(option);
}

    function fall2(mychart){
        option = {
            backgroundColor:'#333333',
            //color:['#EA5151', '#FF7853', '#FFAE57'],
            
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '家';
                }
            },
        
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : ['单位总数','小于100','100~500','500`1000','1000~5000','大于5000'],
                show:true,
                name:'单位：TB',
                nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                
                
            },
            yAxis: {
                type : 'value',
                name:'单位：家',
                nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#e3e3e3',
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
                    data: [0, 73, 41, 24, 4, 0]
                },
                {
                    name: '存储容量',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter:'{c}家'
                        }
                    },
        
                    data:[103, 30, 32, 17, 20, 4],
                    itemStyle:{
                        color:'#EA5151',
                        opacity:0.85,
                        shadowBlur:5,
                        shadowColor:'#EA5151'
                    },
                    barMaxWidth:90,
                    
                }
            ]
        };
        
    mychart.setOption(option);
    }



    function fall3(mychart){
        option = {
            backgroundColor:'#333333',
            //color:['#EA5151', '#FF7853', '#FFAE57'],
            
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '家';
                }
            },
        
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : ['单位总数','小于100','100~500','500`1000','1000~5000','大于5000'],
                show:true,
                name:'单位：TB',
                nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                
                
            },
            yAxis: {
                type : 'value',
                name:'单位：家',
                nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#e3e3e3',
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
                    data: [0, 73, 41, 24, 4, 0]
                },
                {
                    name: '存储容量',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter:'{c}家'
                        }
                    },
        
                    data:[103, 30, 32, 17, 20, 4],
                    itemStyle:{
                        color:'#FFAE57',
                        opacity:0.85,
                        shadowBlur:5,
                        shadowColor:'#FFAE57'
                    },
                    barMaxWidth:90,
                    
                }
            ]
        };
        
    mychart.setOption(option);
    }

