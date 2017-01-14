var sw=0;
$(".titbox").each(function(index, element) {
    settit($(this).find("h3"));
	settit($(this).find("h4"));
	settxt($(this).find("p"));
});

$(function(){
	
	showtt(".titbox:first h3",0);
	showtt(".titbox:first h4",800);
	showtt(".titbox:first p",2100);
	setTimeout(function(){
		$(".home .text").addClass("d");
	},3000);
	
	$(".banner .frame .child").mChange({
		auto  : 1,       //是否自动播放,1为自动,0为手动
		arrow : 1,       //是否反转箭头,1为点击左侧向右滚动,0则相反
		speed : 800,     //效果速度,大于0.3
		time  : 5000,    //周期时间，大于1
		nav   : ".b_nav i",    //导航Za
		nave  : "click", //导航事件
		navs  : 0,  //导航滚动
		prev  : null,    //上一个
		next  : null,    //下一个
		cycle : 1,       //是否循环
		mousestop : 0,   //是否鼠标划入停止
		mousewheel : 0,  //是否开启滚轮事件
		animates : function(idx){
			if($(".home .text").hasClass("d")){
				hidett($(".titbox"));
				
				$(".titbox").fadeOut(500,function(){
					showtt($(".titbox").eq(idx).find("h3"));
					showtt($(".titbox").eq(idx).find("h4"),500);
					showtt($(".titbox").eq(idx).find("p"),1400);
				});
				
				$(".titbox").eq(idx).stop(true,true).show(0,function(){
					settit($(this).find("h3"));
					settit($(this).find("h4"));
					settxt($(this).find("p"));
				});
				
			}			
		} //自定义函数
	});
});