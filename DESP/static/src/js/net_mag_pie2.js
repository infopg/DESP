function pie2(mychart, a) {
    option = {
        //backgroundColor: '#333333',
        title:{
            text:'研究单位信息系统安全检查情况',

            x:'center',//水平位置：居中
            bottom:-3,//垂直位置：底部
            textStyle: {
                color: '#020202',
                fontSize: a * 0.013
            },
            lineHeight:25,
        },
        color: ['#FFAE57', '#EA5151', '#ebdba4', '#893448', '#FF7853', ],

        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0] + ': ' + params.value[1] + '家 (' + ((params.value[1] / 103) * 100).toFixed(2) + '%)';
            }
        },
        legend: {
            left: 10,
            orient: 'vertical',
            data: ['1~2次', '3~5次', '6~10次', '大于10次']
        },
        dataset: {
            source: []
        },

        series: [{
            name: '人均时长',
            type: 'pie',
            radius: ['10%', '65%'],
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
                        fontSize: a * 0.009,

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

            // animationType: 'espension',

            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };

    $.get('/static/DATA/net-manage.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset: {
                source: data.pie2,
            },

        });

    });
    mychart.setOption(option);
}