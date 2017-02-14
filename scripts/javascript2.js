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
			var dis1=oLi1.style.display;
			oUl1.style.display="none";
		}
		oLi1.addEventListener("mouseover",onMouseOver);
		oLi1.addEventListener("mouseout",onMouseOut);	
	}
	onMouse("oLi-1","ul-1");
	onMouse("oLi-2","ul-2");
	onMouse("oLi-3","ul-3");
	onMouse("oLi-4","ul-4");
	
	

	
}
