var lineStyle = {
    normal: {
        width: 1.5,
        opacity: 0.5
    }
};

function rad(chart, a) {
    option = {
        //backgroundColor: '#333333',
        title: {
            text: '2019年分院系统9项指标平均成绩',

            x: 'center', //水平位置：居中
            y: 'bottom', //垂直位置：底部
            textStyle: {
                color: '#333333',
                fontSize: a * 0.013

            },

        },

        /*grid:{
            left:'1%',
            right:'1%',
            top:'1%',
            bottom:'1%',
            containLabel:true,
        },*/
        //center: ['50%', '50%'],
        radar: {
            indicator: [
                { name: '信息化管理与运行', max: 10 },
                { name: '信息化基础设施', max: 10 },
                { name: '信息化资源', max: 10 },
                { name: '科研信息化应用', max: 10 },
                { name: '管理信息化应用', max: 10 },
                { name: '教育信息化应用', max: 10 },
                { name: '科学传播应用', max: 10 },
                { name: '网络安全管理', max: 10 },
                { name: '网络安全技术保障', max: 10 }

            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#333333',
                    fontSize: a * 0.01,
                },
                lineHeight: 30,
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
        series: [{
            name: '研究所',
            type: 'radar',
            lineStyle: lineStyle,
            data: [{
                    value: [],
                },

            ],
            itemStyle: {
                show: true,
                normal: {
                    color: '#F9713C',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#333333',
                            fontSize: a * 0.01,
                        }
                    }

                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }]
    };



    $.get('/static/DATA/overview_fyxt.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: [{
                name: '研究所',
                data: [{
                        value: data.average,
                        name: '2019研究所平均分'
                    },

                ],
            }]
        });

    });



    //使用制定的配置项和数据显示图表
    chart.setOption(option);

}