function bar1(mychart,a){
    option = {
        title: {
            text: '2019年各学科数据库项目获得资助金额',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            left:'center',
            top:5

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}万元',
            
            
        },

        xAxis: {
            data: ['生态环境','天文和\n地球科学','物理、化\n学和数学','应用科学\n和工程技术','生物生\n命科学',
        '其他','信息科学','材料、前\n沿科学和\n未来科技'],
            axisLabel: {
                textStyle:{
                    fontSize:a*0.009,
                    lineHeight:a*0.01,
                },

            interval: 0,
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            show:true,
        },

        yAxis: {
            type: 'value',
            name:'万元',
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
            min:0,
            max:51000,
            interval:8500,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '应用现状',
            type: 'bar',
            data: [50364, 39268, 19582, 17264, 14597, 600, 583, 26],
            itemStyle:{
                color:'#ffae57',
                opacity:0.85,
                
            },
            barMaxWidth:50,

        }]
      };
        mychart.setOption(option);
}



    function bar3(mychart,a) {
        option = {
            title: {
                text: '2019年各学科数据库课题组情况',
                textStyle: {
                    color: '#333333',
                    fontSize: a * 0.013
                },
                left: 'center',
                top: 5

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',

                },
                formatter: '{b}: {c}个',


            },

            xAxis: {
                data: ['其他', '信息科学', '材料、前沿\n科学和\n未来科技', '应用科学\n和工程技术', '天文和\n地球科学', '生态环境',
                    '物理、\n化学和数学', '生物生命科学'],
                axisLabel: {
                    textStyle: {
                        fontSize: a * 0.009,
                        lineHeight: a * 0.01,
                    },

                    interval: 0,
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                    length: 0,
                },
                show: true,
            },

            yAxis: {
                type: 'value',
                name: '个数',
                show: true,
                nameTextStyle: {
                    color: '#333333',
                    fontSize: a * 0.009,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: a * 0.009,

                    }
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                    length: 0,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#333333',
                    }
                },
                splitNumber: 5,
                min: 0,
                max: 200,
                interval: 50,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#333333',
                        opacity: 0.4,
                    }
                }

            },
            series: [{
                name: '个数',
                type: 'bar',
                data: [3, 19, 31, 49, 71, 73, 121, 183],
                itemStyle: {
                    color: '#EA5151',
                    opacity: 0.85,

                },
                barMaxWidth: 50,

            }]
        }
        mychart.setOption(option);
    };





