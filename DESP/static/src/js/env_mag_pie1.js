function pie1(mychart,a){
    option = {
        backgroundColor: '#333333',
        color:['#893448','#EA5151', '#FF7853', '#FFAE57', '#ebdba4'],
        title: {
            text: '研究单位信息化相关项目情况',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013
            }
        },
    
        tooltip : {
            trigger: 'item',
            formatter: '{b}: {c} 项'
        },
        dataset:{
            source:[
                ['product','安全措施'],
                ['战略性先导科技专项（B类）',16],
                ['战略性先导科技专项（A类）',27],
                ['国家重点研发项目',52],
                ['自然科学基金委项目',28],
                ['重大科技专项',9]
            ]
        },
        series : [
            {
                name:'安全措施',
                type:'pie',
                data:[
                    {value:16, name:'战略性先导科技专项（B类）'},
                    {value: 27, name:'战略性先导科技专项（A类）'},
                    {value: 52, name:'国家重点研发项目'},
                    {value: 28, name:'自然科学基金委项目'},
                    {value: 9, name:'重大科技专项'},
                ],
                radius : '55%',
                center: ['50%', '60%'],
                encode:{
                    itemName:'approach',
                    value:'value'
                },
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
                source:data.security,
            },
            
        });

    });



mychart.setOption(option);
    }