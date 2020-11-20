function bar1(mychart,a){
    option = {
        title: {
            text: '2019年研究单位ARP系统应用现状',
            left: 'center',
            top: 5,
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
            formatter: '{b}: {c}家',
            
            
        },

        xAxis: {
            data: ['需提升','一般','良好','优秀'],
            //name:'单位：万元',
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
            show:true,
        },

        yAxis: {
            type: 'value',
            name:'家',
            min:0,
            max:38,
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
            interval:8,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '应用现状',
            type: 'bar',
            data: [17,29,33,25],
            itemStyle:{
                color:'#FF7853',
                opacity:0.85,
                
            },
            barMaxWidth:50,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
        }]
      };

      $.get('./data/application-manage.json').done(function (data) {
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
                data: data.arpnow,
            }]
        });

    });


    mychart.setOption(option);
}
