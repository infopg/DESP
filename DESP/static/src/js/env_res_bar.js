function bar1(mychart,a){
    option = {
        xAxis: {
            type: 'category',
            show:true,
            name:'GB',
            data: ['无','0~10','10~100','>100'],
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#e3e3e3',
                }
            },
            
 
        },
        grid:{
            containLabel:true,
        },
        yAxis: {
            type: 'value',
            name:'家',
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            splitNumber:5,
            min:0,
            max:35,
            interval:7,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '课件资源积累{b}GB: {c}家',
            
            
        },
    
        series: [{
            data: [15,35,31,23],
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,
            },
            barMaxWidth:60,
            
        }]
    };

    $.get('./data/environment-resource.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            xAxis: [
                
                {
                    name:'GB',
                    data: data.slide, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.slidevalue,
            }]
        });

    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            xAxis: {
                type: 'category',
                show:true,
                name:'个',
                data: ['无','0~10','>10'],
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.009,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#e3e3e3',
                    }
                },
                
     
            },
            yAxis: {
                type: 'value',
                name:'家',
                show:true,
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.009,
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                splitNumber:5,
                interval:14,
                min:0,
                max:56,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },
    
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    
                },
                formatter: '课件资源积累{b}GB: {c}家',
                
                
            },
        
            series: [{
                data: [52,44,8],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}家'
                    }
                },
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                },
                barMaxWidth:80,
                
            }]
        };
    
        $.get('./data/environment-resource.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.edu);
            mychart.setOption({
                xAxis: [
                    
                    {
                        name:'个',
                        data: data.edu, //类目数据（在类目轴中有效）
                    }
                ],
    
                series: [{
                    data: data.eduvalue,
                }]
            });
    
        });
    mychart.setOption(option);
}