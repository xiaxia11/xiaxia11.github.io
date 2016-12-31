window.onload = function(){
var num = 0;//申明一个变量
var off = null;
var timer = null;
$('#bg')[0].style.transform = 'scale(1) rotateZ(0deg)';
var lbody = $('body').innerWidth();//851
//console.log(bodyW)
//小按钮  需要转成原生  
$('#rMoveA div')[0].style.background = '#4d94ff';
//找到属于你的 那个图片
$('.page1_img2')[0].style.transform = 'translateZ(0)';

wheel1();
myWheel(document,function(down){
	if(down && off){
		$('#rMoveA div').css('background','#c2c2d6');
		num--;
		//四个页面进行判断当前是第几个页面
		if(num%4+1 <= 0 || num%4+1 >= 4){
			num = 0;
			$('#rMoveA div')[num%4].style.background = '#4d94ff';
			return;
		}
		
		$('#rMoveA div')[num%4].style.background = '#4d94ff';
		if(num%4+1 == 1){//第一个页面到第二个页面如何交互
			off = false;
			setTimeout(function(){
				$('.page2Move').css('transition','0s');
				$('.page2Move').css('transform','translateZ(-6000px) translateX(-4000px) translateY(1000px) rotateY(-180deg) rotateX(-90deg)');
				$('.page2Move').css('opacity','0');
				$('.page2Num').css('transition','0s');
				$('.page2Num').css('transform','translateZ(-6000px)');
				$('.page2Num').css('opacity','0');
				
				off = true;
			},4000);
			
			//
			$('.page2Num').css('transform','translateZ(1000px)');
			setTimeout(function(){
				wheel1();
			},2000);
		}
		
		//第二个页面到第三个页面如何交互
		if(num%4+1 == 2){
			off = false;
			setTimeout(function(){
				off = true;
				wheel2();
			},1500);
			
			$('.page3_img').css('transition','2s');
			$('.page3_img').css('transform','translateZ(50px) translateX(1500px) rotate(45deg)');
			$('.page3B_img').css('transition','2s');
			$('.page3B_img').css('transform','translateZ(50px) translateX(-3000px) translateY(100px) rotate(-45deg)');
		}
		//第三个页面到第四个页面的交互
		if(num%4+1 == 3){
			off = false;
			wheel3();
			//$('#page3').fadeTo(1000,0);
			$('#page3_nav').fadeTo(1000,0);//透明度
			$('.page4_img1').css('transition','2s');
			$('.page4_img1').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotate(120deg) scale(0.1)');
			
			$('.page4_img2').css('transition','2s');
			$('.page4_img2').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotate(120deg) scale(0.1)');
			
			$('.page4_img3').css('transition','2s');
			$('.page4_img3').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotate(120deg) scale(0.1)');
			
			$('.page4_img4').css('transition','2s');
			$('.page4_img4').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotate(120deg) scale(0.1)');
			
			$('.page4B_img').css('transition','2s');
			$('.page4B_img').css('opacity','1');
			$('.page4B_img').css('transform','rotateY(-60deg) translateZ(800px)');
			
			$('.page4_word').css('transition','2s');
			$('.page4_word').css('opacity','0');
			
		}
	
		//第四个页面
		if(num%4+1 == 4){
			off = false;
			setTimeout(function(){
				off = true;
				wheel4();
			},2000);
		}
	}
	//按钮
	if(!down && off){
		$('#rMoveA div').css('background','#c2c2d6');
		num++;
		$('#rMoveA div')[num%4].style.background = '#4d94ff';
		
		if(num%4+1 == 1){
			wheel1();
			//clearTimeout(timer);
		}
		if(num%4+1 == 2){
			wheel2();
		}
		if(num%4+1 == 3){
			wheel3();
		}
		if(num%4+1 == 4){
			wheel4();
		}

	}

});


	//第一个大函数
	function wheel1() {
		clearTimeout(timer);
		off = false;
		$('#page3_nav').fadeTo(1000,0);//导航
		$('#donwlond').fadeTo(1000,0);//下载图片
		$('#mDown').css('opacity','1');
		$('#bg').css('opacity','1');//背景
		$('#bg').css('transform','translateX(0) scale(1) rotateZ(0)');
		
		$('.page4_img1').css('transition','2s');
		$('.page4_img1').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.page4_img2').css('transition','2s');
		$('.page4_img2').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(75deg) scale(0.1)');
		$('.page4_img3').css('transition','2s');
		$('.page4_img3').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.page4_img4').css('transition','2s');
		$('.page4_img4').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.page4B_img').css('transition','2s');
		$('.page4B_img').css('opacity','1');
		$('.page4B_img').css('transform','rotateY(-60deg) translateZ(800px)');
		$('.page4_word').css('transition','2s');
		$('.page4_word').css('opacity','0');
		
		var timer = setTimeout(function(){
			$('.page1_img2').css('opacity','1');
			$('.page1_img2').css('transform','translateZ(0)');
			
			$('.page1_img1').fadeTo(100,1);
			$('.page1_div').fadeTo(200,1);
			
			//背景的那些大圆球移动
			function fn1(){
//				$('.row1 div').each(function(i,elem){
//					$(elem).css('transition','translateX()')
//				});
				$('.row1 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row1 div').each(function(i,elem){//console.log($('body').innerWidth())
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn1();
									})
								}
						})
				})
			};fn1();
			function fn2(){
				$('.row2 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row2 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn2();
									})
								}
						})
				})
			};fn2();
			function fn3(){
				$('.row3 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row3 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn3();
									})
								}
						})
				})
			};fn3();
			function fn4(){
				$('.row4 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row4 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn4();
									})
								}
						})
				})
			};fn4();
			
		},1000);
		setTimeout(function(){
			off = true;
		},3000);
	}


	//第二个滚轮函数
	function wheel2(){
		clearTimeout(timer);
		off = false;
		$('.page1_img2').css('transition','translateZ(500px)');
		$('#donwlond').fadeTo(1000,1);
		$('.page1_div').fadeTo(1000,0);
		$('.page1_img1').fadeTo(1000,0);
		$('#mDown').css('opacity','0');
		
		$('.page1_img2').css('transition','1s');
		$('.page1_img2').css('opacity','0');
		
		$('#bg').css('transform','translateX(0) scale(2) rotateZ(-65deg)');
		
		setTimeout(function(){
			$('.page2Num').css('transition','2s');
			$('.page2Num').css('transform','translateZ(-300px)');
			$('.page2Num').css('opacity','1');
		},1600);
		
		$('.page2Move').css('transition','1s');		
		$('.page2Move').css('opacity','1');
		$('.page2Move').css('transform','translateZ(-2000px) translateX(-200px) translateY(-200px) rotateY(-70deg) rotateX(-315deg)');
		
		$('clock3').css('transition','3s');
		$('clock3').css('transform','rotateZ(360deg)');
		
		setTimeout(function(){
			$('.page2Move').css('transform','translateZ(1000px) translateX(0) translateY(200px) rotateY(0)');
		},1000);
		
		var timer = setTimeout(function (){//console.log(1)
			$('.clock3').css('transform','rotateZ(0)');
			off = true;
		},3600);
	}
	
