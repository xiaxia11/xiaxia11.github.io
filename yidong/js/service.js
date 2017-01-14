$(function(){
var idx = 0,
idx1 = 0,
idx2 = 0;
var onOff = false;
$(function(){
	$(".service .left .d:eq("+idx+")").css({rotate:0}).addClass("now");
	$(".service .right .d.d:eq("+idx+")").css({rotate:0}).addClass("now");
	$(".banner .left .d:eq("+idx1+")").css({rotate:0,backgroundImage:bg[0][0]}).addClass("now");
	$(".banner .right .d.d:eq("+idx1+")").css({rotate:0,backgroundImage:bg[0][1]}).addClass("now");

	$(".service .box1").each(function(i,e){
		settit($(this).find("h2"));
		settit($(this).find("h3"));
		settit($(this).find("h4"));
		$(this).find(".text").find("*").each(function(i,e){
			settxt($(this));
		});
		
		$(this).find(".text2").find("*").each(function(i,e){
			settxt($(this));
		});
	});
});

//初始化变量
var idx;
var idx1;
var idx2;
var sto;
var sw=0;
var bg = [];
bg[0]=["url(img/bg1.jpg)","url(img/bg1.jpg)"];
bg[1]=["url(img/bg2.jpg)","url(img/bg2.jpg)"];
bg[2]=["url(img/bg3.jpg)","url(img/bg3.jpg)"];
bg[3]=["url(img/bg4.jpg)","url(img/bg4.jpg)"];
bg[4]=["url(img/bg5.jpg)","url(img/bg5.jpg)"];
bg[5]=["url(img/bg6.jpg)","url(img/bg6.jpg)"];
bg[6]=["url(img/bg7.jpg)","url(img/bg7.jpg)"];

var img0=new Image();
img0.src="img/bg1.jpg";
img0.onload=function(){
	//第一屏初始化
	setTimeout(function(){
		animates(0);		
	},1500);
	
	//导航状态初始化
	$(".nav_service").delay(1500).fadeIn(1000,function(){
		$(".nav_service .item:first ul").slideDown(500,function(){
			$(".nav_service .line").animate({height:$(".nav_service .item:first").position().top+$(".nav_service .item:first").height()-8},500,"easeOutCubic",function(){
				$(".nav_service .line span").css({bottom:$(".nav_service .item:first").height()-10}).animate({width:45},800,"easeOutCubic");
			})
		});
		$(".nav_service .item:first").addClass("cur");
		$(".nav_sm").addClass("show");
		$(".nav_sm i:first").addClass("now");
		sw=1;
	});
	
	var img1=new Image();
	img1.src="img/bg2.jpg";
	
	var img2=new Image();
	img2.src="img//bg3.jpg";
	
	var img3=new Image();
	img3.src="img//bg4.jpg";
	
	var img4=new Image();
	img4.src="img//bg5.jpg";
	
	var img5=new Image();
	img5.src="img//bg6.jpg";
	
	var img6=new Image();
	img6.src="img/bg1.jpg";
}

//滚轮触发
$(".service").mousewheel(function(event,delta,deltaX,deltaY){
	if(sw==1){
		sw=0;
		if(delta<0){
			idx++;
			idx1++;
			idx2++;
			if(idx2==bg.length){idx2=0;}
			run(delta);
			run2(delta);
		} else {
			idx--;
			idx1--;
			idx2--;
			if(idx2<0){idx2=bg.length-1;}
			run(delta);
			run2(delta);
		}
	}
});
//导航点击
$(".nav_service .item").click(function(){
	if(sw==1){
		sw=0;
		idx=$(this).index();
		idx1=$(this).index();
		idx2++;
		if(idx2==bg.length){idx2=0;}
		run(0);
		run2(0);
	}
});

//移动端左右两边的图片转动
function run(delta){	
	onOff = false;
	clearTimeout(sto);
	if(delta<0){
		$(".service .d.now").transition({rotate:180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			hidett($(this).find(".box1"));
			$(this).removeClass("now");
		});
		
		if(idx>=$(".service .left .d").size()){
			idx=0;
			$(".service .left .d:first,.service .right .d:first").css({rotate:-180});			
		}
	} else if (delta>0){
		$(".service .d.now").transition({rotate:-180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			hidett($(this).find(".box1"));
			$(this).removeClass("now");
		});
		
		if(idx<0){
			idx=$(".service .left .d").size()-1;
			$(".service .left .d:last,.service .right .d:last").css({rotate:180});
		}
	} else {
		$(".service .d.now").transition({rotate:180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			$(this).removeClass("now");
		});
		$(".service .left .d:eq("+idx+"),.service .right .d:eq("+idx+")").css({rotate:-180});
	}
	
	
	$(".service .left .d:eq("+idx+"),.service .right .d:eq("+idx+")").transition({rotate:0},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
		$(this).addClass("now");
		$(this).prevAll().css({rotate:180});
		$(this).nextAll().css({rotate:-180});
		
		//执行动画
		animates(idx);
		setTimeout(function(){	
			onOff = true;
		},10000);
		sto=setTimeout(function(){sw=1;},1000);
	});
	changeNav($(".nav_service .item").eq(idx));
	$(".nav_sm i").removeClass("now");
	$(".nav_sm i").eq(idx).addClass("now");
	
}

//转动2
function run2(delta){	
	if(delta<0){
		$(".banner .d.now").transition({rotate:180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			$(this).removeClass("now");
		});		
		
		if(idx1>=$(".banner .left .d").size()){
			idx1=0;
			$(".banner .left .d:first,.banner .right .d:first").css({rotate:-180});
		}
		
	}
	else if(delta>0){
		$(".banner .d.now").transition({rotate:-180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			$(this).removeClass("now");
		});
		
		if(idx1<0){
			idx1=$(".banner .left .d").size()-1;
			$(".banner .left .d:last,.banner .right .d:last").css({rotate:180});
		}
		
	}
	else{
		$(".banner .d.now").transition({rotate:180},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
			$(this).removeClass("now");
		});
		$(".banner .left .d:eq("+idx1+"),.banner .right .d:eq("+idx1+")").css({rotate:-180});
	}
	
	$(".banner .left .d:eq("+idx1+")").css({backgroundImage:bg[idx2][0]});
	$(".banner .right .d:eq("+idx1+")").css({backgroundImage:bg[idx2][1]});
	
	$(".banner .left .d:eq("+idx1+"),.banner .right .d:eq("+idx1+")").transition({rotate:0},1200,'cubic-bezier(0.5,0,0.2,1)',function(){
		$(this).addClass("now");
		$(this).prevAll().css({rotate:180});
		$(this).nextAll().css({rotate:-180});
	});
}

