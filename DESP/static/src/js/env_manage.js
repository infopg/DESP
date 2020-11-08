function bar(mychart,a){
    option = {
        color:['#893448','#b5304d', '#EA5151', '#FF7853', '#FFAE57', '#ffc786', '#ebdba4'],
        title:{
            text:'信息化公共项目总投入',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },
        legend: {
            data: ['网络通讯费','图书数字文献','网络软硬件设备','网络安全设备及投入','自筹系统开发', '其他'],
            textStyle:{
                color:'#333333',
            },
            bottom:'5%',
            itemGap:50,
            left:30,
            type:'scroll',
            textStyle:{
                color:'#333333',
                fontSize:a*0.008,
            }

        },
        grid:{
            containLabel:true,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: '万元',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.008,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
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
            name:'年份',//y轴单位
            type: 'category',
            data: ['2017','2018','2019'],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.008,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
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
            name: '网络通讯费',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',
            data: [7410, 7461, 7456],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '图书数字文献',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',

            data: [14533, 14769, 15564],
            itemStyle:{
                opacity:0.85,
            }
        },

        {
            name: '网络软硬件设备',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',

            data: [11606, 11076, 16584],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '网络安全设备及投入',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',

            z:999,
            data: [2472, 3503, 4459],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '自筹系统开发',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',

            data: [6171,6549,6750],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '其他',
            type: 'bar',
            barMaxWidth:40,
            stack: '总量',

            data: [8414, 9651, 7937],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('/static/DATA/environment-manage.json').done(function (data) {
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
                    name:'年份',
                    data: data.year, //类目数据（在类目轴中有效）
                }
            ],

            series: [{
                name: '网络通讯费',
                data: data.netCom,
            },
            {
                name: '图书数字文献',
                data: data.digit,
            },

            {
                name: '网络软硬件设备',
                data: data.netsoft,

            },
            {
                name: '网络安全设备及投入',
                data: data.netsceure,
            },
                    {
                name: '自筹系统开发',
                data: data.system,

            },
            {
                name: 'ARP硬件及续保',
                data: data.arp,
            },{
                name: '其他',
                data: data.other,
            },
        ]
        });

    });


    mychart.setOption(option);
    }

function barh(chart,a){
    option = {
        title: {
            text: '研究单位基本信息化管理制度情况',
            textStyle:{
                color:'#333333', //文本颜色
                fontSize:a*0.013 //字号
            },
            left:'center', //标题水平位置：居中
        },

        legend: {
            data: [],
           show:false,
            textStyle:{
                color:'#333333',
            },
            bottom:'5%',
            type:'scroll',
            itemGap:50,
            textStyle:{
                color:'#333333',
                fontSize:a*0.008,
            }

        },
        tooltip: {
            formatter: '{b}: {c}家',
        },
        grid:{
            containLabel:true,
        },
        yAxis: {
            name: '家',//y轴标签
            type: 'value',
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.008,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.00750,
                    lineHeight:a*0.01,
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#333333',
                }
            },
            axisTick:{
                show: false,

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

        xAxis: {
            name:'',//x轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#333333',
                fontSize:a*0.008,
            },
            axisTick:{
                show: false,

            },
            axisLabel:{
                interval:0,
                rotate:40,
                textStyle:{
                    fontSize:a*0.008,
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#333333',
                }
            },
            z:999
        },
        grid: {
            containLabel: true
        },

        series: [{
            name:'2019年',
            data: [],//统计值
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
            itemStyle:{
                color:'#EA5151',
                opacity:0.85,
                // shadowBlur:5,
                // shadowColor:'#EA5151'
            },
            barMaxWidth:50,

        },

        ],

    };


    $.get('/static/DATA/environment-manage.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        chart.setOption({
            legend:{
                data:data.year,
            },
            xAxis: [{
                    data: data.category, //类目数据（在类目轴中有效）
            }],

            series: [{
                name:'2019年',
                data: data.y2018,//统计值
            }]
        });

    });


        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}

function pie1(mychart,a){
    option = {
        // backgroundColor: '#333333',
        color:['#893448','#EA5151', '#FF7853', '#FFAE57', '#ebdba4'],
        title: {
            text: '研究单位信息化相关项目情况',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: '{b}: {c} 项'
        },
        dataset:{
            source:[
                ['product','安全措施'],
                ['战略性先导科技专项（B类）',16],
                ['战略性先导科技专项（A类）',27],
                ['国家重点研发项目',52],
                ['自然科学基金委项目',28],
                ['重大科技专项',9]
            ]
        },
        series : [
            {
                name:'安全措施',
                type:'pie',
                data:[
                    {value:16, name:'战略性先导科技专项（B类）'},
                    {value: 27, name:'战略性先导科技专项（A类）'},
                    {value: 52, name:'国家重点研发项目'},
                    {value: 28, name:'自然科学基金委项目'},
                    {value: 9, name:'重大科技专项'},
                ],
                radius : '55%',
                center: ['50%', '60%'],
                encode:{
                    itemName:'approach',
                    value:'value'
                },
                roseType: 'radius',
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
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-manage.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.security,
            },

        });

    });

    mychart.setOption(option);
}

function pie2(mychart,a){
    option = {
        // backgroundColor: '#333333',
        color:['#FFAE57', '#FF7853', '#893448','#EA5151', ],
        title: {
            text: '研究单位设立信息化运行机构情况',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/576)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[
                ['product', '设立情况'],
                ['有信息化运行机构',78],
                ['无信息化运行机构',26]
                            ]
        },
        series : [
            {
                name:'设立情况',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                roseType: 'radius',
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
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-manage.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.academic,
            },

        });

    });

    mychart.setOption(option);
}

function pie3(mychart,a){
    option = {
        // backgroundColor: '#333333',
        color:['#FFAE57', '#FF7853', '#893448','#EA5151', ],
        title: {
            text: '专职信息化管理人员职称情况',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#333333',
                fontSize:a*0.013
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'人 (' + ((params.value[1]/576)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },
        series : [
            {
                name:'学历情况',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                roseType: 'radius',
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
                            color: '#333333'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('/static/DATA/environment-manage.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.title,
            },

        });

    });

mychart.setOption(option);
    }