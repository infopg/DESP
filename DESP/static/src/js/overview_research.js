var lineStyle = {
    normal: {
        width: 1.5,
        opacity: 0.5
    }
};

function rad(chart, a) {
    option = {
        title: {
            text: '2019年研究单位9项指标平均成绩',
            x: 'center', //水平位置：居中
            y: 'bottom', //垂直位置：底部
            textStyle: {
                color: '#333333',
                fontSize: a * 0.013,
            }
        },
        center: ['50%', '50%'],
        radar: {
            indicator: [
                { name: '信息化管理与运行', max: 10 },
                { name: '信息化基础设施', max: 10 },
                { name: '信息化资源', max: 10 },
                { name: '科研信息化应用', max: 10 },
                { name: '管理信息化应用', max: 10 },
                { name: '教育信息化应用', max: 10 },
                { name: '科学传播应用', max: 10 },
                { name: '网络安全管理', max: 10 },
                { name: '网络安全技术保障', max: 10 }
            ],
            shape: 'circle',
            radius: '65%',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#333333',
                    fontSize: a * 0.008,
                },
                lineHeight: 15,
            },
            splitArea: {
                areaStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)',

                }
            }
        },
        series: [{
            name: '研究所',
            type: 'radar',
            lineStyle: lineStyle,
            data: [{
                    value: [],
                },

            ],
            itemStyle: {
                show: true,
                normal: {
                    color: '#F9713C',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#333333',
                            fontSize: a * 0.009,
                        }
                    }

                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }]
    };
    $.get('/static/DATA/overview_yjs.json').done(function(data) {
        if (typeof(data) == "string") {
            data = JSON.parse(data);
        }
        //alert(data.average);
        chart.setOption({
            series: [{
                name: '研究所',
                data: [{
                        value: data.average19,
                        name: '2019研究所平均分'
                    },

                ],
            }]
        });

    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);

}

