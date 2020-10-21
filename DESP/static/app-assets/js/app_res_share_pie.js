function pie(mychart,a){
        
    option = {
        backgroundColor: '#333333',
        color:['#893448', '#FFAE57', '#EA5151', '#ebdba4', '#FF7853',],
        title:{
            text:' 研究单位科研协同应用软件来源',
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.013
            },
            x:'center',
            top:0
        },
        tooltip : {
            trigger: 'item',
            formatter:  '{a} <br/>{b}: {c} ({d}%)',
            
        },
        
    
        series : [
            {
                name:'科研协同应用软件来源',
                type:'pie',
                radius : ['40%','60%'],
                center: ['45%', '50%'],
                data:[
                    {value:167, name:'完全自主开发的软件'},
                    {value: 73, name:'开源软件'},
                    {value: 72, name:'商用软件'}
                ],
                encode:{
                    itemName:'category',
                    value:'value'
                },
                //roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#e3e3e3',
                            fontSize:a*0.01,
                            
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

    $.get('./data/app_res_share.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.pie,
            },
            
        });

    });
    mychart.setOption(option);
}