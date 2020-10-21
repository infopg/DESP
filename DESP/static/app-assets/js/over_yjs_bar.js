function bar(chart,a){
    
    option = {
        //背景颜色
        backgroundColor:'#333333',//#2B32B2',
        //标题
        color:['#e  a5151','#ff7853','#ffae57'],
        title:{
            text:'研究单位信息化评估平均成绩与标准差', //标题文字
            //标题文本样式
            textStyle:{
                color:'#e3e3e3', //文本颜色
                fontSize:a*0.013, //字号
            },
            left:'center', //标题水平位置：居中
            //top:0,
            bottom:10,

        },

        //提示框组件
        tooltip: {
            trigger: 'axis', //坐标轴触发
            //坐标轴指示器配置项
            axisPointer: {
                type: 'cross', //指示器类型：十字准星指示器，表示启用两个正交的轴的 axisPointer。
                //十字准星样式
                crossStyle: {
                    color: '#aaaaaa' //颜色
                }
            },
        },

        // 图例组件样式
        legend: {
            data:['信息化基础环境','信息化应用','网络安全','标准差'],//图例的数据数组。通常为一个字符串，每一项代表一个系列的name
            //文本样式
            textStyle:{
                color:'rgb(238, 197, 102)', //颜色
                fontSize:a*0.009,
            },
            itemGap: 50,
            type:'scroll',
            
        },

        // legend: {
        //     data:['信息化基础环境','信息化应用','网络安全','标准差'],
        //     itemGap:30,
        // },
        grid:{
            containLabel:true,
        },
        //全局字体样式
        textStyle:{
           
                color:'rgb(238, 197, 102)',
                fontSize:a*0.009,
        },

        //x轴（横轴）样式
        xAxis: [
            {
                type: 'category', //坐标轴类型：类目型
                show:true,
                boundaryGap:true,
                data: [], //类目数据（在类目轴中有效）
                //坐标轴指示器
                axisPointer: {
                    type: 'shadow' //指示器类型：阴影指示器
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3'

                    },
                },
                axisTick:{
                    show: false,
                    alignWithLabel:true,
                    length:0,
                },
                axisLabel:{
                    textStyle:{
                        fontSize:a*0.009
                    }
                }
                
            }
        ],
        //y轴（纵轴）样式
        yAxis: [
            {
                type: 'value', //坐标轴类型：数值轴
                name: '平均分', //坐标轴名称
                min: 0, //刻度最小值
                max: 100, //刻度最大值
                interval: 20, //强制设置坐标轴分割间隔
                //坐标轴刻度标签的相关设置
                axisLabel: {
                    formatter: '{value}', //刻度标签的内容格式器，支持字符串模板和回调函数两种形式 
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            },
            {
                type: 'value',
                name: '标准差',
                min: 0,
                max: 12.5,
                interval: 2.5,
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        fontSize:a*0.009,
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#aaaaaa',
                        opacity:0.4,
                    }
                }
            }
        ],

        //系列列表
        series: [
            {
                name:'信息化基础环境', //系列名称，用于tooltip的显示，legend 的图例筛选
                type:'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data:[],
                //图形样式
                itemStyle:{
                   
                    
                    opacity:0.75,
                    
                    
                },
                barMaxWidth:60,
                label:{
                    show:false,
                    textStyle:{
                        color:'#fff',

                    }
                }
               
            },
            {
                name:'信息化应用', //系列名称，用于tooltip的显示，legend 的图例筛选
                type:'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data:[],
                //图形样式
                itemStyle:{
                    
                    opacity:0.75,
                    
                    
                },
                barMaxWidth:60,
                label:{
                    show:false,
                    textStyle:{
                        color:'#fff',

                    }
                }
               
            },
            {
                name:'网络安全', //系列名称，用于tooltip的显示，legend 的图例筛选
                type:'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data:[],
                //图形样式
                itemStyle:{
                    
                    opacity:0.75,
                    
                },
                barMaxWidth:60,
                label:{
                    position: 'insideBottom',	
                    show:false,
                    textStyle:{
                        color:'#fff',

                    }
                }
               
            },
            {
                name:'总分',
                barMaxWidth:0,
                
                type:'bar',
                stack: '值',
                itemStyle : { 	
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data:[61.7, 63.12, 64.56]
            },
            {
                name:'标准差',//系列名称
                type:'line', //图表类型：折线图
                //使用的 y 轴的 inde（在单个图表实例中存在多个 y轴的时候有用）
                yAxisIndex: 1,
                data:[],
                itemStyle:{
                    color:'#b5304d',
                    borderColor:'#b5304d',
                },
                lineStyle:{
                    width:2,

                },
                label:{
                    show:true,
                    textStyle:{
                        color:'#fff'
                    }
                }
    
            }
        ]
    };
    
    $.get('./data/overview_yjs.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.avg);
            data = JSON.parse(data);
            //alert(data.year);
        }
        //alert(data.std);
        chart.setOption({
            xAxis: [
                {
                    data: data.year, //类目数据（在类目轴中有效）
                }
            ],

            series: [{  
                name: '信息化基础环境',
                data: data.x1,
            },
            {  
                name: '信息化应用',
                data: data.x2,
            },
            {  
                name: '网络安全',
                data: data.x3,
            },
            {  
                name: '标准差',
                data: data.std,
            }
            ]
        });

    });




        //使用制定的配置项和数据显示图表
        chart.setOption(option);

}
