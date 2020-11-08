function barh(chart,a){
    option = {
        color:[ '#EA5151', '#FFAE57','#ebdba4', '#893448'],
        title: {
            text: '研究单位科学数据库累计数据和累计数据容量情况',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: '{b0}: 累计数据容量 {c0} TB<br />{b1}: 累计科学数据记录 {c1} 万条',
        },
        grid:{
            containLabel:true,
            left:10 //离容器左侧距离
        },
        legend:{
            data:['累计数据容量','累计科学数据记录'],
            textStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            bottom:0,
            left:'right'

        },
        yAxis: {
            data: ['应用科学和工程技术', '其他', '信息科学', '材料、前沿科学和未来科技', '生态环境', '天文和地球科学', '生物生命科学',
       '物理、化学和数学'],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },
            show:true,
        },

        xAxis: [{
            type: 'value',
            name:'TB',
            
            show:true,
            nameTextStyle:{
                color:'#333333',
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
                    color:'#333333',
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            },
            min:0,
            max:6000,
            interval:1200,
        },{
            type: 'value',
            name:'百万条',
            show:true,
            
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel:{ 
                show: true,
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
                    color:'#333333',
                }
            },

            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            },
            min:0,
            max:35000,
            interval:7000,

        }],
        series: [{
            name: '累计数据容量',
            type: 'bar',
            data: [264.09,  880.57,   17.6 ,   13.83, 3389.47, 1197.04,  877.65, 6064.82],
            itemStyle:{
                color:'#EA5151',
                opacity:0.85,               
            },
            barMaxWidth:20,
        },{
            name: '累计科学数据记录',
            type: 'bar',
            data: [73.17,   100.17,   200.13,   249.4 ,   345.51,  4819.75,
       12240.4 , 34719.13],
            xAxisIndex: 1,
            itemStyle:{
                color:'#ffae57',
                opacity:0.85,
            },
            barMaxWidth:20,
        }]
      };

    // $.get('./data/app_res_data.json').done(function (data) {
    //     if (typeof (data) == "string") {
    //         data = JSON.parse(data);
    //     }
    //     chart.setOption({
    //         yAxis: [
    //             {
    //                 data: data.subject, //类目数据（在类目轴中有效）
    //             }
    //         ],
    //
    //         series: [{
    //             name: '访问量',
    //             data: data.visit,
    //             xAxisIndex: 0,
    //         },{
    //             name: '下载量',
    //             data: data.download,
    //             xAxisIndex: 1,
    //         }]
    //     });
    //
    // });
    
    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
