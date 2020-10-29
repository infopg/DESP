function barh(chart,a){
    option = {
        title: {
            text: '研究单位基本信息化管理制度情况',
            textStyle:{
                color:'#e3e3e3', //文本颜色
                fontSize:a*0.013 //字号
            },
            left:'center', //标题水平位置：居中
        },

        legend: {
            data: [],
           show:false,
            textStyle:{
                color:'#e3e3e3',
            },
            bottom:'5%',
            type:'scroll',
            itemGap:50,
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            }

        },
        tooltip: {
            formatter: '{b}: {c}家',
        },
        grid:{
            containLabel:true,
        },
        yAxis: {
            name: '家',//y轴标签
            type: 'value',
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.00750,
                    lineHeight:a*0.01,
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            axisTick:{
                show: false,
               
            },
            splitNumber:5,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }
        },

        xAxis: {
            name:'',//x轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisTick:{
                show: false,
               
            },
            axisLabel:{
                interval:0,
                rotate:40,
                textStyle:{
                    fontSize:a*0.008,
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#e3e3e3',
                }
            },
            z:999
        },
        grid: {
            containLabel: true
        },

        series: [{
            name:'2019年',
            data: [],//统计值
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#EA5151',
                opacity:0.85,
                // shadowBlur:5,
                // shadowColor:'#EA5151'
            },
            barMaxWidth:50,

        },

        ],

    };
    

    $.get('./data/environment-manamge.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        chart.setOption({
            legend:{
                data:data.year,
            },
            xAxis: [{
                    data: data.category, //类目数据（在类目轴中有效）
            }],

            series: [{
                name:'2019年',
                data: data.y2018,//统计值
            }]
        });

    });

    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
