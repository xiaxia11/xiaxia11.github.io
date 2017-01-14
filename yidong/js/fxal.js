var sw=0;
create();

//自适应
var svgw=$(".case .svg").height()/690*1325;
$(".case .svg").width(svgw);
$(".case .polygon .p").css({width:svgw/5,height:$(".case .svg").height()/3});
$(window).resize(function(){
	svgw=$(".case .svg").height()/690*1325;
	$(".case .svg").width(svgw);
	$(".case .polygon .p").css({width:svgw/5,height:$(".case .svg").height()/3});
});


$(function(){
	line = new Vivus('line',{type:'async',duration:150,pathTimingFunction:Vivus.EASE});
	$(".polygon .p").each(function(index, element) {
		var t=$(this);
        setTimeout(function(){
			t.transit({opacity:1},1000,function(){});
			t.find(".pic2").transit({translate:"0%,0%",scale:"1",},1000,"cubic-bezier(0,1,1,1)");
		},GetRandomNum(5,30)*100);
		t.find(".bdr").css({"animation-delay":0.1*GetRandomNum(5,70)+"s","-webkit-animation-delay":0.1*GetRandomNum(5,70)+"s"});
    });
	
	settit(".title h1");
	settit(".title p");
	showtt(".title h1");
	showtt(".title p",1000);
	setTimeout(function(){
		$(".banner .frame").transit({scale:"1.05"},1000,function(){
			sw=1;
		});		
	},3000);
	
	var x1=0;
	var stv1=setInterval(function(){
		$(".polygon .p").each(function(index, element) {
			$(this).find(".bdr").css({"animation-delay":0.1*GetRandomNum(5,70)+"s","-webkit-animation-delay":0.1*GetRandomNum(5,70)+"s"});
		});
		x1++;		
		if(x1>=30){clearInterval(stv1);}
	},8000);
});

//滚轮触发
$(".case").mousewheel(function(event,delta,deltaX,deltaY){
	if(sw==1){
		if(delta<0){
			idx=2;
			run(idx);
		}
		else{
			idx=1;
			run(idx);
		}
	}
});

$(".case").click(function(){
	if(sw==1){
		run(2);
	}
});
$('.case').bind("touchend",function(){
	if(sw==1){
		run(2);
	}
});

function run(idx){
	if(idx==1){
	}
	if(idx==2){
		if(!$(".case .list").hasClass("show")){
			sw=0;						
			$("#line").fadeOut(1000);
			var af="cubic-bezier(1,0,0.7,1)";
			$(".polygon .p").eq(0).delay(150).transit({opacity:1,translate:"-200px,-300px",rotateX:"25deg",rotateY:"-45deg",rotateZ:"-20deg"},700,af);
			$(".polygon .p").eq(1).delay(100).transit({opacity:1,translate:"-500px,-200px",rotateX:"45deg",rotateY:"-45deg",rotateZ:"-0deg"},700,af);
			$(".polygon .p").eq(2).delay(150).transit({opacity:1,translate:"-300px,300px",rotateX:"-90deg",rotateZ:"-30deg"},700,af);
			$(".polygon .p").eq(3).transit({opacity:1,scale:"1.6",translate:"-500px,0px",rotateX:"-20deg",rotateY:"-80deg",rotateZ:"-35deg"},700,af);
			$(".polygon .p").eq(4).delay(100).transit({opacity:1,scale:"1.3",translate:"0,-200px",rotateX:"-90deg"},700,af);
			$(".polygon .p").eq(5).delay(100).transit({opacity:1,scale:"1.3",translate:"0,200px",rotateX:"90deg"},700,af);
			$(".polygon .p").eq(6).transit({opacity:1,scale:"1.6",translate:"600px,200px",rotateX:"-50deg",rotateZ:"0deg",rotateY:"80deg"},700,af);
			$(".polygon .p").eq(7).delay(100).transit({opacity:1,translate:"400px,400px",rotateX:"-90deg",rotateZ:"30deg"},700,af);
			$(".polygon .p").eq(8).delay(150).transit({opacity:1,translate:"400px,-300px",rotateX:"45deg",rotateY:"45deg"},700,af);
			$(".polygon").delay(300).fadeOut(700);
			$(".title").transit({scale:"3",opacity:0},500,"cubic-bezier(1,0,1,1)",function(){
				$(this).children().removeClass("act");
			});
			$(".banner .frame").delay(600).transit({scale:"1.3"},2000,"cubic-bezier(0,1,1,1)");
			$(".caseshadow").delay(1000).fadeIn(1000);
			
			//setTimeout(function(){
				$(".case .list").fadeIn(1000,function(){
					if(!$(".case .list").hasClass("sd")){
						//if($(window).width()>1000){
							$(this).find(".inner").niceScroll({
								cursorcolor:"#ccc",
								cursorborder:"none",
								cursorwidth:"6px",
								scrollspeed:80,
								background:"#555",
								cursoropacitymin:0.2,
								cursoropacitymax:1,
								enablekeyboard:false,
								zindex:1
							});
						//}
						$(".case .list").addClass("sd");
					}					
				}).addClass("show");
				$(".case .list .inner").scrollTop(0);
				sw=1;
			//},1000);
		}
	}
}

