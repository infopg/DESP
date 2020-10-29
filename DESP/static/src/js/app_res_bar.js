function bar1(chart){
    option = {
        color:[ '#EA5151', '#FFAE57','#ebdba4', '#893448'],
        backgroundColor:'#333333',
        /*title: {
            text: '信息化公共项目投入详情',
            left: 'center',
            top: 30,
            textStyle: {
                color: '#e3e3e3'
            }
        },*/
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2017年', '2018年'],
            textStyle:{
                color:'#e3e3e3',
            },
            top:'5%',

        },
        xAxis: {
            type: 'value',
            name:'单位：万元',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }    
        },
        yAxis: {
            type: 'category',
            data: ['ARP硬件及续保', '网络安全设备\n及投入     ', '自筹系统开发','网络通讯','其他', '网络软硬件设备','图书数字文献'],
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                //textAlign:center,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            
            
            
            
        },
        series: [
            {
                name: '2018年',
                type: 'bar',
                data: [1024,2472,6171,7410,8414,11606, 14533],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
            },{
                name: '2017年',
                type: 'bar',
                data: [1019,3840,6549,7641,9652,11076,14769],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
                
            },
        ]
    };
    
    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}

function bar2(chart){
    option = {
        color:['#ebdba4', '#893448'],
        backgroundColor:'#333333',
        /*title: {
            text: '信息化公共项目投入详情',
            left: 'center',
            top: 30,
            textStyle: {
                color: '#e3e3e3'
            }
        },*/
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2017年', '2018年'],
            textStyle:{
                color:'#e3e3e3',
            },
            top:'5%',

        },
        xAxis: {
            type: 'value',
            name:'单位：万元',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }    
        },
        yAxis: {
            type: 'category',
            data: ['ARP硬件及续保', '网络安全设备\n及投入     ', '自筹系统开发','网络通讯','其他', '网络软硬件设备','图书数字文献'],
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                //textAlign:center,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            
            
            
            
        },
        series: [
            {
                name: '2018年',
                type: 'bar',
                data: [1024,2472,6171,7410,8414,11606, 14533],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
            },{
                name: '2017年',
                type: 'bar',
                data: [1019,3840,6549,7641,9652,11076,14769],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
                
            },
        ]
    };
    
    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}

function bar3(chart){
    option = {
        color:[ '#EA5151', '#893448'],
        backgroundColor:'#333333',
        /*title: {
            text: '信息化公共项目投入详情',
            left: 'center',
            top: 30,
            textStyle: {
                color: '#e3e3e3'
            }
        },*/
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2017年', '2018年'],
            textStyle:{
                color:'#e3e3e3',
            },
            top:'5%',

        },
        xAxis: {
            type: 'value',
            name:'单位：万元',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                    color:'#e3e3e3',
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }    
        },
        yAxis: {
            type: 'category',
            data: ['ARP硬件及续保', '网络安全设备\n及投入     ', '自筹系统开发','网络通讯','其他', '网络软硬件设备','图书数字文献'],
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                //textAlign:center,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            
            
            
            
        },
        series: [
            {
                name: '2018年',
                type: 'bar',
                data: [1024,2472,6171,7410,8414,11606, 14533],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
            },{
                name: '2017年',
                type: 'bar',
                data: [1019,3840,6549,7641,9652,11076,14769],
                barMaxWidth:20,
                itemStyle:{
                    opacity:0.85,
                }
                
            },
        ]
    };
    
    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}

