function fall1(mychart,a){
   
    option = {
        xAxis: {
            type: 'category',
            show:true,
            //name:'TB',
            data: [],
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:'90%',
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01
                },
                
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
            interval:12,
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
            formatter: '{b}: {c}家',
            
            
        },
    
        series: [{
            data: [],
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#EA6151',
                opacity:0.85,
            },
            barMaxWidth:60,
            
        }]
    };

    $.get('./data/environment-infrastructure.json').done(function (data) {
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
                    //name:'TB',
                    data: data.local, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.selfstoragevalue,
            }]
        });

    });

    mychart.setOption(option);
}

    function fall2(mychart,a){
        
        option = {
            xAxis: {
                type: 'category',
                show:true,
                //name:'Tflops',
                data: [],
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:'90%',
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                        lineHeight:a*0.01
                    }
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
                    fontSize:'90%',
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
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                interval:24,
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
                formatter: '{b}: {c}家',
                
                
            },
        
            series: [{
                data: [],
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
                barMaxWidth:40,
                
            }]
        };
    
        $.get('./data/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.selfcalculate);
            mychart.setOption({
                xAxis: [
                    
                    {
                        //name:'Tflops',
                        data: data.selfstorage, //类目数据（在类目轴中有效）
                    }
                ],
                series: [{
                    data: data.selfcalculate,
                }]
            });
    
        });
    

    mychart.setOption(option);
    }



    function fall3(mychart,a){
        option = {
            xAxis: {
                type: 'category',
                show:true,
                //name:'使用率',
                data: [],
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.009,
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                        lineHeight:a*0.01
                    }
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
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                        
                    },
                    lineHeight:18
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                interval:16,
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
                formatter: '{b} 使用率: {c}家',
                
                
            },
        
            series: [{
                data: [],
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
    
        $.get('./data/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.selfcalculate);
            mychart.setOption({
                xAxis: [
                    
                    {
                        //name:'使用率',
                        data: data.cloud, //类目数据（在类目轴中有效）
                    }
                ],
                series: [{
                    data: data.cloudvalue,
                }]
            });
    
        });
        
    mychart.setOption(option);
    }

