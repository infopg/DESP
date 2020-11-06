function bar1(mychart,a){
    option = {
        
        color:['#893448', '#EA5151', '#FF7853', '#FFAE57', '#ebdba4'],
       
        legend: {
            data: ["中国科技网","中国教育网", "中国联通","中国电信","中国移动"],
            textStyle:{
                color:'#e3e3e3',
            },
            bottom:'3%',
            itemGap:40,
            type:'scroll',
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            }

        },
        grid:{
            containLabel:true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: 'Gbps',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
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
            splitNumber:5,
            //interval:,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }    
        },

        yAxis: {
            name:'年份',//y轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
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
               
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            z:999,
        },
        grid: {
            containLabel: true
        },

        series: [
        {
            name: '中国科技网',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国教育网',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国联通',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '中国电信',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '中国移动',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('./data/environment-infrastructure.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            yAxis: [
                
                {
                    name:'年份',
                    data: data.year, //类目数据（在类目轴中有效）
                }
            ],

            series: [
                {
                    name: '中国科技网',
                    data: data.science,
                   
                },{
                    name: '中国教育网',
                    data: data.edu,
                    
                },{
                    name: '中国联通',
                    data: data.union,
                    
                },{
                    name: '中国电信',
                    data: data.tele,
                   
                },
                {
                    name: '中国移动',
                    data: data.mobile
                    
                },
            ]
        });
    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            color:['#EA5151', '#FFAE57', '#FF7853', '#ebdba4','#893448', ],
            
            legend: {
                data: ['CPU计算能力','异构计算能力'],
                textStyle:{
                    color:'#e3e3e3',
                },
                bottom:'3%',
                itemGap:50,
                type:'scroll',
                textStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.008,
                }
    
            },
    
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                name: 'Pflops',//x轴标签
                type: 'value',
                boundaryGap: [0, 0.01],
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
                splitNumber:5,
                interval:42,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }    
            },
    
            yAxis: {
                name:'年份',//y轴单位
                type: 'category',
                data: [],  //x轴坐标
                show:true,
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
                   
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                z:999,
            },
            grid: {
                containLabel: true
            },
    
            series: [
            {
                name: 'CPU计算能力',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },
            {
                name: '异构计算能力',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },
    
        ]};
    
        $.get('./data/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.year);
            mychart.setOption({
                yAxis: [
                    
                    {
                        name:'年份',
                        data: data.year, //类目数据（在类目轴中有效）
                    }
                ],
    
                series: [{
                    name: 'CPU计算能力',
                    data: data.cpu,
                },
                {
                    name: '异构计算能力',
                    data: data.heterogenity,
                }]
            });
        });
    mychart.setOption(option);
    }



    function bar3(mychart,a){
        option = {
            color:['#FF7853','#ebdba4','#EA5151', '#FFAE57',  '#893448', ],
           
            legend: {
                data: ['在线存储','备份/归档存储'],
                textStyle:{
                    color:'#e3e3e3',
                },
                bottom:'3%',
                itemGap:50,
                type:'scroll',
                textStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.008,
                }
    
            },
    
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                name: 'TB',//x轴标签
                type: 'value',
                boundaryGap: [0, 0.01],
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
                splitNumber:5,
                interval:36000,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }    
            },
    
            yAxis: {
                name:'年份',//y轴单位
                type: 'category',
                data: [],  //x轴坐标
                show:true,
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:'80%',
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                axisTick:{
                    show: false,
                   
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                z:999,
            },
            grid: {
                containLabel: true
            },
    
            series: [
            {
                name: '在线存储',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },
            {
                name: '备份/归档存储',
                type: 'bar',
                barWidth:40,
                stack: '总量',
                data: [],
                itemStyle:{
                    opacity:0.85,
                }
            },
    
        ]};
    
        $.get('./data/environment-infrastructure.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
               //alert('2'+data.year);
                data = JSON.parse(data);
            //alert('1'+data.year);
            }
            //alert(data.year);
            mychart.setOption({
                yAxis: [
                    
                    {
                        name:'年份',
                        data: data.year, //类目数据（在类目轴中有效）
                    }
                ],
    
                series: [{
                    name: '在线存储',
                    data: data.online,
                },
                {
                    name: '备份/归档存储',
                    data: data.backup,
                }]
            });
        });
    mychart.setOption(option);
    }

