function overlap(mychart,a){
    
    option = {
        color:['#893448','#b5304d', '#EA5151', '#FF7853', '#FFAE57', '#ffc786',],
        title: {
            text: '各学科在科学计算发展和应用方面取得的主要成果统计',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:2

        },
        legend: {
            data:  [ "获奖", "软件著作权","论文", "专著","专利","数据集"],
            textStyle:{
                color:'#333333',
            },
            bottom:'1%',
            itemGap:40,
            type:'scroll',
            textStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            type:'scroll',
            left:'center'

        },
        grid:{
            containLabel:true,
            left:1
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: '个',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
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
            splitNumber:5,
            interval:140,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }    
        },

        yAxis: {
            //name:'年份',//y轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
                    lineHeight:a*0.01,
                }
            },
            axisTick:{
                show: false,
               
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
            },
            z:999,
        },
        grid: {
            containLabel: true
        },

        series: [
        {
            name: '获奖',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '软件著作权',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

        {
            name: '论文',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '专著',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            z:999,
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '专利',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '数据集',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
    ]};

    $.get('./data/app_res_cal.json').done(function (data) {
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
                    //name:'年份',
                    data: data.x3, //类目数据（在类目轴中有效）
                }
            ],

            series: [
                {
                    name: '获奖',
                    data: data.awards,
                },
                {
                    name: '软件著作权',
                    data: data.software,
                },
        
                {
                    name: '论文',
                    data: data.paper,
                },
                {
                    name: '专著',
                    data: data.publish,
                },
                {
                    name: '专利',
                    data: data.patent,
                },{
                    name: '数数据集',
                    data: data.dataset,
                }]
        });

    });



    mychart.setOption(option);
}

