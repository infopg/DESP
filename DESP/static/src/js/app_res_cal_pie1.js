function pie1(mychart,a){
        
    option = {
        color:['#893448','#EA5151', '#FF7853'],
        title: {
            text: '学科领域超算资源来源',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center'

        },
    
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'亿机时';
            }
        },
        dataset:{
            source:[]
        },
        series : [
            {
                name:'类型',
                type:'pie',
                radius : '75%',
                center: ['50%', '50%'],
                encode:{
                    itemName:'type',
                    value:'value'
                },

                label: {
                    normal: {
                        show:true,
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,
                            lineHeight:a*0.009,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 15,
                        length2: 10
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 50,
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

    $.get('./data/app_res_cal.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.type,
            },
            
        });

    });

    mychart.setOption(option);

   
 }

