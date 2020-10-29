function bar(mychart,a){
    option = {
        title:{
            text:' 研究单位通过教育云平台完成工作情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            x:'center'
        },
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}家',
            
            
        },

        grid: {
            left: 0,
            bottom:0,
            containLabel: true
          },

        yAxis: {
            type:'category',
            data: ['教师个人主页填报率\n达到50%','按时完成学位初审工作','按时完成学生的培养管理',
            '按时完成学生的学籍管理','按时完成招生的过程管理'],
            //name:'小时',
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
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

        xAxis: {
            type: 'value',
            name:'家',
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
            interval:20,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '人均时长',
            type: 'bar',
            data: [68,103,89,103,102],
            itemStyle:{
                color:'#FFAE57',
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

      $.get('./data/application-education.json').done(function (data) {
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
                    data: data.bar, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.bar_value,
            }]
        });

    });
mychart.setOption(option);
    }