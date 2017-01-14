if($(window).width()/$(window).height()>1920/1080){
	$(".vbg").height($(window).width()/1920*1080);
}
else{
	$(".vbg").width($(window).height()/1080*1920);
}
var sto1;
$(window).resize(function(){
	clearTimeout(sto1);
	sto1=setTimeout(function(){
		if($(window).width()/$(window).height()>1920/1080){
			$(".vbg").height($(window).width()/1920*1080);
			$(".vbg").width($(window).width());
		}
		else{
			$(".vbg").width($(window).height()/1080*1920);
			$(".vbg").height($(window).height());
		}
	},100);
});
var vd1 = document.getElementById('vbg1');
var vd2 = document.getElementById('vbg2');
function chooesvideo(){
	var d=new Date();
	if(d.getHours()>7 && d.getHours()<19 ){
		//vd2.pause();
		$("#vbg1 source").each(function(index, element) {
            //$(this).attr("src",$(this).attr("src1"));
        });;
		vd1.addEventListener("loadedmetadata",function(){
			vd1.play();
		});		
		//$("#vbg1").fadeIn(1000);
		//$("#vbg2").fadeOut(1000);
		//$(".vbgm:first").fadeIn(1000);
		//$(".vbgm:last").fadeOut(1000);
		$("#vbg1").show();
		$("#vbg2").remove();
		$(".vbgm:first").show();
		$(".vbgm:last").remove();
	}
	else{
		//vd1.pause();
		$("#vbg2 source").each(function(index, element) {
           //$(this).attr("src",$(this).attr("src1"));
        });;
		vd2.addEventListener("loadedmetadata",function(){
			vd2.play();
		});
		//$("#vbg1").fadeOut(1000);
		//$("#vbg2").fadeIn(1000);
		//$(".vbgm:first").fadeOut(1000);
		//$(".vbgm:last").fadeIn(1000);
		$("#vbg1").remove();
		$("#vbg2").show();
		$(".vbgm:first").remove();
		$(".vbgm:last").show();
	}
}
chooesvideo();
//setInterval(function(){
	//chooesvideo();
//},6000);

if($(window).width()<1000){
	$(".vbg").remove();
}
else{
	$(".vbgm").remove();
}


$(function(){
	//winload();
	
	settit(".about .content h1");
	settit(".about .content h2");
	settit(".about .content h3");
	settit(".about .content h4");
	$(".about .content .txt p").each(function(index, element) {
	   settxt($(this));
	});
	
	showtt(".about .content h1",0);
	showtt(".about .content h2",500);
	showtt(".about .content h3",1000);
	showtt(".about .content h4",1000);
	showtt(".about .content .showtxt",2500);
	
	setTimeout(function(){
		$(".about .content .btn").animate({opacity:1},500);
		//svg1 = new Vivus('svg1',{type:'async',duration:40});
	},4000);
});