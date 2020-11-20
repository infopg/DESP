function barh2(chart,a){
    var data = [
        ["物理、化\n学和数学",3579.98,6111.83],
        ["应用科学\n和工程技术",29.16,44.81],
        ["信息科学",964.02,13.13],
        ["材料、前沿\n科学和未来科技",72.15,67.21],
        ["天文和\n地球科学",483.38,1206.47],
        ["生物生命科学",1325.46,2540.84],
        ["生态环境",30.71,14157.03],
        ["其他",880.57,100.17]
    ];

    var schema = [
        {name: '学科', index: 0, text: '学科'},
        {name: 'cumulate_volume', index: 1, text: '累计数据容量TB'},
        {name: 'records', index: 2, text: '科学数据记录 万条'}
    ];


    var itemStyle = {
        opacity: 0.75,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    };

    option = {
        title:{
            text: '2019年研究单位科学数据库累计数据和累计数据容量情况',
            textStyle:{
                color:'#333333',
                fontSize:'130%'
            },
            left:'center',
        },
        legend: {
            top: 10,
            textStyle: {
                color: '#333333',
                fontSize: '90%'
            }
        },
        grid: {
            left: '10%',
            right: '20%',
            top: '18%',
            bottom: '10%'
        },
        tooltip: {
            padding: 10,
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + ' ' + value[0]
                    + '</div>'
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>';
            }
        },
        xAxis: {
            type: 'category',
            name: '学科',
            nameGap:5,
            nameTextStyle: {
                color: '#333333',
                fontSize: '90%'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#333333'
                }
            },
            axisLabel:{
                interval:0,
                textStyle:{
                    fontSize:'90%'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '累计数据容量(TB)',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#333333',
                fontSize: '90%'
            },
            axisLine: {
                lineStyle: {
                    color: '#333333'
                }
            },
            lineStyle: {
                type: 'dashed',
                color:'#aaaaaa',
                opacity:0.4
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension: 2,
                min: 0,
                max: 5000,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：累计科学数据记录(万条)'],
                textGap: 30,
                textStyle: {
                    color: '#333333',
                    fontSize:'90%',
                },
                inRange: {
                    symbolSize: [10, 70],
                    color:['#FF7853'],
                },
                outOfRange: {
                    symbolSize: [10, 70],
                },
                controller: {
                    inRange: {
                        color: ['#FF7853']
                    },
                    outOfRange: {
                        // color: ['#444']
                    }
                }
            },
        ],
        series: [
            {
                type: 'scatter',
                itemStyle: itemStyle,
                data: data
            }
        ]
    };
    chart.setOption(option);
}
