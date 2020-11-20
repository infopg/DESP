function barh(chart,a){
    option = {
        color:[ '#EA5151', '#FFAE57','#ebdba4', '#893448'],
        title: {
            text: '2019年自建管理系信息系统涵盖功能情况',
            left: 'center',
            top: 5,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },
        grid:{
            containLabel:true,
            bottom:'3%',
            left:'5%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}家',
            
            
        },

        xAxis: {
            data: ['软\n件\n质\n量\n管\n理','运\n维\n管\n理','交\n流\n合\n作','绩\n效\n管\n理','培\n训\n与\n考\n试',
            '审\n批\n管\n理','网\n站\n管\n理','党\n务\n管\n理','运\n营\n管\n理','档\n案\n管\n理',
            '成\n果\n管\n理', '项\n目\n管\n理', '采\n购\n管\n理','安\n全\n管\n理','科\n研\n管\n理',
            '行\n政\n管\n理','综\n合\n管\n理', '资\n源\n管\n理',],
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
            
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '自建管理系信息系统涵盖功能情况',
            type: 'bar',
            data: [3,3,4,6,6,9,10,11,14,16,25,27,32,49,90,102,151,236],
            itemStyle:{
                color:'#FFae57',
                opacity:0.85,
                
            },
            barMaxWidth:50,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter:'{c}'
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
        chart.setOption({
            xAxis: [
                
                {
                    data: data.x2, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                data: data.passport,
            }]
        });

    });


    chart.setOption(option);
}
