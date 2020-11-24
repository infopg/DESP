function bar1(chart, a) {
    option = {
        title: {
            text: '研究单位办公网和业务网采取的安全隔离措施',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#020202',
                fontSize:'150%'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            },
            formatter: '{b}: {c}家',


        },
        grid: {
            containLabel: true,

        },
        xAxis: {
            data: [],
            //name:'个',
            nameTextStyle: {
                color: '#020202',
                fontSize: a * 0.009,
            },
            axisLabel: {
                textStyle: {
                    fontSize: a * 0.009,
                    lineHeight: a * 0.01,
                }
            },
            axisTick: {
                show: false,
                alignWithLabel: true,
                length: 0,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#020202',
                }
            },
            show: true,
        },

        yAxis: {
            type: 'value',
            name: '家',
            show: true,
            nameTextStyle: {
                color: '#020202',
                fontSize: a * 0.009,
            },
            axisLabel: {
                textStyle: {
                    fontSize: a * 0.009,
                }
            },
            axisTick: {
                show: false,
                alignWithLabel: true,
                length: 0,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#020202',
                }
            },
            splitNumber: 5,
            interval: 20,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#020202',
                    opacity: 0.4,
                }
            }

        },
        series: [{
            name: '数值',
            type: 'bar',
            data: [],
            itemStyle: {
                color: '#FFAE57',
                opacity: 0.85,

            },
            barMaxWidth: 60,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}家'
                }
            },
        }]
    };

    $.get('/static/DATA/net-tech.json').done(function(data) {
        //alert(data.bar1);
        if (typeof(data) == "string") {
            //alert('2'+data.bar1);
            data = JSON.parse(data);
            //alert('1'+data.bar1);
        }
        //alert(data.bar1);
        chart.setOption({
            xAxis: [

                {
                    data: data.bar1, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.bar1_value,
            }]
        });

    });


    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}