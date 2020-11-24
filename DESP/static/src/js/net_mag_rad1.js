var lineStyle = {
 normal: {
     width: 1.5,
     opacity: 0.5
 }
};

function rad1(chart, a) {

 option = {
     //backgroundColor: '#333333',

      title:{
         text:'研究单位内部审批流程完成情况',

         x:'center',//水平位置：居中
          bottom:-5,//垂直位置：底部
          textStyle: {
              color: '#020202',
              fontSize: a * 0.015
          },
          lineHeight:-20,
      },

     center: ['50%', '50%'],
     radar: {
         indicator: [
             { name: '没有内部审批流程', max: 103 },
             { name: '分管领导审批', max: 103 },
             { name: '管理部门审核', max: 103 },
             { name: '签订开放审批表', max: 103 },
             { name: '上线前安全检测', max: 103 },
             { name: '确定网站或\n系统安全联系人', max: 103 }

         ],
         shape: 'circle',
         splitNumber: 5,
         name: {
             textStyle: {
                 color: 'rgb(238, 197, 102)',
                 fontSize: a * 0.009,
             },
             lineHeight: a * 0.01,
         },
         splitLine: {
             lineStyle: {
                 color: [
                     'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                     'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                     'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                 ].reverse(),
             },

         },
         splitArea: {
             show: false
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
                         color: 'rgb(238, 197, 102)',
                         fontSize: a * 0.008,
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
 };



 $.get('/static/DATA/net-manage.json').done(function(data) {
     //alert(data);
     if (typeof(data) == "string") {
         //alert('2'+data.std)
         data = JSON.parse(data);
         //alert('1'+data.year)
     }
     //alert(data.average);
     chart.setOption({
         series: [{
             name: '研究所',
             data: [{
                     value: data.rad1,
                 },

             ],
         }]
     });

 });
 //使用制定的配置项和数据显示图表
 chart.setOption(option);
 }