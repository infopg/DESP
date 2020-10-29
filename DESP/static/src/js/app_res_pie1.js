function pie11(mychart){
        
    option = {
        backgroundcolor:'#333333',
        color:['#FFAE57', '#FF7853', '#EA5151', '#ebdba4', '#893448'],
        
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            //x: 'right',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            textStyle:{
                color:'#e3e3e3'
            },
            top:'20%',
            right:'7%'
            
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };
    mychart.setOption(option);
}

    function pie12(mychart){
        
        option = {
            backgroundcolor:'#333333',
            color:['#FFAE57', '#FF7853', '#EA5151', '#ebdba4', '#893448'],
        

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                //x: 'right',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                textStyle:{
                    color:'#e3e3e3'
                },
                top:'20%',
                right:'7%'
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
    mychart.setOption(option);
    }



    function pie13(mychart){
        option = {
            backgroundcolor:'#333333',
            color:['#FFAE57', '#FF7853', '#EA5151', '#ebdba4', '#893448'],
            
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                //x: 'right',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                textStyle:{
                    color:'#e3e3e3'
                },
                top:'20%',
                right:'7%'
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
    mychart.setOption(option);
    }

    