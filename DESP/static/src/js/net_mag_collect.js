hei = document.body.clientWidth
        var myFall = echarts.init(document.getElementById('fall'));
        fall1(myFall,hei);
        var myFall2 = echarts.init(document.getElementById('fall2'));
        fall2(myFall2,hei);
        var myFall3 = echarts.init(document.getElementById('fall3'));
        fall3(myFall3,hei);
        var myPie1 = echarts.init(document.getElementById('pie'));
        pie1(myPie1,hei);
        var myPie2 = echarts.init(document.getElementById('pie2'));
        pie2(myPie2,hei);
        var myRad1 = echarts.init(document.getElementById('rad1'));
        rad1(myRad1,hei);
        var myRad2 = echarts.init(document.getElementById('rad2'));
        rad2(myRad2,hei);
        setTimeout(function (){
            window.onresize = function () {
                myFall.resize();
                myPie1.resize();
                myRad1.resize();
                myRad2.resize();
            }
        })
        function f1(){
            myFall.clear();
            fall1(myFall,hei);
        }
        function f2(){
            myFall2.clear();
            fall2(myFall2,hei);
        }
        function f3(){
            myFall3.clear();
            fall3(myFall3,hei);
        }

        function p1(){
            myPie1.clear();
            pie1(myPie1,hei);
        }
		function p2(){
			myPie2.clear();
			pie2(myPie2,hei);
		}