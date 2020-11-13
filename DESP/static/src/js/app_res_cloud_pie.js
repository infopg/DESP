function pie1(mychart,a){

    option = {
        color:['#FFAE57', '#EA5151', '#893448','#f8cb7f','#FF7853' ,'#ebdba4'],
        title: {
            text: '云计算机软件领域论文发表情况',
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
            left:0
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} {a} : {c}篇 ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['心理研究所', '南京地理与湖泊研究所', '生态环境研究中心', '海洋研究所', '信息工程研究所','其他'],
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
                    {value: 220, name: '心理研究所'},
                    {value: 133, name: '南京地理与湖泊研究所'},
                    {value: 50, name: '生态环境研究中心'},
                    {value: 25, name: '海洋研究所'},
                    {value: 18, name: '信息工程研究所'},
                    {value: 287, name: '其他'},
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
            text: '云计算机软件领域专利申请情况',
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
            left:0
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} {a} : {c}项 ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 0,
            data: ['南京地理与湖泊研究所', '合肥物质科学研究院', '上海微系统与信息技术研究所', '信息工程研究所', '大连化学物理研究所','其他'],
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
                data: [
                    {value: 17, name: '南京地理与湖泊研究所'},
                    {value: 12, name: '合肥物质科学研究院'},
                    {value: 9, name: '上海微系统与信息技术研究所'},
                    {value: 9, name: '信息工程研究所'},
                    {value: 7, name: '大连化学物理研究所'},
                    {value: 43, name: '其他'},
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





