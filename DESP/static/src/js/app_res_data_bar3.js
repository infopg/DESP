function bar2(mychart,a){
    option = {
        color:['#893448','#b5304d', '#EA5151', '#FF7853', '#FFAE57', '#ffc786', '#ebdba4'],
        title: {
            text: '各学科数据库成果统计',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:5

        },
        legend: {
            data:  [ "奖项", "著作", "专利", "软件著作权","论文", "数字论文","其他"],
            textStyle:{
                color:'#333333',
            },
            bottom:'5%',
            itemGap:50,
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
                    fontSize:a*0.009,
                    lineHeight:a*0.009,
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
            name: '奖项',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '著作',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

        {
            name: '专利',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '软件著作权',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            z:999,
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '论文',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '数字论文',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '其他',
            type: 'bar',
            barMaxWidth:20,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('./data/app_res_data.json').done(function (data) {
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
                    name: '奖项',
                    data: data.awards,
                },
                {
                    name: '著作',
                    data: data.publish,
                },
        
                {
                    name: '专利',
                    data: data.patent,
                },
                {
                    name: '软件著作权',
                    data: data.software,
                },
                {
                    name: '论文',
                    data: data.paper,
                },{
                    name: '数字论文',
                    data: data.datapaper,
                },{
                    name: '其他',
                    data: data.other,
                }]
        });

    });



    mychart.setOption(option);
}
