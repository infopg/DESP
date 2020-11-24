function pie1(mychart, a) {
    option = {
        //backgroundColor: '#333333',
        title: {
            text: '研究单位系统安全检查情况',
            left: 'center',
            top: 8,
            bottom: -2,
            textStyle: {
                color: '#020202',
                fontSize:'150%'
            }
        },
        color: ['#FFAE57', '#cc6025', '#EA5151', '#FF7853', '#ebdba4'],

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0] + ': ' + params.value[1] + '家 (' + ((params.value[1] / 104) * 100).toFixed(2) + '%)';
            }
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['1~2次', '3~5次', '6~10次', '大于10次']
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
            emphasis:{
                label:{
                    show:true
                }
            },
            // labelLine: {
            //     normal: {
            //         lineStyle: {
            //             color: '#020202'
            //         },
            //         smooth: 0.2,
            //         length: 5,
            //         length2: 10
            //     }
            // },
            itemStyle: {
                normal: {
                    shadowBlur: 80,
                    shadowColor: 'rgba(255,178,72,0.2)',
                    opacity: 0.8,
                }
            },

            //animationType: 'espension',

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
                source: data.pie1,
            },

        });

    });
    mychart.setOption(option);
}