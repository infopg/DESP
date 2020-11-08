function pie4(mychart, a) {
    option = {
        //backgroundColor: '#333333',
        title: {
            text: '研究单位无线路由隔离情况',
            left: 'center',
            top: 8,
            bottom: -7,
            textStyle: {
                color: '#020202',
                fontSize:'150%'
            }
        },
        color: ['#FFAE57', '#EA5151', '#ebdba4'],

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0] + ': ' + params.value[1] + '家 (' + ((params.value[1] / 104) * 100).toFixed(2) + '%)';
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['完全隔离', '无需隔离', '未隔离']
        },
        dataset: {
            source: []
        },

        series: [{
            name: '数值',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            encode: {
                itemName: 'category',
                value: 'value'
            },
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#020202',
                        fontSize: a * 0.013,

                    }
                }
            },
            // labelLine: {
            //     normal: {
            //         lineStyle: {
            //             color: '#020202'
            //         },
            //         smooth: 0.2,
            //         length: 10,
            //         length2: 20
            //     }
            // },
            itemStyle: {
                normal: {
                    shadowBlur: 80,
                    shadowColor: 'rgba(255,178,72,0.2)',
                    opacity: 0.8,
                }
            },

            animationType: 'espension',

            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };

    $.get('/static/DATA/net-tech.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset: {
                source: data.pie4,
            },

        });

    });
    mychart.setOption(option);
}