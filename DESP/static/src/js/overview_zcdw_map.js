function map(chart, rad, a) {
    //坐标数据
    var geoCoordMap = {
        "文献情报中心": [116.413384,39.910925],
        "中国科学院大学":[116.331837,39.986062],
        "中国科学技术大学":[116.413384,39.910925],
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
        console.log(res);
        return res;
    };

    option = {
        title: {
            text: '2019年支撑单位排名分布情况',
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
            roam: true, //开启鼠标缩放和平移漫游
            //文本标签样式
            label: {
                //高亮状态下的样式
                emphasis: {
                    show: true
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
                // symbolSize: function(val) {
                //     return (1 / val[2]) * 15 + 5
                // },
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


    $.get('/static/DATA/overview_zcdw.json').done(function(data) {
        //alert(data);
        if (typeof(data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
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
            $.get('/static/DATA/overview_zcdw.json').done(function(data) {
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
                                },
                                bottom: 0,
                                lineHeight: 70
                            },

                            center: ['50%', '50%'],
                            //雷达图坐标系组件
                            radar: {
                                //雷达图的指示器，用来指定雷达图中的多个变量（维度）
                                indicator: [
                                    { name: '信息化管理与运行', max: 10 },
                                    { name: '信息化基础设施', max: 10 },
                                    { name: '信息化资源', max: 10 },
                                    { name: '管理信息化应用', max: 10 },
                                    { name: '教育信息化应用', max: 10 },
                                    { name: '科学传播应用', max: 10 },
                                    { name: '网络安全管理', max: 10 },
                                    { name: '网络安全技术保障', max: 10 }

                                ],

                                shape: 'circle', //雷达图绘制类型
                                radius: '65%',
                                splitNumber: 5, //指示器轴的分割段数
                                name: {
                                    textStyle: {
                                        color: '#333333',
                                        fontSize: a * 0.009,
                                    },
                                    lineHeight: 10,
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
                        rad.clear();
                        rad.setOption(optionR);
                    }
                }

            });
        }

        //若点击对象不是散点，悬浮框不显示
        else {
            rad.clear();
            rad.setOption({
                title: {
                    text: '2019年支撑单位9项指标平均成绩',

                    x: 'center', //水平位置：居中
                    y: 'bottom', //垂直位置：底部
                    textStyle: {
                        color: '#333333',
                        fontSize: a * 0.013,
                    },
                    bottom: 0,
                    lineHeight: 70
                },
                center: ['50%', '50%'],

                radar: {
                    indicator: [
                        { name: '信息化管理与运行', max: 10 },
                        { name: '信息化基础设施', max: 10 },
                        { name: '信息化资源', max: 10 },
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
                            fontSize: a * 0.009,
                        },
                        lineHeight: 10,
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
                    name: '支撑单位',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: [{
                            value: [],
                            name: '2019支撑单位各指标平均分'
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
                }],
            })


            $.get('/static/DATA/overview_institute.json').done(function(data) {
                if (typeof(data) == "string") {
                    data = JSON.parse(data);
                }

                rad.setOption({
                    series: [{
                        name: '支撑单位',
                        data: [{
                                value: data.average19,
                                name: '2019支撑单位平均分'
                            },

                        ],
                    }]
                });

            });


        }
    });
}