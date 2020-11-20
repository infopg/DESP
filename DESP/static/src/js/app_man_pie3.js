function pie31(mychart,a){
    option = {
        color:['#ebdba4','#FFAE57', '#FF7853' ,'#EA5151', '#893448'],
        title:{
            text:'2019年研究单位除ARP系统外\n科研管理信息系统使用情况',
            textStyle:{
                color:'#333333',
                fontSize:'130%'
            },
            bottom:'3%',
            left:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} {b}: {c}  ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['>30个项目','20~30个项目','10~20个项目','<10个项目'],
            itemGap:5,
            type:'scroll',
            top:'10%',
            right:a*0.003,
        },
        series: [
            {
                name:'研究单位其他科研管理系统使用',
                type:'pie',
                radius:'55%',
                center: ['50%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: true,
                data: [
                    {value: 5, name: '>30个项目'},
                    {value: 3, name: '20~30个项目'},
                    {value: 19, name: '10~20个项目'},
                    {value: 77, name: '<10个项目'},
                ],
                label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 2
                    }
                },
            }
        ]
    };

    mychart.setOption(option);
}

    function pie32(mychart,a) {
        option = {
            color: ['#ebdba4', '#FFAE57', '#FF7853', '#EA5151', '#893448'],
            title: {
                text: '2019年研究单位除ARP系统外\n科研管理信息系统开发方式',
                textStyle: {
                    color: '#333333',
                    fontSize: '130%'
                },
                bottom: '3%',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} {b}: {c}  ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 0,
                data: ['自行','委托','购买','联合','开源'],
                itemGap: 5,
                type: 'scroll',
                top: '10%',
                right: a * 0.003,
            },
            series: [
                {
                    name: '研究单位其他科研管理系统开发方式',
                    type: 'pie',
                    radius:'55%',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    avoidLabelOverlap: true,
                    data: [
                        {value: 279, name: '自行'},
                        {value: 205, name: '委托'},
                        {value: 191, name: '购买'},
                        {value: 107, name: '联合'},
                        {value: 19, name: '开源'},
                    ],
                    label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
                        },
                        smooth: 0.2,
                        length: 6,
                        length2: 10
                    }
                },
                }
            ]
        };

        mychart.setOption(option);
    }


function pie33(mychart,a) {
    option = {
        color: ['#ebdba4', '#FFAE57', '#FF7853', '#EA5151', '#893448'],
        title: {
            text: '2019年研究单位除ARP系统外\n科研管理信息系统知识产权',
            textStyle: {
                color: '#333333',
                fontSize: '130%'
            },
            bottom: '3%',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} {b}: {c}  ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['商业','自有','开源','其他'],
            itemGap: 5,
            type: 'scroll',
            top: '10%',
            right: a * 0.003,
        },
        series: [
            {
                name: '研究单位其他科研管理系统知识产权',
                type: 'pie',
                radius:'55%',
                center: ['50%', '50%'],
                roseType: 'radius',
                avoidLabelOverlap: true,
                data: [
                    {value: 418, name: '商业'},
                    {value: 283, name: '自有'},
                    {value: 54, name: '开源'},
                    {value: 52, name: '其他'},
                ],
                label: {
                    normal: {
                        textStyle: {
                            color: '#333333',
                            fontSize:a*0.009,

                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
                        },
                        smooth: 0.2,
                        length: 6,
                        length2: 10
                    }
                },
            }
        ]
    };

    mychart.setOption(option);

}