//执行动画
function animates(idx){
	var left=$(".service .left .d:eq("+idx+")");
	var right=$(".service .right .d:eq("+idx+")");
	showtt(left.find("h2"),0);
	showtt(left.find("h3"),200);		
	showtt(left.find("h4"),600);
	showtt(left.find(".showtxt"),1000);
}

//导航变更
function changeNav(e){	
	$(".nav_service ul:visible").slideUp(500,"easeOutCubic");
	$(".nav_service .line span").animate({width:0},500,"easeOutCubic",function(){
		e.siblings().removeClass("cur");
		e.addClass("cur");
		e.find("ul").slideDown(500,function(){
			$(".nav_service .line").animate({height:e.position().top+e.height()-6},500,"easeOutCubic",function(){
				$(".nav_service .line span").css({bottom:e.height()-8}).animate({width:45},800,"easeOutCubic");
			});
			
		});
		
	});
}

var obj1=document.getElementById("service");
var start,end="";
var h=$(window).height();
obj1.addEventListener('touchstart',function(event){
	if(sw==1){
		touch = event.targetTouches[0];
		y0=touch.screenY;
		start=touch.screenY;
		//fl=f.scrollLeft();
	}
},false);
obj1.addEventListener('touchmove',function(event){
	if(sw==1){
		touch = event.targetTouches[0];
		$(".service .d.now").css({rotate:(touch.screenY-y0)*-0.1});
		end=touch.screenY;		
	}
	event.preventDefault();//阻止浏览器默认事件
},false);
obj1.addEventListener('touchend',function(event){
	if(sw==1 && end!=""){
		if(end-start<h*-0.2){
			idx++;
			idx1++;
			idx2++;
			if(idx2==bg.length){idx2=0;}
			run(-1);
			run2(-1);
		}else if(end-start>h*0.2){
			idx--;
			idx1--;
			idx2--;
			if(idx2<0){idx2=bg.length-1;}
			run(1);
			run2(1);
		}
		else{
			sw=0;
			$(".service .d.now").transition({rotate:0},500,function(){sw=1;});
		}
		end="";
	}
},false);


});
