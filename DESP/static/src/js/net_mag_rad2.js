var lineStyle = {
    normal: {
        width: 1.5,
        opacity: 0.5
    }
};



function rad2(chart, a) {

    option = {
        //backgroundColor: '#333333',

        title: {
            text: '研究单位信息系统安全检查内容',

            x: 'center', //水平位置：居中
            bottom: 0, //垂直位置：底部
            textStyle: {
                color: '#e3e3e3',

                fontSize: a * 0.013
            },
            lineHeight: 25,
        },

        center: ['50%', '50%'],
        radar: {
            indicator: [
                { name: '重大隐患整体落实情况', max: 104 },
                { name: '安全防护策略\n及检查记录', max: 104 },
                { name: '访问日志记录', max: 104 },
                { name: '安全责任主体', max: 104 },
                { name: '其它', max: 104 }

            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)',
                    fontSize: a * 0.009,
                },
                lineHeight: a * 0.01,
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse(),
                },

            },
            splitArea: {
                show: false
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
                            color: 'rgb(238, 197, 102)',
                            fontSize: a * 0.008,
                        }
                    }

                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }],
    };



    $.get('/static/DATA/net-manage.json').done(function(data) {
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
                        value: data.rad2,
                    },

                ],
            }]
        });

    });
    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}