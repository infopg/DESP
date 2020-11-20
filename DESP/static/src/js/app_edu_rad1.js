var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 0.5
        }
    };
 
function rad1(chart,a){
    option = {
        title: {
            text: '2019年研究单位统一网络学习平台情况',
            bottom:0,
            left:'center',
            textStyle: {
                color: '#333333',
                fontSize:'130%'
            },
 
        },
        center:['50%','50%'],
        radar: {
            indicator: [
                { name: '在线课程学习', max: 100},
                { name: '个人学习空间', max: 100},
                { name: '个性化学习管理', max: 100},
                { name: '网络互动交流', max: 100},
                { name: '其他', max: 100}
                ],
            shape: 'circle',
            radius:'65%',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#333333',
                    fontSize:a*0.009,
                },
                lineHeight: a*0.01,
            },
            splitArea: {
                areaStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)',
                    
                }
            }
        },
        series: [
            {
                name: '研究所',
                type: 'radar',
                lineStyle: lineStyle,
                data : [
                    {
                        value: [94, 69, 64, 63, 20],
                    },
                    
                ],
                itemStyle: {
                    show:true,
                    normal: {
                        color: '#F9713C',
                        label: {				          
                            show: true,				          
                            position: [14,-5],		          
                            textStyle: {				            
                                color: '#333333',
                                fontSize:a*0.009,
                            }
                        }		
                        
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }
        ],
    };


    
    $.get('./data/application-education.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: [{  
                name: '研究所',
                data: [
                    {
                        value : data.rad1,
                    },
                    
                ],
            }]
        });

    });
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
