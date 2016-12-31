window.onload = function(){
	var oUl = document.getElementsByTagName('ul');
	for(var i = 0; i < oUl.length; i++) {
		var oLi = oUl[i].getElementsByTagName('li');
		for(var j = 0; j < oLi.length; j++) {
			if(j%2 == 0) {
				oLi[j].style.background = '#e8e8e8';
			}
		}
	}
	//幻灯片播放  3d的
	var jiantou = document.querySelector('.jiantou');//上下按钮
	var btns = jiantou.getElementsByTagName('a');//上下点击按钮
	var bannerpic = document.querySelector('.bannerpic');
	var lis = bannerpic.children;//下边所有的元素节点
	var imgW = css(imgWidth,"width");
	//console.log(imgW)
	//设置图片
	bannerpic.innerHTML += bannerpic.innerHTML;
	bannerpic.style.width = lis.length + "00%";
	var navs = document.querySelectorAll('.navs span'); //下边所有的nav
	//console.log(navs.length)
	var now = 0;//记录变量
	var color = ["#81a69e","#06355f","#f1ffce","#7695b4","#84ddef","#344028","#ff5876"];
	var banner = document.getElementById("banner");
	var timer = 0;
	//鼠标移入效果
	for(var i = 0; i < navs.length; i++){
		if(navs[i].className == "active"){
			now = i;
		}
		navs[i].index = i;
		navs[i].onmouseover = function(){
			clearInterval(timer);
			now = this.index;
			banner.style.background = color[this.index];
			for(var i = 0; i < navs.length; i++){
				navs[i].className = "";
			}
			navs[now].className = "active";
			mTween(bannerpic,{left:-now*imgW},200,"easeOut");
		}
		
	}
	
	//上一张
	btns[0].onclick = function(){
		if(now <= 0){
			now = navs.length;
			css(bannerpic,"left",-now*imgW);
			
		}
		now--;
		banner.style.background = color[now%navs.length];
		for(var i = 0; i < navs.length; i++){
			navs[i].className = "";
		}
		navs[now%navs.length].className = "active";
		mTween(bannerpic,{left:-now*imgW},200,"easeOut");
	};
	//下一张
	btns[1].onclick = function(){
		if(now >= navs.length){
			now = 0;
			css(bannerpic,"left",0);
			
		}
		now++;
		banner.style.background = color[now%navs.length];
		for(var i = 0; i < navs.length; i++){
			navs[i].className = "";
		}
		navs[now%navs.length].className = "active";
		mTween(bannerpic,{left:-now*imgW},200,"easeOut");
	};
	btns[0].onmouseover = function(){
		clearInterval(timer);
	};
	btns[0].onmouseout = function(){
		timer = setInterval(playAuto,2000);
	};
	btns[1].onmouseover = function(){
		clearInterval(timer);
	};
	btns[1].onmouseout = function(){
		timer = setInterval(playAuto,2000);
	};
	//自动播放
	timer = setInterval(playAuto,2000);
	function playAuto(){
		if(now >= navs.length){
			now = 0;
			css(bannerpic,"left",0);
			
		}
		now++;
		banner.style.background = color[now%navs.length];
		for(var i = 0; i < navs.length; i++){
			navs[i].className = "";
		}
		navs[now%navs.length].className = "active";
		mTween(bannerpic,{left:-now*imgW,opacity:100},200,"linear");
	};
	
	//鼠标移入的时候幻灯片停止  离开的时候播放
	bannerpic.onmouseover = function(){
		clearInterval(timer);
	};
	bannerpic.onmouseout = function(){
		timer = setInterval(playAuto,2000);
	};
	
	
	//下边的鼠标移入
	var newpic = document.querySelectorAll(".newpic a img");
	var newpicSpan = document.querySelectorAll(".newpic .put");
	//console.log(newpicSpan)
	for(var i = 0; i < newpicSpan.length; i++){
		newpic[i].index = i;
		newpic[i].onmouseover = function(){
			newpicSpan[this.index].style.display = "block";
		};
		newpic[i].onmouseout = function(){
			newpicSpan[this.index].style.display = "none";
		};
		
		newpicSpan[i].onmouseover = function(){
			this.style.display = "block";
		};
		newpicSpan[i].onmouseout = function(){
			this.style.display = "none";
		};
	}
	
	//飙升音乐榜的鼠标移入
	var new_music = document.querySelectorAll(".new_music");
	var new_musicLis = document.querySelectorAll(".new_music li") ;
	var Ico = document.querySelectorAll(".Ico");
	var a = document.querySelectorAll(".new_music li a");
	//console.log(a)
	//console.log(new_music,new_musicLis)
	for( var i = 0; i < new_musicLis.length; i++){
		new_musicLis[i].index = i;
		new_musicLis[i].onmouseover = function(){
			Ico[this.index].style.display = "block";
			a[this.index].className = "active";
		};
		
		new_musicLis[i].onmouseout = function(){
			Ico[this.index].style.display = "none";
			a[this.index].className = "";
		};
	}
};
