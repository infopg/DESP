function barh1(chart, a) {
    option = {
        color: ['#FFAE57'],
        //backgroundColor:'#333333',
        // title: {
        //     text: '研究单位部署终端安全软件类型和数量',
        //     left: 'center',
        //     top: 0,
        //     textStyle: {
        //         color: '#e3e3e3',
        //         fontSize:'130%'
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            },
            formatter: '{b}: {c}个',


        },
        grid: {
            containLabel: true,

        },
        yAxis: {
            data: [],
            //name:'小时',
            nameTextStyle: {
                color: '#e3e3e3',
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
                    color: '#e3e3e3',
                }
            },
            show: true,
        },

        xAxis: {
            type: 'value',
            name: '个',
            show: true,
            nameTextStyle: {
                color: '#e3e3e3',
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
                    color: '#e3e3e3',
                }
            },
            splitNumber: 5,
            interval: 40,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                    opacity: 0.4,
                }
            }

        },
        series: [{
            name: '数值',
            type: 'bar',
            data: [],
            itemStyle: {
                color: '#FF7853',
                opacity: 0.85,

            },
            barMaxWidth: 30,
            //barCategoryGap:'100%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}个'
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
            yAxis: [

                {
                    data: data.barh1, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.barh1_value,
            }]
        });

    });


    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}