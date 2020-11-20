var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 0.5
        }
    };

function rad(chart,a){
    option = {
        title:{
            text:'2019年研究单位网络科普传播途径分析',
            x: 'center', //水平位置：居中
            y: 'bottom', //垂直位置：底部
            textStyle: {
                color: '#333333',
                fontSize:a*0.013,
                lineHeight:a*0.015
            },
        },
        grid:{
            left:0,
        },
        
        center:['50%','40%'],
        radar: {
            indicator: [
                { name: '本机构网站科普栏目', max: 100},
                { name: '自建科普\n网站    ', max: 100},
                { name: '中国科普博览', max: 100},
                { name: '明知科普网', max: 100},
                { name: '其他数字\n媒体传播', max: 100}
                ],
            shape: 'circle',
            radius:'65%',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#333333',
                    fontSize:a*0.009,
                },
                lineHeight: 15,
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
                        value: [49, 82, 73, 79, 65],
                    },
                    
                ],
                itemStyle: {
                    show:true,
                    normal: {
                        color: '#F9713C',
                        label: {				          
                            show: true,				          
                            position: 'top',		          
                            textStyle: {				            
                                color: '#333333',
                                fontSize:a*0.008,		      
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


    
    $.get('./data/application-science.json').done(function (data) {
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
                        value : data.rad,
                    },
                    
                ],
            }]
        });

    });
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
