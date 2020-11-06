function barh1(mychart,a){
    option = {
        color:['#FFAE57'],
        title: {
            text: '研究单位部署终端安全软件类型和数量',
            subtext:'微博评分前10名',
            left: 'center',
            top: 0,
            textStyle: {
                color: '#333333',
                fontSize:'130%'
            },
            subtextStyle:{
                color:'#333333',
                fontSize:'90%',
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}分',
            
            
        },
        grid:{
            containLabel:true,
            left:0
        },
        yAxis: {
            data: ['古脊椎动物与\n古人类研究所','武汉植物园','沈阳自动化研究所','紫金山天文台','大连化学物理研究所',
        '国家空间科学中心','地理科学与资源研究所','高能物理研究所','西双版纳热带植物园','大气物理研究所'],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel: {
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

        xAxis: {
            type: 'value',
            name:'分',
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
            interval:1000,
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
            data: [530, 550, 864, 866, 922, 1058, 1248, 1412, 3406, 3868],
            
            itemStyle:{
                color:'#FF7853',
                opacity:0.85,
                
            },
            barMaxWidth:30,

            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}分'
                }
            },
        },
        
        ]
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
             yAxis: [              
                 {
                     data: data.barh1, //类目数据（在类目轴中有效）
                 }
             ],
 
             series: [{
                 data: data.barh1_value,
             }]
         });

    });
    mychart.setOption(option);
}

    function barh2(mychart,a){
        option = {
            color:[ '#EA5151', '#FFAE57','#ebdba4', '#893448'],
            title: {
                text: '研究单位部署终端安全软件类型和数量',
                subtext:'微信评分前10名',
                left: 'center',
                top:0,
                textStyle: {
                    color: '#333333',
                    fontSize:'130%'
                },
                subtextStyle: {
                    color: '#333333',
                    fontSize:'90%'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    
                },
                formatter: '{b}: {c}分',
                
                
            },
            grid:{
                containLabel:true,
                left:0
            },
            yAxis: {
                data: ['海洋研究所','物理研究所','金属研究所','大气物理研究所','西北生态环境资源研究院',
            '大连化学物理研究所','微生物研究所','长春光学精密机\n械与物理研究所','空天信息创新研究院','心理研究所'],
                //name:'小时',
                nameTextStyle:{
                    color:'#333333',
                    fontSize:a*0.009,
                },
                axisLabel: {
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
    
            xAxis: {
                type: 'value',
                name:'分',
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
                interval:1000,
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
                data: [2206, 2298, 2332, 2549, 2634, 2657, 2896, 3112, 3305, 3609],
                itemStyle:{
                    color:'#EA5151',
                    opacity:0.85,
                    
                },
                barMaxWidth:30,
                //barCategoryGap:'100%',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}分'
                    }
                },
            }]
          };
    
          $.get('./data/application-science.json').done(function (data) {
            //alert(data.bar1);
        if (typeof (data) == "string") {
            //alert('2'+data.bar1);
             data = JSON.parse(data);
         //alert('1'+data.bar1);
         }
         //alert(data.bar1);
         mychart.setOption({
             yAxis: [
                 
                 {
                     data: data.barh, //类目数据（在类目轴中有效）
                 }
             ],
 
             series: [{
                 data: data.barh_value,
             }]
         });
 
     });
    
    mychart.setOption(option);
    }

