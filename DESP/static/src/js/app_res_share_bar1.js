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
            formatter: '{a}{b}台: {c}台',
            
            
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

      $.get('./data/app_res_share.json').done(function (data) {
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
                    data: data.y1, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.x1,
            }]
        });

    });
mychart.setOption(option);
    }

    function bar2(mychart,a){
        option = {
            title:{
                text:' 研究单位预约仪器设备情况',
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
                formatter: '{a}{b}台: {c}台',   
            },
            grid:{
                containLabel:true,
                left:0,
            },
            yAxis: {
                data: ['过程工程研究所','昆明植物研究所','上海药物研究所','分子细胞科学\n卓越创新中心','半导体研究所',
                    '苏州纳米技术与\n纳米仿生研究所','生物物理研究所','宁波材料技术\n与工程研究所','国家纳米科学中心',
                    '化学研究所',],
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
                interval:10000,
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
                data: [26129,26907,30184,32106,36297,40327,42467,46637,49679,55058 ],
                itemStyle:{
                    color:'#FF7853',
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
    
          $.get('./data/app_res_share.json').done(function (data) {
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
                        data: data.y2, //类目数据（在类目轴中有效）
                    }
                ],
    
                series: [{
                    data: data.x2,
                }]
            });
    
        });
    mychart.setOption(option);
        }