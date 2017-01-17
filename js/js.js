window.onload = function(){

		//显示出来的样式数据
		var arr = [
			{"webkitTransform":"matrix(1,0,0,1,0,0)", "zIndex":"99"},
			{"webkitTransform":"matrix(0.6,0,0,0.6,-240,0)","zIndex":"98"},
			{"webkitTransform":"matrix(0.4,0,0,0.4,-360,0)","zIndex":"97"},
			{"webkitTransform":"matrix(0.28,0,0,0.28,-420,0)","zIndex":"96"},
		]
		var jsontemp = {"webkitTransform":"matrix(1.1,0,0,1.1,100,0)","opacity":0}


		
		var arrImgSrc = ["img/11.png","img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png"]
		var aDiv = document.getElementsByClassName("outer");
		var aDivIn = document.getElementsByClassName("inner");
		var oNav = document.getElementsByTagName("nav")[0];
		var aInp = oNav.getElementsByClassName("navdiv")
		var onOff = 1;
		var aaa = document.getElementById("aaa");
		var n = 1000*aDiv.length;
		var aContro = document.getElementsByClassName("contro");
		var aH1 = document.getElementsByTagName("h1")
		var cur = 0;
		var b = 1;
		var logoImg = document.getElementById("logoimg")
		for(var i = 0;i<arrImgSrc.length;i++){
			downloadImg(i);
		}
		function downloadImg(num){
			var oImg = new Image();
			oImg.src = arrImgSrc[num];
			oImg.onload = function(){
				aDiv[num].getElementsByTagName("img")[0].src = arrImgSrc[num];
			}
		}
			
		var autoGo = setInterval(go,7000)
		function go(){
			toNext(1);
		}
		//切换
		function toNext(num){
			clearWord(cur);
			aContro[cur].style.display = "none";
			var i =0;
			
			while(i<num){
				cur+=1;
				cur%=aDiv.length;
				n-=1;
				i++;
			}
			aContro[cur].style.display = "block"
			word(cur);
			style(1,function(){b=1});
			
		}
		//取消默认能够选取
		document.onmousedown = function(){
			return false;
		}
		


		//点击切换与变大
		for(var i = 0;i<aDiv.length;i++){
			aDivIn[i].onOff = 0;
			aDivIn[i].index = i;
			aDivIn[i].onclick = function(){
				if(b){

					
					if(cur==this.index){
						
						if(!this.onOff){
							clearInterval(autoGo);
							toSkew();
							this.style.webkitTransform = "translateZ(400px) rotateY(0) translate(-80px,0) scale(0.85,0.85)";
							this.style.borderRightWidth = "1px";
							this.onOff = 1;
						}
						else{
							autoGo = setInterval(go,7000);
							this.style.webkitTransform = "";
							this.style.borderRightWidth = "";
							this.onOff = 0;
						}
					}
					else{
						clearInterval(autoGo);
						autoGo = setInterval(go,7000);
						b = 0;
						toSkew()
						toNext((this.index+aDiv.length-cur)%aDiv.length)
						
					}
				}
				
				
			}
		}
		//全部变小
		function toSkew(){
			for(var i=0;i<aDiv.length;i++){
				aDiv[i].getElementsByTagName("div")[0].style.webkitTransform = "";
				aDiv[i].getElementsByTagName("div")[0].style.borderRightWidth = "";
				aDiv[i].onOff = 0;
			}
		}
		style();
		
		//更新样式
		function style(b,fn){
			for(var i = 0;i<aDiv.length;i++){
				if((n+i)%aDiv.length<arr.length){
					doMove(aDiv[i],arr[(n+i)%aDiv.length],800,"backOut2",fn)
					
					aDiv[i].style.zIndex = arr[(n+i)%aDiv.length].zIndex;
				}
				else if((n+i)%aDiv.length==aDiv.length-1&&b){
					aDiv[i].style.zIndex = 100;
					var that = aDiv[i];
					doMove(aDiv[i],jsontemp,300,"linear",function(){
							that.style.display = "none";
							that.style.zIndex = "";
							that.style.opacity = "";
							that.style.webkitTransform = "scale(0.28,0.28) translate(-1500px,0px)";
							that.style.display = "";
							
						})
				}
				else{
					aDiv[i].style.webkitTransform = "scale(0.28,0.28) translate(-1500px,0px)";
					aDiv[i].style.zIndex = 1;

				}
				
			}
		}
		//标题文字转成一个个span
		//储存
		function hInnerHTML(){
			var arrHInnerHTML = [];
			for(var i=0;i<aH1.length;i++){
				arrHInnerHTML.push(aH1[i].innerHTML);
			}
		}
		//读取
		function getHInnerHTML(n){
			return arrHInnerHTML[n]
		}
		//转换
		function hToSpan(n){
			aH1[n].str = aH1[n].innerHTML;
			aH1[n].tempArr = aH1[n].innerHTML.split("");
			aH1[n].tempHTML = "";
			for(var i=0;i<aH1[n].tempArr.length;i++){
				aH1[n].tempHTML+="<span>" + aH1[n].tempArr[i] + "</span>"
			}
			return aH1[n].tempHTML;
			
		}
		for(var i=0;i<aH1.length;i++){
			aH1[i].innerHTML = hToSpan(i);
		}

		function titleDown(n){
			var aSpan = aH1[n].getElementsByTagName("span");
			var i =0;
			toDown();
			function toDown(){
				doMove(aSpan[i],{"top":0},400,"backOut");
				i++;
				if(i<aSpan.length){
					aSpan[i].timer = setTimeout(toDown,40)
				}
			}
		}
		function textUp(n){
			var i =0;
			toUp();
			function toUp(){
				var totleTime = 1700;
				var minTime = 200;
				var spacingTime = (totleTime - minTime)/(aContro[n].aH3.length-1)
				doMove(aContro[n].aH3[i],{opacity:100,top:0},1000,"easeBothStrong");
				i++;
				if(i<aContro[n].aH3.length){
					aContro[n].aH3[i].timer = setTimeout(toUp,500)
				}
			}
		}
		function pshow(n){
			doMove(aContro[n].getElementsByTagName("p")[0],{opacity:100},1500,"linear");
		}
		function circleBig(n){
			var i = 0;
			aContro[n].getElementsByTagName("a")[0].timer = setTimeout(function(){doMove(aContro[n].getElementsByTagName("a")[0],{"webkitTransform":"matrix(1,0,0,1,0,0)"},700,"backOut")},1200)
			;
		}
		word(0);
		//切换时右侧描述的效果
		function word(num){
			aContro[num].style.display = "block";
			aH1[num].style.display = "block";
			titleDown(num);
			aContro[num].aH3 = aContro[num].getElementsByTagName("h3");
			pshow(num)
			textUp(num)
			circleBig(num)
			
		}
		//切换前清除默认样式
		function clearWord(num){

			aH1[num].style.display = "none";
			// clearTimeout(aContro[num].htimer);
			var aSpan = aContro[num].getElementsByTagName("h1")[0].getElementsByTagName("span");
			for(var i = 0;i<aSpan.length;i++){
				
				clearInterval(aSpan[i].iTimer);
				clearInterval(aSpan[i].timer);
				aSpan[i].style.top = "";
			}
			
			clearTimeout(aContro[num].wordTimer);
			for(var j=0;j<aContro[num].aH3.length;j++){
				
				clearInterval(aContro[num].aH3[j].iTimer);
				clearInterval(aContro[num].aH3[j].timer);
				aContro[num].aH3[j].style.top = "";
				aContro[num].aH3[j].style.opacity = "";
			}
			clearTimeout(aContro[num].getElementsByTagName("a")[0].iTimer);
			clearTimeout(aContro[num].getElementsByTagName("p")[0].iTimer);
			clearTimeout(aContro[num].getElementsByTagName("a")[0].Timer);
			aContro[num].getElementsByTagName("a")[0].style.webkitTransform = "";
			aContro[num].getElementsByTagName("p")[0].style.opacity = "";
		}
		
		
		

		
		var toHidden0 = document.getElementsByClassName("tohidden")[0];
		var toHidden1 = document.getElementsByClassName("tohidden")[1];
		var toHidden2 = document.getElementsByClassName("tohidden")[2];
		toHidden0.index = 0;
		toHidden1.index = 1;
		toHidden2.index = 2;
		var out = document.getElementsByClassName("out")[0];
		var aPop = document.getElementsByClassName("pop");
		var oShade = document.getElementById("shade");
		var oPopbg = document.getElementsByClassName("popbg")[0];
		
		//点击拉下三个pop层
		for(var i = 0;i<aInp.length;i++){
			aInp[i].index = i;
			aPop[i].style.left = document.documentElement.clientWidth/2-330 + "px";
			aPop[i].style.top = document.documentElement.clientHeight +100+ "px";
			aInp[i].onclick = function(){
				var _this = this;
				aPop[this.index].style.left = document.documentElement.clientWidth/2-330 + "px";
				aPop[this.index].style.top = document.documentElement.clientHeight +100+ "px";
				oPopbg.style.left = document.documentElement.clientWidth/2-330 + "px";
				oPopbg.style.top = document.documentElement.clientHeight +100+ "px";
				out.style.display = "block"
				oShade.style.display = "block";
				aPop[this.index].style.visibility = "visible";
	
				setTimeout(function(){
					oShade.style.opacity = 1
					aPop[_this.index].style.top = "100px";
					aPop[_this.index].style.webkitTransform = "translateZ(480px) rotate(0deg)  scale(0.65,0.65)";
					oPopbg.style.top = "100px";
					oPopbg.style.opacity = "1";
					oPopbg.style.webkitTransform = "translateZ(480px) rotate(0deg) rotateX(0deg) rotateY(0deg) scale(0.65,0.65)";
				},30)
			}
		}
		//隐藏pop
		toHidden0.onclick =toHidden1.onclick = toHidden2.onclick =  function(){
			var _this = this;

			aPop[this.index].style.webkitTransform = "";
			aPop[this.index].style.top = document.documentElement.clientHeight +100+ "px";
			oPopbg.style.top = document.documentElement.clientHeight +100+ "px";
			oPopbg.style.opacity = "0";
			oPopbg.style.webkitTransform = "";
			oShade.style.opacity = 0;
			var timer = setTimeout(function(){
				out.style.display = "none"
				oShade.style.display = "none";

			},1000)
		}
	/*
		角度和弧度关系是：
			2π弧度=360°。从而1°≈0.0174533弧度，1弧度≈57.29578°。
			1) 角度转换为弧度公式：弧度=角度×(π÷180)
			2) 弧度转换为角度公式：角度=弧度×(180÷π)
		周长 = 2πr(r半径)

	
	*/
	// 30° 等于 0.5 弧
	// firefox 有小数精度误差、chrome没有	
	
	var x = 1;
	var y = 3;
	var r = 200;	// 半径
	
	var a , b;
	
	
	
	function getXY(num,val){

		a = Math.cos( num*Math.PI/180 ) * x * r;
		b = Math.sin( num*Math.PI/180 ) * y * r;
		c = Math.cos(Math.asin((num-10)*4/(y*r))) * x * r;
		a = 210-a;
		c = 160-c;
		return [a,b,c];
	}
	//console.log(getXY(20),getXY(30),getXY(40),getXY(50),getXY(60));
	var set = {"right":10,"bottom":10};
	var arrp = [
	{"right":getXY(50)[0],"bottom":185+10},
	{"right":getXY(50)[0],"bottom":155+10},
	{"right":getXY(35)[0],"bottom":125+10},
	{"right":getXY(30)[0],"bottom":95+10},
	{"right":getXY(20)[0],"bottom":65+10},
	{"right":getXY(10)[0],"bottom":35+10,opacity:100},
	
	];
	//不是圆弧轨迹
	//圆弧轨迹应该是sin(acos(b))
	var oPhone = document.getElementById("phone");
	var aMP= oPhone.getElementsByClassName("word");
	var aList = oPhone.getElementsByTagName("div");
	var lastLi = document.getElementById("last")
	onOff = 1;
	function goOut(){
		doMove(aList[0],arrp[5],100,"easeIn",function(){doMove(aList[0],arrp[4],100,"easeIn",function(){doMove(aList[0],arrp[0],300,"backOut")})})
	
		doMove(aList[1],arrp[5],100,"easeIn",function(){doMove(aList[1],arrp[4],100,"easeIn",function(){doMove(aList[1],arrp[2],300,"backOut")})})

		doMove(aList[2],arrp[5],100,"easeIn",function(){doMove(aList[2],arrp[4],100,"easeIn",function(){doMove(aList[2],arrp[4],300,"backOut")})})
	
	}
	for(var i = 0;i<aMP.length;i++){
		aList[i].onmouseover = function(){
			if(onOff==2){
				var _this = this;
				doMove(_this.getElementsByTagName("p")[0],{"opacity":100,"top":30},300,"bounceOut",function(){_this.getElementsByTagName("p")[0].iTimer=null})
			}
			
		}
		aList[i].onmouseleave = function(){
			var _this = this;
			setTimeout(function(){
				if(onOff==2&&!_this.getElementsByTagName("p")[0].iTimer){
					
					doMove(_this.getElementsByTagName("p")[0],{"opacity":0,"top":50},300,"linear",function(){_this.getElementsByTagName("p")[0].style.opacity = "";_this.getElementsByTagName("p")[0].style.top = "";})
				}
			},500)
		}
	}
	function goIn(){
		for(var i = 0;i<aMP.length;i++){
			aMP[i].style.opacity = "";
			aMP[i].style.left = "";
			aMP[i].style.top = "";
		}
		doMove(aList[0],set,500,"easeOut",function(){aList[0].style.opacity = 0});
		//doMove(aList[1],set,500,"easeOut",function(){aList[1].style.opacity = 0});
		doMove(aList[1],set,500,"easeOut",function(){aList[1].style.opacity = 0});
		//doMove(aList[3],set,500,"easeOut",function(){aList[3].style.opacity = 0});
		doMove(aList[2],set,500,"easeOut",function(){aList[2].style.opacity = 0});
		//doMove(aList[5],set,500,"easeOut",function(){aList[5].style.opacity = 0});
	}
	var lastStartDeg = 180;
	lastLi.onclick = function(){
		lastStartDeg += 180;
		if(onOff==1){
			onOff = 3;
			goOut();
			this.style.webkitTransform = "rotate("+lastStartDeg+"deg)";
			var timer = setTimeout(function(){
				onOff = 2;
			},1000)
		}
		else if(onOff==2){
			onOff = 3
			goIn();
			this.style.webkitTransform = "rotate("+lastStartDeg+"deg)";
			var timer = setTimeout(function(){
				onOff = 1;
			},1000)
		}
	}
		

}