//	//第三个滚轮
	function wheel3() {
		clearTimeout(timer);
		off = false;
		$('#mDown').css('opacity','0');
		setTimeout(function(){
			$('.page2Move').css('transition','0s');
			$('.page2Move').css('transform','translateZ(-6000px) translateX(-4000px) translateY(1000px) rotateY(-180deg) rotateX(-90deg)')
			$('.page2Move').css('opacity','0');
			$('.page2Move').css('transition','0s');
			$('.page2Num').css('transition','0s');
			$('.page2Num').css('transform','translateZ(-6000px)');
			$('.page2Num').css('opacity','0');
		},2000);
		
		$('.page2Num').css('transform','translateZ(1000px)');
		
		setTimeout(function(){
			$('#page3').css('opacity','1');
			$('.page3_img').css('transition','1s');
			$('.page3_img').css('transform','translateZ(-50px) rotateX(30deg)');
			$('.page3B_img').css('transition','1.5s');
			$('.page3B_img').css('transform','translateZ(-50px) translateX(-400px) translateY(180px)');
		},1500);
		
		setTimeout(function(){
			off = true;
		},3000);

	}


	//第四个滚轮
	function wheel4(){
		clearTimeout(timer);
		off = false;
		$('#page3_nav').fadeTo(1000,1);
		$('#mDown').css('opacity','0');
		$('.page3_img').css('transition','1.5s');
		$('.page3_img').css('transform','translateZ(50px) translateX(1500px) rotateY(45deg)');
		$('.page3B_img').css('transition','1.5s');
		$('.page3B_img').css('transform','translateZ(50px) translateX(-3000px) translateY(100px) rotateY(-45deg)');
		$('.page4_img1').css('transition','2s');
		$('.page4_img1').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.page4_img2').css('transition','2s');
		$('.page4_img2').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.page4_img3').css('transition','2s');
		$('.page4_img3').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.page4_img4').css('transition','2s');
		$('.page4_img4').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.page4B_img').css('transition','2s');
		$('.page4B_img').css('opacity','1');
		$('.page4B_img').css('transform','rotateY(0) translateZ(0)');
		$('.page4_word').css('transition','2s');
		$('.page4_word').css('opacity','1');
		var timer = setTimeout(function (){//console.log(1)
			off = true;
		},2000);
	}

}