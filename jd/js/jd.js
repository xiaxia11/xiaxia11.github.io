(function(){
	var a = document.querySelectorAll("#ad a");
	var lis = document.querySelectorAll("#ad .list li");
	var ad = document.querySelector("#ad");
	//console.log(a,lis)
	var now = 0;
	var timer = 0;
	play();
	timer = setInterval(play,2000);
	function play(){
		for( var i = 0; i < a.length; i++){
		
			if(now > a.length -1){
				now = 0;
			}
			
			for(var i = 0; i < a.length; i++){
				a[i].style.opacity = 0;
				lis[i].className = "";
			}
			a[now].style.opacity = 1;
			lis[now].className = "active";
			now++;
		}	
	}
	ad.onmouseover = function(){
		clearInterval(timer);
	};
	ad.onmouseout = function(){
		timer = setInterval(play,2000);
	};
})();
