(function(){
	var navs = document.querySelectorAll(".questionL .Sort a");//导航
	var uls = document.querySelectorAll(".questionL ul"); //下边的内容
	var lis = document.querySelectorAll(".questionL ul li");
	var now = 0;
	for(var i =0; i < navs.length; i++){
		navs[i].index = i;
		navs[i].onmouseover = function(){
			for(var i =0; i < navs.length; i++){
				navs[now].className = "";
				uls[now].className = "";
			}
				now = this.index;
			navs[this.index].className = "active";
			uls[this.index].className = "show";
		
		};
	}
	
//	for( var i = 0; i < lis.length; i++){
//		lis[i].onmouseover = function(){
//			this.style.color = "#0687cb";
//		}
//	}
})();
