function bar1(mychart,a){
    option = {
        title: {
            text: '各学科获得资助科学数据库项目',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:5

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}万元',
            
            
        },

        xAxis: {
            data: ['生态环境','天文和\n地球科学','物理、化\n学和数学','应用科学\n和工程技术','生物生\n命科学',
        '其他','信息科学','材料、前\n沿科学和\n未来科技'],
            axisLabel: {
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },

            interval: 0,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            show:true,
        },

        yAxis: {
            type: 'value',
            name:'万元',
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
            min:0,
            max:51000,
            interval:8500,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '应用现状',
            type: 'bar',
            data: [50364, 39268, 19582, 17264, 14597, 600, 583, 26],
            itemStyle:{
                color:'#FF7853',
                opacity:0.85,
                
            },
            barMaxWidth:50,

        }]
      };

      $.get('./data/app_res_data.json').done(function (data) {
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
                    data: data.x1, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.y1,
            }]
        });

    });


    mychart.setOption(option);
}
