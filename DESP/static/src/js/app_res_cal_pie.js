function pie1(mychart,a){
        
    option = {
        color:['#FFAE57', '#EA5151', '#893448','#f8cb7f','#FF7853' ,'#ebdba4'],
        title: {
            text: '2019年高性能计算机软件领域论文发表情况',
            subtext:'仅展示前5个机构情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            subtextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            bottom:'2.5%',
            left:'center'
        },
        grid:{
            left:0,
            top:0
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} {a}: {c} 篇 ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['南京地理与湖泊研究所', '宁波材料技术与工程研究所', '力学研究所', '长春应用化学研究所', '金属研究所','其他'],
            itemGap:5,
            type:'scroll',
            top:'10%',
            right:a*0.003,
        },
        series : [
            {
                name:'论文发表',
                type:'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                data: [
                    {value: 471, name: '南京地理与湖泊研究所'},
                    {value: 79, name: '宁波材料技术与工程研究所'},
                    {value: 61, name: '力学研究所'},
                    {value: 54, name: '长春应用化学研究所'},
                    {value: 54, name: '金属研究所'},
                    {value: 776, name: '其他'}
                ],
                emphasis: {
                    label: {
                        show: true,
                        fontSize: a*0.009,
                        fontWeight: 'bold'
                    }
                },
                label: {
                    show:false,
                    textStyle:{
                        color:'#333333'
                    },
                    position:'outside'
                },
                labelLine: {
                    show:false,
                },
               },
        ]
    };

    mychart.setOption(option);
 };



function pie2(mychart,a){
    option = {
        color:[ '#893448','#f8cb7f','#FF7853' ,'#ebdba4','#FFAE57', '#EA5151',],
        title: {
            text: '2019年高性能计算机软件领域专利申请情况',
            subtext:'仅展示前5个机构情况',
            textStyle:{
                color:'#333333',
                fontSize:a*0.013
            },
            subtextStyle:{
                color:'#333333',
                fontSize:a*0.009,
            },
            bottom:'2.5%',
            left:'center'
        },
        grid:{
            left:0,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} {a}: {c} 项({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['上海微系统与信息技术研究所', '微电子研究所', '微生物研究所', '南京地理与湖泊研究所', '成都山地灾害与环境研究所','其他'],
            itemGap:5,
            type:'scroll',
            top:'10%',
            right:a*0.003,
        },
        series : [
            {
                name:'专利申请',
                type:'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show:false,
                    textStyle:{
                        color:'#333333'
                    },
                    position:'outside'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: a*0.009,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 28, name: '上海微系统与信息技术研究所'},
                    {value: 24, name: '微电子研究所'},
                    {value: 20, name: '微生物研究所'},
                    {value: 17, name: '南京地理与湖泊研究所'},
                    {value: 5, name: '成都山地灾害与环境研究所'},
                    {value: 33, name: '其他'},
                ],
            }]
        };
    mychart.setOption(option);
 };





