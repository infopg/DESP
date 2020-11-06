// choose only 2 institutions 
$(document).ready(function() {
    $("#institution_select").select2({
        multiple: true,
        maximumSelectionLength: 2,
    });
});

// activate echarts
// 1. bar chart for total score & ranking
function activate_echarts(event) {
    //pick 2 institutions
    var t = event.currentTarget;
    var span_list = t.previousElementSibling;
    var select_ins = $(span_list).find("ul").children();
    var ins1 = $(select_ins[0]).attr('title');
    var ins2 = $(select_ins[1]).attr('title');
    if (select_ins.length == 3) {
        //pull data from json
        $.get('/static/DATA/data3.json').done(function(data) {
            if (typeof(data) == "string") {
                data = JSON.parse(data);
            }
            //institution average score
            var ins_avg = data.totalavg;
            console.log(ins_avg);
            //institution 1,2 total scores
            var ins1_scores = (data.yjstotal).filter(a => a.name == (" " + ins1 + " "));
            var ins2_scores = (data.yjstotal).filter(a => a.name == (" " + ins2 + " "));
            console.log(ins1_scores);
            //institution 1,2 rankings
            var ins1_rank = (data.yjsranking).filter(a => a.name == (" " + ins1 + " "));
            var ins2_rank = (data.yjsranking).filter(a => a.name == (" " + ins2 + " "));
            //初始化图表
            var chart_score = echarts.init(document.getElementById('score'));
            var chart_ranking = echarts.init(document.getElementById('ranking'));
            //指定图表的配置项和数据
            //总分对比图
            var option_score = {
                title: {
                    text: "总分情况"
                },
                tooltip: { trigger: 'axis' },
                legend: {
                    data: [ins1, ins2, '各单位年度总分平均分'],
                    orient: 'vertical',
                    y: "center",
                    x: "right",
                },
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '3%',
                    containLabel: true,
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                xAxis: {
                    type: 'category',
                    data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
                },
                yAxis: [{ type: "value" }],
                series: [{
                        name: ins1,
                        type: 'bar',
                        data: ins1_scores[0].data,
                        color: '#f6ba4a',
                    },
                    {
                        name: ins2,
                        type: 'bar',
                        data: ins2_scores[0].data,
                        color: '#f37021',
                    },
                    {
                        name: '各单位年度总分平均分',
                        type: 'line',
                        data: ins_avg,
                        color: '#0f4c81',
                        lineStyle: {
                            width: 3,
                        },
                    },
                ]
            };
            //排名对比图
            var option_ranking = {
                title: {
                    text: "排名情况"
                },
                tooltip: { trigger: 'axis' },
                legend: {
                    data: [(ins1 + '排名'), (ins2 + '排名')],
                    orient: 'vertical',
                    y: "center",
                    x: "right",
                },
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '3%',
                    containLabel: true,
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                xAxis: {
                    type: 'category',
                    data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
                },
                yAxis: [{ type: "value", inverse: true }],
                series: [{
                        name: ins1 + '排名',
                        type: 'line',
                        data: ins1_rank[0].data,
                        label: {
                            normal: {
                                offset: [0, -10], //左右，上下
                                show: true,
                                position: 'inside',
                                fontSize: 14,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#45518A'
                            }
                        },
                    },
                    {
                        name: ins2 + '排名',
                        type: 'line',
                        data: ins2_rank[0].data,
                        label: {
                            normal: {
                                offset: [0, -10], //左右，上下
                                show: true,
                                position: 'inside',
                                fontSize: 14,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#8296E0'
                            }
                        },
                    },
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            chart_score.setOption(option_score);
            chart_ranking.setOption(option_ranking);
            //自适应界面 TODO
            // var container = document.getElementById('main');
            // var comparison_chart = document.getElementById('main').firstElementChild.firstElementChild;
            // console.log(comparison_chart)
            // var resizecontainer = function() {
            //     container.style.width = window.innerWidth + 'px';
            //     container.style.width = window.innerHeight + 'px';
            // };
            // var resizechart = function() {
            //     comparison_chart.style.width = container.clientWidth + 'px';
            //     comparison_chart.style.width = container.clientHeight + 'px';
            // };
            window.onresize = function() {
                // resizecontainer();
                // resizechart();
                chart_score.resize();
                chart_ranking.resize();
            }
        });

        $.get('/static/DATA/data2.json').done(function(data) {
            if (typeof(data) == "string") {
                data = JSON.parse(data);
            }
            var ins1_quota = (data.yjsrad19).filter(a => a.name == ins1);
            var ins2_quota = (data.yjsrad19).filter(a => a.name == ins2);
            //institution 1,2 subject fields

            var ins1_sf = ins1_quota[0].type;
            var ins2_sf = ins2_quota[0].type;
            //本学科领域排名
            if (ins1_sf == ins2_sf) {
                $.get('/static/DATA/data3.json').done(function(data) {
                    if (typeof(data) == "string") {
                        data = JSON.parse(data);
                    }
                    //institution 1,2 subject fields ranking
                    var ins1_subrank = (data.subranking).filter(a => a.name == (" " + ins1 + " "));
                    var ins2_subrank = (data.subranking).filter(a => a.name == (" " + ins2 + " "));
                    //初始化图表
                    var chart_sf = echarts.init(document.getElementById('sf_ranking'));
                    //本学科领域内排名
                    var option_subranking = {
                        title: {
                            text: "本学科领域内排名情况"
                        },
                        tooltip: { trigger: 'axis' },
                        legend: {
                            data: [(ins1 + '排名'), (ins2 + '排名')],
                            orient: 'vertical',
                            y: "center",
                            x: "right",
                        },
                        grid: {
                            left: '3%',
                            right: '20%',
                            bottom: '3%',
                            containLabel: true,
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: {
                            type: 'category',
                            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
                        },
                        yAxis: [{ type: "value", inverse: true }],
                        series: [{
                                name: ins1 + '排名',
                                type: 'line',
                                data: ins1_subrank[0].data,
                                label: {
                                    normal: {
                                        offset: [0, -10], //左右，上下
                                        show: true,
                                        position: 'inside',
                                        fontSize: 14,
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#45518A'
                                    }
                                },
                            },
                            {
                                name: ins2 + '排名',
                                type: 'line',
                                data: ins2_subrank[0].data,
                                label: {
                                    normal: {
                                        offset: [0, -10], //左右，上下
                                        show: true,
                                        position: 'inside',
                                        fontSize: 14,
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#8296E0'
                                    }
                                },
                            },
                        ]
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    chart_sf.setOption(option_subranking);
                })
            } else {
                $('#sf_ranking').hide();
            };
            //tab切换
            var tab_quota = $(document.getElementById('quota').firstElementChild).children()
            console.log(document.getElementById('quota').firstElementChild.children)
            //初始化图表
            var x = 2020;
            var n = -1
            for (var i in data){
                x-=1;
                n+=1;
                console.log(n)
                let id = (x)+'quota_chart'
                let quota_id = (x)+'quota'
                console.log(typeof (id))
                console.log(i)

                tab_quota[n].onclick = function (e){
                    if (e.currentTarget.firstElementChild.classList.contains('show')){
                        console.log(e.currentTarget.parentElement.nextElementSibling.children[n])
                        e.currentTarget.parentElement.nextElementSibling.children[n].classList.add('show')
                        e.currentTarget.parentElement.nextElementSibling.children[n].classList.add('active')
                    }else{
                        console.log(e.currentTarget.parentElement.nextElementSibling.children[n])
                        e.currentTarget.parentElement.nextElementSibling.children[n].classList.remove('show')
                        e.currentTarget.parentElement.nextElementSibling.children[n].classList.remove('active')
                    }
                }
                new_div = document.getElementById(quota_id)
                temp = document.createElement('div')
                temp.setAttribute('id', id)
                temp.setAttribute('style', "width: 85%;height:400%;")
                temp.classList.add('nav-vertical')
                new_div.appendChild(temp)
                console.log(temp)
                var ins1_quota_chart = (data[i]).filter(a => a.name == ins1 || a.name == (" " + ins1 + " ") );
                var ins2_quota_chart = (data[i]).filter(a => a.name == ins2 || a.name == (" " + ins2 + " "));
                console.log(ins2_quota_chart)
                var chart_quota = echarts.init(document.getElementById(id))
                var option_quota = {
                title: {
                    text: '各项指标得分情况'
                },
                tooltip: {},
                legend: {
                    bottom: 5,
                    data: [ins1, ins2],
                    orient: 'vertical',
                    y: "center",
                    x: "right",
                },
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '20%',
                    containLabel: true,
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                radar: {
                    name: {
                        textStyle: {
                            color: 'black',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    shape: 'circle',
                    splitNumber: 5,
                    splitArea: {
                        areaStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
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
                    ]
                },
                series: [{
                    type: 'radar',
                    lineStyle: {
                        width: 3,
                    },
                    data: [{
                            value: ins1_quota_chart[0].data,
                            name: ins1,
                            itemStyle: {
                                normal: {
                                    color: '#0abab5'
                                }
                            }
                        },
                        {
                            value: ins2_quota_chart[0].data,
                            name: ins2,
                            lineStyle: {
                                type: 'dashed'
                            },
                            itemStyle: {
                                normal: {
                                    color: '#37A2DA'
                                }
                            }
                        }

                    ]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            chart_quota.setOption(option_quota);
            }
            // for (let i = 0; i < data.length(); i++){
            //     let id = (i+2009)+'quota_chart'
            //     // console.log(typeof(id))
            //     //institution 1,2 quota scores
            //     var ins1_quota = (data.yjsrad19).filter(a => a.name == ins1);
            //     var ins2_quota = (data.yjsrad19).filter(a => a.name == ins2);
            // }
            // var chart_quota = echarts.init(document.getElementById(id));
            //各项指标雷达对比图

        });

    } else {
        alert("请选择两家单位")
    }
}