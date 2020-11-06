function pie2(mychart,a){
    option = {
        backgroundColor: '#333333',
        color:['#FFAE57', '#FF7853', '#893448','#EA5151', ],
        title: {
            text: '研究单位设立信息化运行机构情况',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013
            }
        },
    
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/576)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[
                ['product', '设立情况'],
                ['有信息化运行机构',78],
                ['无信息化运行机构',26]
                            ]
        },
        series : [
            {
                name:'设立情况',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#e3e3e3',
                            fontSize:a*0.009,
                            
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('./data/environment-manamge.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.academic,
            },
            
        });

    });

mychart.setOption(option);
    }