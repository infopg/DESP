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
                
            },
        },
        grid:{
            containLabel:true,
            left:10 //离容器左侧距离
        },
        legend:{
            data:['累计数据','累计数据容量'],
            bottom:20,
            textStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            itemGap:50,
            right:30
        },
        yAxis: {
            data: ['信息科学','材料、前沿科学和未来科技','应用科学和工程技术','其他',
            '物理、化学和数学','生态环境','天文和地球科学','生物生命科学'],
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
            }

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
            }

        }],
        series: [{
            name: '累计数据',
            type: 'bar',
            data: [1060.89, 32.64, 427.07, 100, 4273.21, 4158.80, 4723.79, 6558.14],
            itemStyle:{
                color:'#ffae57',
                opacity:0.85,
                
            },
            barMaxWidth:20,
        },{
            name: '累计数据容量',
            type: 'bar',
            data: [12.67, 17.22, 269.24, 878.91, 910.45, 5835.33, 7285.26, 11864.94],
            itemStyle:{
                color:'#EA5151',
                opacity:0.85,               
            },
            barMaxWidth:20,
        }]
      };

    $.get('./data/app_res_data.json').done(function (data) {
        //alert(data.bar1);
        if (typeof (data) == "string") {
           //alert('2'+data.bar1);
            data = JSON.parse(data);
        //alert('1'+data.bar1);
        }
        //alert(data.bar1);
        chart.setOption({
            yAxis: [
                
                {
                    data: data.subject, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                name: '访问量',
                data: data.visit,
                xAxisIndex: 0,
            },{
                name: '下载量',
                data: data.download,
                xAxisIndex: 1,
            }]
        });

    });
    
    
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