function bar(chart, a) {

    option = {
        color: ['#f6ba4a', '#f37021', '#45518A'],
        title: {
            text: '研究单位信息化评估平均成绩与标准差', //标题文字
            //标题文本样式
            textStyle: {
                color: '#333333', //文本颜色
                fontSize: a * 0.013, //字号
            },
            left: 'center', //标题水平位置：居中
            top:0,
            // bottom: 10,

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
            data: ['信息化基础环境', '信息化应用', '网络安全', '标准差'], //图例的数据数组。通常为一个字符串，每一项代表一个系列的name
            //文本样式
            textStyle: {
                color: '#333333', //颜色
                fontSize: a * 0.009,
            },
            itemGap: 50,
            type: 'scroll',
            bottom:'0.5%',

        },
        grid: {
            containLabel: true,
        },
        //全局字体样式
        textStyle: {

            color: '#333333',
            fontSize: a * 0.009,
        },

        //x轴（横轴）样式
        xAxis: [{
            type: 'category', //坐标轴类型：类目型
            show: true,
            boundaryGap: true,
            data: [], //类目数据（在类目轴中有效）
            //坐标轴指示器
            axisPointer: {
                type: 'shadow' //指示器类型：阴影指示器
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#e3e3e3'

                },
            },
            axisTick: {
                show: false,
                alignWithLabel: true,
                length: 0,
            },
            axisLabel: {
                textStyle: {
                    fontSize: a * 0.009
                }
            }

        }],
        //y轴（纵轴）样式
        yAxis: [{
                type: 'value', //坐标轴类型：数值轴
                name: '平均分', //坐标轴名称
                min: 0, //刻度最小值
                max: 100, //刻度最大值
                interval: 20, //强制设置坐标轴分割间隔
                //坐标轴刻度标签的相关设置
                axisLabel: {
                    formatter: '{value}', //刻度标签的内容格式器，支持字符串模板和回调函数两种形式
                    textStyle: {
                        fontSize: a * 0.009,
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#aaaaaa',
                        opacity: 0.4,
                    }
                }
            },
            {
                type: 'value',
                name: '标准差',
                min: 9,
                max: 14,
                interval: 1,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: a * 0.009,
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#aaaaaa',
                        opacity: 0.4,
                    }
                }
            }
        ],

        //系列列表
        series: [{
                name: '信息化基础环境', //系列名称，用于tooltip的显示，legend 的图例筛选
                type: 'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data: [],
                //图形样式
                itemStyle: {
                    opacity: 0.75,
                },
                barMaxWidth: 60,
                label: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                    }
                }

            },
            {
                name: '信息化应用', //系列名称，用于tooltip的显示，legend 的图例筛选
                type: 'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data: [],
                //图形样式
                itemStyle: {
                    opacity: 0.75,
                },
                barMaxWidth: 60,
                label: {
                    show: false,
                    textStyle: {
                        color: '#fff',

                    }
                }

            },
            {
                name: '网络安全', //系列名称，用于tooltip的显示，legend 的图例筛选
                type: 'bar', //图表类型：柱状图
                //系列中的数据内容数组。数组项通常为具体的数据项
                stack: '值',
                data: [],
                //图形样式
                itemStyle: {

                    opacity: 0.75,

                },
                barMaxWidth: 60,
                label: {
                    position: 'insideBottom',
                    show: false,
                    textStyle: {
                        color: '#fff',

                    }
                }

            },
            {
                name: '总分',
                barMaxWidth: 0,

                type: 'bar',
                stack: '值',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [61.7, 63.12, 64.56]
            },
            {
                name: '标准差', //系列名称
                type: 'line', //图表类型：折线图
                //使用的 y 轴的 inde（在单个图表实例中存在多个 y轴的时候有用）
                yAxisIndex: 1,
                data: [],
                itemStyle: {
                    color: '#b5304d',
                    borderColor: '#b5304d',
                },
                lineStyle: {
                    width: 2,

                },
                label: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }

            }
        ]
    };

    $.get('/static/DATA/overview_yjs.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            data = JSON.parse(data);
        }
        //alert(data.std);
        chart.setOption({
            xAxis: [{
                data: data.year, //类目数据（在类目轴中有效）
            }],

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

function bar2(mychart,a){
    option = {
        color:['#FFAE57'],
        title: {
            text: '2019年排名前10研究单位情况',
            left: 'center',
            textStyle: {
                color: '#333333',
                fontSize:'130%'
            },
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
            left:0,
            bottom:0,
            x:0
        },
        yAxis: {
            data: [],
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
            data: [],
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

      $.get('/static/DATA/overview_yjs.json').done(function (data) {
        if (typeof (data) == "string") {
             data = JSON.parse(data);
         }

         mychart.setOption({
             yAxis: [
                 {
                     data: data.name19, //类目数据（在类目轴中有效）
                 }
             ],

             series: [{
                 data: data.total19,
             }]
         });

    });
    mychart.setOption(option);
}

function map(chart, rad, a) {
    //坐标数据
    var geoCoordMap = {
        "上海天文台": [121.840371, 30.894751],
        "武汉植物园": [114.426568, 30.5483],
        "紫金山天文台": [118.835738, 32.0715],
        "上海光学精密机械研究所": [121.019979, 31.60882],
        "昆明植物研究所": [102.751317, 25.14168],
        "大连化学物理研究所": [121.585372, 38.89106],
        "武汉病毒研究所": [113.357355, 30.54543],
        "海洋研究所": [120.051772, 35.9014],
        "青岛生物能源与过程研究所": [120.5933, 36.16197],
        "长春光学精密机械与物理研究所": [125.414696, 43.85656],
        "高能物理研究所": [116.366568, 39.8283],
        "国家天文台": [116.576568, 40.0383],

    };

    //将坐标信息和对应物理量的值合在一起
    var convertData = function(name, value) {
        var res = [];
        for (var i = 0; i < name.length; i++) {
            var geoCoord = geoCoordMap[name[i]]; //首先根据data中的name作为键值读入地理坐标
            if (geoCoord) {
                res.push({
                    name: name[i],
                    value: geoCoord.concat(value[i]) //随后将地理坐标与对应信息值衔接起来
                });
            }
        }
        return res;
    };

    option = {
        title: {
            text: '2019年研究单位排名情况',
            subtext: '排名前十的研究单位', //副标题文本
            x: 'center', //水平位置
            textStyle: {
                color: '#333333',
                fontSize: a * 0.015
            },
            top: 20,
            subtextStyle: {
                fontSize: a * 0.01,
                verticalAlign: 'middle',
                color: '#423f36',
                lineHeight: 34,
            }
        },
        //地理坐标系组件
        geo: {
            map: 'china', //地图类型：‘china’ js文件
            //roam: false, //开启鼠标缩放和平移漫游
            //文本标签样式
            label: {
                //高亮状态下的样式
                emphasis: {
                    show: false
                }
            },
            zoom: 1.25,
            //地图区域的多边形、图形样式
            itemStyle: {
                //默认样式
                normal: {
                    //图形填充色
                    areaColor: '#e0d495',
                    borderColor: '#333333',
                    opacity: 1
                },
                //高亮状态下样式
                emphasis: {
                    areaColor: '#e0d495' //'#7d7d7d'
                }
            }
        },
        series: [{
                name: '排名',
                type: 'effectScatter', //带有涟漪特效动画的散点（气泡）图
                coordinateSystem: 'geo', //该系列使用的坐标系:前面定义的geo
                data: [], //convertData(ranking), 
                //散点大小：排名越高点越大
                symbolSize: function(val) {
                    return (1 / val[2]) * 12 + 7
                },
                showEffectOn: 'render', //绘制完成后显示特效
                //绘制完成后显示特效
                rappleEffect: {
                    brushType: 'stroke', //波纹的绘制方式为stroke

                },
                hoverAnimation: true, //开启 hover 在拐点标志上的提示动画效果
                //文本样式
                label: {
                    normal: {
                        formatter: '{b}', //显示数据名
                        position: 'right',
                        show: false //不显示标签
                    },
                },
                //图形样式
                itemStyle: {
                    normal: {
                        color: '#EA5151',
                        shadowBlur: 10,
                        shadowColor: '#333',
                        opacity: 0.5,
                    },
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1,
                    }
                },

                zlevel: 1,
            },
            {
                name: '总分',
                type: 'scatter', //散点图
                coordinateSystem: 'geo',
                data: [], //convertData(data),
                symbolSize: 0.0000001, //点大小
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false //不显示文本标签
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#EA5151',
                        opacity: 0,
                    },
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                zlevel: 1,
            }
        ]
    }


    $.get('/static/DATA/overview_yjs.json').done(function(data) {
        if (typeof(data) == "string") {
            data = JSON.parse(data);
        }
        //alert(data.average);
        chart.setOption({
            tooltip: {
                trigger: 'item', //触发器：数据项图形触发
                //字符串模板（使用回调函数显示研究所名称，排名和总分信息）
                formatter: function(params) {
                    var res = params.name + '<br/>';
                    for (var i = 0; i < data.name19.length; i++) {
                        if (data.name19[i] == params.name) {
                            res += '总分: ' + data.total19[i] + '</br>' + '排名: ' + data.rank[i] + '</br>';

                        }
                    }
                    return res;
                },
                //alwaysShowContent:true
            },
            series: [{
                name: '排名',
                data: convertData(data.name19, data.rank),
            }, {
                name: '总分',
                data: convertData(data.name19, data.total19),
            }]
        });

    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);

    //设置线条样式       
    var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 0.5
        }
    };

    //清除所有点击事件    
    chart.off('click');

    //添加点击事件
    chart.on('click', function(params) { //点击事件
        //如果点击对象为散点
        if (params.componentType === 'series') {
            var provinceName = params.name;
            $.get('/static/DATA/overview_yjs.json').done(function(data) {
                //alert(data);
                if (typeof(data) == "string") {
                    data = JSON.parse(data);
                }

                for (var i = 0; i < data.name19.length; i++) {
                    if (data.name19[i] == provinceName) {
                        optionR = {
                            title: {
                                text: '2019年' + provinceName + '9项指标平均成绩',
                                x: 'center', //水平位置：居中
                                y: 'bottom', //垂直位置：底部
                                textStyle: {
                                    color: '#333333',
                                    fontSize: a * 0.013,
                                }
                            },

                            center: ['50%', '50%'],
                            //雷达图坐标系组件
                            radar: {
                                //雷达图的指示器，用来指定雷达图中的多个变量（维度）
                                indicator: [
                                    { name: '信息化管理与运行', max: 10 },
                                    { name: '信息化基础设施', max: 10 },
                                    { name: '信息化资源', max: 10 },
                                    { name: '科研信息化应用', max: 10 },
                                    { name: '管理信息化应用', max: 10 },
                                    { name: '教育信息化应用', max: 10 },
                                    { name: '科学传播应用', max: 10 },
                                    { name: '网络安全管理', max: 10 },
                                    { name: '网络安全技术保障', max: 10 }

                                ],

                                shape: 'circle', //雷达图绘制类型
                                radius:'65%',

                                splitNumber: 5, //指示器轴的分割段数
                                name: {
                                    textStyle: {
                                        color: '#333333',
                                        fontSize: a * 0.009,
                                    },
                                    lineHeight: 15,
                                },


                                //坐标轴在 grid 区域中的分隔区域
                                splitArea: {
                                    areaStyle: {
                                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                                        shadowBlur: 10
                                    }
                                },

                                //坐标轴轴线相关设置
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(238, 197, 102, 0.5)',

                                    }
                                }
                            },
                            series: [{
                                name: params.name,
                                type: 'radar', //图表类型：雷达图
                                lineStyle: lineStyle, //套用线条样式
                                data: [{
                                        value: data.data19[i],

                                    },

                                ],
                                //折线拐点标志的样式
                                itemStyle: {
                                    normal: {
                                        color: '#F9713C',
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle: {
                                                color: '#333333',
                                                fontSize: a * 0.009,
                                            }
                                        }

                                    }
                                },
                                //区域填充样式
                                areaStyle: {
                                    normal: {
                                        opacity: 0.1
                                    }
                                }
                            }]
                        };

                        //加载雷达图并显示悬浮框
                        //$('#box').css('display','block');
                        //$('#box-title').html('provinceName');
                        rad.clear();
                        rad.setOption(optionR);

                    }
                }

            });


        }

        //若点击对象不是散点，悬浮框不显示
        else {
            //$('#box').css('display','none');
            rad.clear();
            rad.setOption({
                title: {
                    text: '2019年研究单位9项指标平均成绩',
                    x: 'center', //水平位置：居中
                    y: 'bottom', //垂直位置：底部
                    textStyle: {
                        color: '#333333',
                        fontSize: a * 0.013,
                    }
                },
                center: ['50%', '50%'],

                radar: {
                    indicator: [
                        { name: '信息化管理与运行', max: 10 },
                        { name: '信息化基础设施', max: 10 },
                        { name: '信息化资源', max: 10 },
                        { name: '科研信息化应用', max: 10 },
                        { name: '管理信息化应用', max: 10 },
                        { name: '教育信息化应用', max: 10 },
                        { name: '科学传播应用', max: 10 },
                        { name: '网络安全管理', max: 10 },
                        { name: '网络安全技术保障', max: 10 }
                    ],
                    shape: 'circle',
                    radius:'65%',
                    splitNumber: 5,
                    name: {
                        textStyle: {
                            color: '#333333',
                            fontSize: a * 0.009,
                        },
                        lineHeight: 30,
                    },
                    splitArea: {
                        areaStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.5)',
                        }
                    }
                },
                series: [{
                    name: '研究所',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: [{
                            value: [],
                            name: '2019研究所平均分'
                    }],
                    itemStyle: {
                        show: true,
                        normal: {
                            color: '#F9713C',
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#333333',
                                    fontSize: a * 0.009,
                                }
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                }],
            })

            $.get('/static/DATA/overview_yjs.json').done(function(data) {
                if (typeof(data) == "string") {
                    data = JSON.parse(data);
                }
                rad.setOption({
                    series: [{
                        name: '研究所',
                        data: [{
                                value: data.average19,
                                name: '2019研究所平均分'
                            },

                        ],
                    }]
                });

            });


        }
    });
}