function bar(mychart,a){
    option = {
        title:{
            text:' 2019年研究单位通过教育云平台完成工作情况',
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

    mychart.setOption(option);
}


function bar2(mychart,a){
    option = {
        title:{
            text:' 2019年研究单位教务管理信息化应用情况',
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
            data: ['无应用','能利用教育云\n提供的所级教务系统\n完成日常教学管理工作','仅利用教育云\n提供的所级教务系统\n补录学位填报','自建教务管理系统\n支持日常教学管理',],
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
            type: 'bar',
            data: [6,4,6,88],
            itemStyle:{
                color:'#EA5151',
                opacity:0.85,

            },
            barMaxWidth:50,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter:'{c}家'
                }
            },
        }]
      };

    mychart.setOption(option);
}


function bar3(mychart,a){
    option = {
        title:{
            text:' 2019年研究单位自建教育系统情况',
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
            data: ['无自建系统和建设计划','有计划自建系统','有相应自建管理系统',],
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
            type: 'bar',
            data: [31,17,56],
            itemStyle:{
                color:'#ebdba4',
                opacity:0.85,

            },
            barMaxWidth:50,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter:'{c}家'
                }
            },
        }]
      };

    mychart.setOption(option);
}