$(".case .list .close").click(function(){
	if(sw==1){
		sw=0;
		$(".caseshadow").fadeOut(500);
		$(".case .list").fadeOut(500,function(){
			$(".banner .frame").transit({scale:"1.05",translate:"0,0"},2000,"cubic-bezier(0,1,1,1)");
			$(".case .title").css({translate:"0,0"});
		
			$("#line").show()
			line.reset().play();
			$(".polygon").show();
			$(".polygon .p").transit({translate:"0,0",rotateX:0,rotateY:0,rotateZ:0,scale:1,opacity:0},0);;
			$(".polygon .pic2").transit({translate:"15%,21%",scale:"0.7"},0);
			$(".polygon .p").each(function(index, element) {
				var t=$(this);
				setTimeout(function(){
					t.transit({opacity:1},1500);
					t.find(".pic2").transit({translate:"0%,0%",scale:"1"},1000,"cubic-bezier(0,1,1,1)");
				},GetRandomNum(10,40)*100);
				t.find(".bdr").css({"animation-delay":0.1*GetRandomNum(5,70)+"s","-webkit-animation-delay":0.1*GetRandomNum(5,70)+"s"});				
			});
			$(".title").transit({scale:"1",opacity:1},0);
			showtt(".title h1");
			showtt(".title p",1000);
			
			$(".case .list").removeClass("show");
			setTimeout(function(){
				sw=1;
				$('.case').removeClass("donw");
			},4000);
		});
	}
});


var x,y;
var h=$("body").height()/2;
var w=$("body").outerWidth()/2;
$(window).resize(function(){
	h=$("body").height()/2;
	w=$("body").outerWidth()/2;
});
$("body").mousemove(function(event){
	x=event.clientX;
	y=event.clientY;
	if(sw==1){
		$(".case .title").css({translate:Math.floor((x-w)*0.04)+","+Math.floor((y-h)*0.06)});
		$(".banner .frame").css({translate:Math.floor((x-w)*0.02)*-1+","+Math.floor((y-h)*0.05)*-1});
	}
});
if(window.DeviceMotionEvent) {
	var x1,y1;
	window.addEventListener('devicemotion', function(){
		var acceleration =event.accelerationIncludingGravity;
		x1 = acceleration.x;
		y1 = acceleration.y;
		if(sw==1){
			$(".case .title").css({translate:Math.floor(x1*1)+","+Math.floor(y1*1)});
			$(".banner .frame").css({translate:Math.floor(x1*3)+","+Math.floor(y1*3)});
		}
	}, false);
}

$(".case_detail .close").click(function(){
	$(".case_detail").fadeOut(400,function(){
		$(".case_detail").find(".content").html("");
		$(".case_detail .loading").show();
	});	
});

var cx=0;cy=0;
$(".case .list").mousemove(function(event){
	cx=event.clientX-$(this).offset().left;
	cy=event.clientY-$(this).offset().top;
});


$(".case .list .item").click(function(){
	var t=$(this).find("a");	
//	$(".case_detail").css({left:cx,top:cy,right:$(".case .list").outerWidth()-cx,bottom:$(".case .list").outerHeight()-cy}).show();	
	//if($(window).width()>1000){
		$(this).find(".pic").niceScroll({
			cursorcolor:"#bbb",
			cursorborder:"none",
			cursorwidth:"6px",
			scrollspeed:80,
			background:"#333",
			cursoropacitymin:1,
			cursoropacitymax:1,
			enablekeyboard:false,
			zindex:1
		});
	//}
	return false;
});
//生成结构
function create(){
	var inner = document.querySelector(".list .inner");
	var str = "";
	for(var i = 0; i < data.length; i++){
		str += 
			`<div class="item">
	 			<img src="${data[i].img}">
	 			<div class="mask">
	 				<span class="b"></span>
	 				<h3>
	 					<a href="javascript:;">
	 						<strong>${data[i].title}</strong>
	 						<em>${data[i].English}</em>
	 					</a>
	 				</h3>
	 			</div>
	 		</div>`;
	}
	
	inner.innerHTML = str;
	console.log(inner)
}
