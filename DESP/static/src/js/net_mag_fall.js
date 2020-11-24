function fall1(mychart, a) {
    option = {
        title:{
         text:'研究单位无线网络安全防护措施',

         x:'center',//水平位置：居中
          bottom:0,//垂直位置：底部
          textStyle: {
              color: '#020202',
              fontSize: a * 0.013
          },
          lineHeight:25,
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
        yAxis: {
            data: [],
            //name:'小时',
            nameTextStyle: {
                color: '#020202',
                fontSize: a * 0.008,
            },
            axisLabel: {
                textStyle: {
                    fontSize: a * 0.008,
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
                    color: '#575757',
                }
            },
            show: true,
        },

        xAxis: {
            type: 'value',
            name: '家',
            show: true,
            nameTextStyle: {
                color: '#020202',
                fontSize: a * 0.008,
            },
            axisLabel: {
                textStyle: {
                    fontSize: a * 0.008,
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
                    color: '#575757',
                }
            },
            splitNumber: 5,
            interval: 14,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#575757',
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
            barMaxWidth: 25,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}家'
                }
            },
        }]
    };

    $.get('/static/DATA/net-manage.json').done(function(data) {
        //alert(data.bar1);
        if (typeof(data) == "string") {
            //alert('2'+data.bar1);
            data = JSON.parse(data);
            //alert('1'+data.bar1);
        }
        //alert(data.bar1);
        mychart.setOption({
            yAxis: [

                {
                    data: data.bar1, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.bar1_value,
            }]
        });

    });

    mychart.setOption(option);
}