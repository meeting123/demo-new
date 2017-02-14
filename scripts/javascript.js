window.onload=function(){
	var logo1=document.getElementById("logo-1");
	function onClick(){
		window.open("demo1.html");
	}
	logo1.addEventListener("click",onClick);

	function onMouse(idName1,idName2){
		var oLi1=document.getElementById(idName1);
		var oUl1=document.getElementById(idName2);
		
		function onMouseOver(){
			oUl1.style.display="block";	
		}
		function onMouseOut(){
			oUl1.style.display="none";
		}
		oLi1.addEventListener("mouseover",onMouseOver);
		oLi1.addEventListener("mouseout",onMouseOut);	
	}
	onMouse("oLi-1","ul-1");
	onMouse("oLi-2","ul-2");
	onMouse("oLi-3","ul-3");
	onMouse("oLi-4","ul-4");
	var oImg1=document.getElementById("img-1");
	var oImg2=document.getElementById("img-2");
	var oImg3=document.getElementById("img-3");
	var Iwidth=document.body.clientWidth;
	var oPoint1=document.getElementById("point-1");
	var oPoint2=document.getElementById("point-2");
	var oPoint3=document.getElementById("point-3");
	var mImg={
		startMove:function(){
			function oIm(oImg){
				if(oImg.offsetLeft==Iwidth){
					oImg.style.left=(-1)*Iwidth+"px";
				}
			}
			function oPoint0(){
				if(oImg1.offsetLeft==0){
					oPoint1.style.backgroundColor="white";
					oPoint2.style.backgroundColor="grey";
					oPoint3.style.backgroundColor="grey";
				}
				if(oImg2.offsetLeft==0){
					oPoint1.style.backgroundColor="grey";
					oPoint2.style.backgroundColor="white";
					oPoint3.style.backgroundColor="grey";
				}
				if(oImg3.offsetLeft==0){
					oPoint1.style.backgroundColor="grey";
					oPoint2.style.backgroundColor="grey";
					oPoint3.style.backgroundColor="white";
				}
			}
			function time0(){
				oImg1.style.left=oImg1.offsetLeft+Iwidth+"px";	
				oImg2.style.left=oImg2.offsetLeft+Iwidth+"px";
				oPoint0();
				oIm(oImg1);
			}
			function time1(){
				oImg2.style.left=oImg2.offsetLeft+Iwidth+"px";
				oImg3.style.left=oImg3.offsetLeft+Iwidth+"px";
				oPoint0();
				oIm(oImg2);
			}
			function time2(){
				oImg1.style.left=oImg1.offsetLeft+Iwidth+"px";
				oImg3.style.left=oImg3.offsetLeft+Iwidth+"px";
				oPoint0();
				oIm(oImg3);
			}
			function time3(){
				setTimeout(time0,3000);	
				setTimeout(time1,6000);
				setTimeout(time2,9000);	
			}
			setTimeout(time3,0);
			setInterval(time3,9000);

		}
	}
	mImg.startMove();
	var ccImg1=document.getElementById("ccImg-01");
	ccImg1.addEventListener("click",function(){
		window.open("demo00-01-01.html");
	});
	var ccImg2=document.getElementById("ccImg-02");
	ccImg2.addEventListener("click",function(){
		window.open("demo00-01-02.html");
	})
	var ccImg3=document.getElementById("ccImg-03");
	ccImg3.addEventListener("click",function(){
		window.open("demo00-01-03.html");
	})
	var ccImg4=document.getElementById("ccImg-04");
	ccImg4.addEventListener("click",function(){
		window.open("demo00-02-01.html");
	});

	
}
