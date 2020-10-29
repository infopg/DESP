function bar1(mychart,a){
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}: {c}家',
        },
        title:{
            text:'研究单位选用新媒体类型统计',
            top:0,
            left:'center',
            textStyle:{
                color:'#333333',
                fontSize:'130%'
            }
        },
        grid:{
            containLabel:true,
            // right:'10%',
            bottom:0
        },
        xAxis: {
            data: ['独立APP','视频、\n直播平台','传统纸媒','院属平台','电视、\n广播媒体','问答社区','新闻资\n讯平台',],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel: {
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.009,
                },

                interval: 0,
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

        yAxis: {
            type: 'value',
            name:'家',
            min:0,
            max:25,
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
            splitNumber:5,
            interval:5,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '数值',
            type: 'bar',
            data: [24,18,18,17,14,8,6],
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,
            },
            barMaxWidth:60,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
        }]
      };
    $.get('./data/application-science.json').done(function (data) {
        if (typeof (data) == "string") {
             data = JSON.parse(data);
         }
         mychart.setOption({
             xAxis: [
                 {
                     data: data.bar1, //类目数据（在类目轴中有效）
                 }
             ],
 
             series: [{
                 data: data.bar1_value,
             }]
         }); 

    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    
                },
                formatter: '{b}: {c}万元',
            },
            title:{
                text:'各学科领域获得科普资助情况',
                left:'center',
                top:0,
                textStyle:{
                    color:'#333333',
                    fontSize:'130%'
                }
            },
            grid:{
                containLabel:true,
                bottom:0
            },
            xAxis: {
                data: ['天文和\n地球科学','生物生命\n科学','信息科学','物理、化\n学和数学','应用科学\n和工程技术',
            '生态环境','材料、前沿\n科学和未来科技','其他'],
                axisLabel: {
                    textStyle:{
                        fontSize:a*0.009,
                        lineHeight:a*0.009,
                    },
                    interval: 0,
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
    
            yAxis: {
                type: 'value',
                name:'万元',
                min:0,
                max:1000,
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
                splitNumber:5,
                interval:200,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
    
            },
            series: [{
                name: '数值',
                type: 'bar',
                data: [952.1, 910.6, 531.38, 373.4, 327.53, 207, 41, 0],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                    
                },
                barMaxWidth:60,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}'
                    }
                },
            }]
          };
    
    
        $.get('./data/application-science.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.bar1);
                 data = JSON.parse(data);
             //alert('1'+data.bar1);
             }
             //alert(data.bar1);
             mychart.setOption({
                 xAxis: [
                     
                     {
                         data: data.bar2, //类目数据（在类目轴中有效）
                     }
                 ],
     
                 series: [{
                     data: data.bar2_value,
                 }]
             });
        });
        
    mychart.setOption(option);
    }