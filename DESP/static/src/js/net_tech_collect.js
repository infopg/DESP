hei = document.body.clientWidth
            var myPie1 = echarts.init(document.getElementById('pie1'));
            pie1(myPie1,hei);

            var myPie2 = echarts.init(document.getElementById('pie2'));
            pie2(myPie2,hei);

            var myPie3 = echarts.init(document.getElementById('pie3'));
            pie3(myPie3,hei);

            var myPie4 = echarts.init(document.getElementById('pie4'));
            pie4(myPie4,hei);

            var myBar = echarts.init(document.getElementById('bar'));
            bar1(myBar,hei);

            var myBarh = echarts.init(document.getElementById('barh'));
            barh1(myBarh,hei);
            setTimeout(function (){
                window.onresize = function () {
                    myBarh.resize();
                    myBar.resize();
                    myPie1.resize();
                    myPie2.resize();
                    myPie3.resize();
                    myPie4.resize();
                }
            })
            function p1(){
                myPie1.clear();
                pie1(myPie1,hei);
            }
            function p2(){
                myPie2.clear();
                pie2(myPie2,hei);
            }
            function p3(){
                myPie3.clear();
                pie3(myPie3,hei);
            }
            function p4() {
                myPie3.clear();
                pie4(myPie4, hei);
            }
