function rad(chart, a) {
    option = {
        title: {
            text: '2019支撑单位9项指标得分',
            left: 'center',
            bottom: 0
        },
        tooltip: {},
        legend: {
            data: ['平均分', '文献情报中心', '中国科学院大学', '中国科学技术大学'],
            selectedMode:'single'
        },
        radar: {
            indicator: [
                {name: '信息化管理与运行', max: 10},
                {name: '信息化基础设施', max: 10},
                {name: '信息化资源', max: 10},
                {name: '科研信息化应用', max: 10},
                {name: '管理信息化应用', max: 10},
                {name: '教育信息化应用', max: 10},
                {name: '科学传播应用', max: 10},
                {name: '网络安全管理', max: 10},
                {name: '网络安全技术保障', max: 10}
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
        series: {
            name: 'values',
            type: 'radar',
            data: [
                {
                    value:[],
                    name:'平均分',
                },
                {
                    value:[],
                    name:'文献情报中心',
                },
                {
                    value:[],
                    name:'中国科学院大学'
                },
                {
                    value:[],
                    name:'中国科学技术大学'
                }
            ],
            label:{
                normal:{
                    show:true
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
    };

    $.get('/static/DATA/overview_zcdw.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: {
                name:'values',
                data:[
                    {
                        value:data.average19,
                        name:'平均分'
                    },
                    {
                        value:data.data19[0],
                        name:'文献情报中心'
                    },
                    {
                        value:data.data19[1],
                        name:'中国科学院大学'
                    },
                    {
                        value:data.data19[2],
                        name:'中国科学技术大学'
                    }
                ]
            }
        });
    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}





function rad2(chart, a) {
    option = {
        title: {
            text: '2018支撑单位9项指标得分',
            left: 'center',
            bottom: 0
        },
        tooltip: {},
        legend: {
            data: ['平均分', '文献情报中心', '中国科学院大学', '中国科学技术大学'],
            selectedMode:'single'
        },
        radar: {
            indicator: [
                {name: '信息化管理与运行', max: 10},
                {name: '信息化基础设施', max: 10},
                {name: '信息化资源', max: 10},
                {name: '科研信息化应用', max: 10},
                {name: '管理信息化应用', max: 10},
                {name: '教育信息化应用', max: 10},
                {name: '科学传播应用', max: 10},
                {name: '网络安全管理', max: 10},
                {name: '网络安全技术保障', max: 10}
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
        series: {
            name: 'values',
            type: 'radar',
            data: [
                {
                    value:[],
                    name:'平均分',
                },
                {
                    value:[],
                    name:'文献情报中心',
                },
                {
                    value:[],
                    name:'中国科学院大学'
                },
                {
                    value:[],
                    name:'中国科学技术大学'
                }
            ],
            label:{
                normal:{
                    show:true
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
    };

    $.get('/static/DATA/overview_zcdw.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: {
                name:'values',
                data:[
                    {
                        value:data.average18,
                        name:'平均分'
                    },
                    {
                        value:data.data18[0],
                        name:'文献情报中心'
                    },
                    {
                        value:data.data18[1],
                        name:'中国科学院大学'
                    },
                    {
                        value:data.data18[2],
                        name:'中国科学技术大学'
                    }
                ]
            }
        });
    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}





function rad3(chart, a) {
    option = {
        title: {
            text: '2017支撑单位9项指标得分',
            left: 'center',
            bottom: 0
        },
        tooltip: {},
        legend: {
            data: ['平均分', '文献情报中心', '中国科学院大学', '中国科学技术大学'],
            selectedMode:'single'
        },
        radar: {
            indicator: [
                {name: '信息化管理与运行', max: 10},
                {name: '信息化基础设施', max: 10},
                {name: '信息化资源', max: 10},
                {name: '科研信息化应用', max: 10},
                {name: '管理信息化应用', max: 10},
                {name: '教育信息化应用', max: 10},
                {name: '科学传播应用', max: 10},
                {name: '网络安全管理', max: 10},
                {name: '网络安全技术保障', max: 10}
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
        series: {
            name: 'values',
            type: 'radar',
            data: [
                {
                    value:[],
                    name:'平均分',
                },
                {
                    value:[],
                    name:'文献情报中心',
                },
                {
                    value:[],
                    name:'中国科学院大学'
                },
                {
                    value:[],
                    name:'中国科学技术大学'
                }
            ],
            label:{
                normal:{
                    show:true
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
    };

    $.get('/static/DATA/overview_zcdw.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: {
                name:'values',
                data:[
                    {
                        value:data.average17,
                        name:'平均分'
                    },
                    {
                        value:data.data17[0],
                        name:'文献情报中心'
                    },
                    {
                        value:data.data17[1],
                        name:'中国科学院大学'
                    },
                    {
                        value:data.data17[2],
                        name:'中国科学技术大学'
                    }
                ]
            }
        });
    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}




function rad4(chart, a) {
    option = {
        title: {
            text: '2016支撑单位9项指标得分',
            left: 'center',
            bottom: 0
        },
        tooltip: {},
        legend: {
            data: ['平均分',  '中国科学院大学','文献情报中心', '中国科学技术大学'],
            selectedMode:'single'
        },
        radar: {
            indicator: [
                {name: '信息化管理与运行', max: 10},
                {name: '信息化基础设施', max: 10},
                {name: '信息化资源', max: 10},
                {name: '科研信息化应用', max: 10},
                {name: '管理信息化应用', max: 10},
                {name: '教育信息化应用', max: 10},
                {name: '科学传播应用', max: 10},
                {name: '网络安全管理', max: 10},
                {name: '网络安全技术保障', max: 10}
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
        series: {
            name: 'values',
            type: 'radar',
            data: [
                {
                    value:[],
                    name:'平均分',
                },
                {
                    value:[],
                    name:'文献情报中心',
                },
                {
                    value:[],
                    name:'中国科学院大学'
                },
                {
                    value:[],
                    name:'中国科学技术大学'
                }
            ],
            label:{
                normal:{
                    show:true
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
    };

    $.get('/static/DATA/overview_zcdw.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: {
                name:'values',
                data:[
                    {
                        value:data.average16,
                        name:'平均分'
                    },
                    {
                        value:data.data16[1],
                        name:'文献情报中心'
                    },
                    {
                        value:data.data16[0],
                        name:'中国科学院大学'
                    },
                    {
                        value:data.data16[2],
                        name:'中国科学技术大学'
                    }
                ]
            }
        });
    });

    //使用制定的配置项和数据显示图表
    chart.setOption(option);
}