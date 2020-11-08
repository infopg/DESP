function bar1(mychart,a){
    option = {
        title:{
            text:' 研究单位所共享和管理的仪器设备情况',
            subtext:'仅显示前10名情况',
            textStyle:{
                color:'#333333',
                fontSize:'130%',
            },
            subtextStyle:{
                color:'#333333',
                fontSize:'70%'
            },
            top:0,
            left:'center',
        },
        
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}台',
            
            
        },
        grid:{
            containLabel:true,
            left:'0%',
        },
        yAxis: {
            data: ['化学研究所','新疆理化技术研究所','水生生物研究所','苏州纳米技术与\n纳米仿生研究所','空调信息创新研究所',
            '上海药物研究所','微电子研究所','上海高等研究所','生物物理研究所','长春光学精密\n机械与物理研究所',],
            // nameTextStyle:{
            //     color:'#333333',
            //     fontSize:a*0.009,
            // },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },
                interval:0
            },
            axisTick:{
                show: true,
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
            name:'台',
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
            interval:50,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '仪器设备',
            type: 'bar',
            data: [207, 209, 209, 217, 221, 222, 223, 229, 317, 386],
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,              
            },
            barMaxWidth:30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}台'
                }
            },
        }]
      };


mychart.setOption(option);
    }

    function bar12(mychart,a){
    option = {
        title:{
            text:' 研究单位所共享和管理的仪器设备预约单提交情况',
            subtext:'仅显示前10名情况',
            textStyle:{
                color:'#333333',
                fontSize:'130%',
            },
            subtextStyle:{
                color:'#333333',
                fontSize:'70%'
            },
            top:0,
            left:'center',
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            },
            formatter: '{b}: {c}个',


        },
        grid:{
            containLabel:true,
            left:'0%',
        },
        yAxis: {
            data: ['过程工程研究所', '昆明植物研究所', '上海药物研究所', '分子细胞科学\n卓越创新中心', '半导体研究所', '苏州纳米技术\n与纳米仿生研究所', '生物物理研究所', '宁波材料技术\n与工程研究所', '国家纳米科学中心', '化学研究所',],
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },
                interval:0
            },
            axisTick:{
                show: true,
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
            name:'个',
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
            splitNumber:6,
            interval:10000,
            min:0,
            max:60000,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '预约单',
            type: 'bar',
            data: [26129, 26907, 30184, 32106, 36297, 40327, 42467, 46637, 49679, 55058,],
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,
            },
            barMaxWidth:30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}'
                }
            },
        }]
      };
    mychart.setOption(option);
    }

    function bar2(mychart,a){
        option = {
            title:{
                text:' 研究单位大装置共享平台机时提供情况',
                subtext:'仅显示前10名情况',
                textStyle:{
                    color:'#333333',
                    fontSize:'130%',
                },
                subtextStyle: {
                    color:'#333333',
                    fontSize:'70%'
                },
                left:'center',
                top:0
            },
            
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    
                },
                formatter: '{b}: {c}',
            },
            grid:{
                containLabel:true,
                left:0,
            },
            yAxis: {
                data: ['上海生命科学研究院_拆' ,'大连化学物理研究所' ,'近代物理研究所', '高能物理研究所', '上海光学精密机械研究所' ,'武汉病毒研究所',
 '合肥物质科学研究院', '上海高等研究院', '上海天文台' ,'生物物理研究所'],
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    interval:0
                }
            },
    
            xAxis: {
                type: 'value',
                // name:'',
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
                interval:30000,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
    
            },
            series: [{
                name: '使用机时',
                type: 'bar',
                data: [0,170,  1400,     1495.46,   2712,    34612,    36829,
  98792,   114231,  150381,],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                    
                },
                barMaxWidth:30,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter:'{c}'
                    }
                },
            }]
          };
         mychart.setOption(option);
        }


            function bar22(mychart,a){
        option = {
            title:{
                text:' 研究单位大装置共享平台课题预约情况',
                subtext:'仅显示前10名情况',
                textStyle:{
                    color:'#333333',
                    fontSize:'130%',
                },
                subtextStyle: {
                    color:'#333333',
                    fontSize:'70%'
                },
                left:'center',
                top:0
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',

                },
                formatter: '{b}: {c}',
            },
            grid:{
                containLabel:true,
                left:0,
            },
            yAxis: {
                data: ['武汉病毒研究所' ,'上海光学精密机械研究所' ,'上海天文台' ,'合肥物质科学研究院', '强磁场科学中心_二级' ,'近代物理研究所',
 '高能物理研究所', '上海生命科学研究院_拆', '上海高等研究院' ,'生物物理研究所'],
                show:true,
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    interval:0
                }
            },

            xAxis: {
                type: 'value',
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
                max:15000,
                splitNumber:5,
                interval:3000,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }

            },
            series: [{
                name: '课题预约',
                type: 'bar',
                data: [ 57,58,110,   304,   304,  436,   618,  1116,  4162, 34118,],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,

                },
                barMaxWidth:30,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter:'{c}'
                    }
                },
            }]
          };
         mychart.setOption(option);
        }