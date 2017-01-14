// JavaScript Document

function htmlsize(){
	var ww;
	var maxw=640;
	var minw=320;
	if($(window).width()>maxw){ww=maxw;}
	else if($(window).width()<minw){ww=minw;}
	else{
		ww=$(window).width();
	}
	$("html").css({fontSize:(ww/maxw)*100});
}
htmlsize();
$(window).resize(htmlsize);

//全局js
$(function(){

$(".menu").click(function(event){
	$(this).toggleClass("act");
//	alert($(this).attr('class'));
	$("#header #r").toggleClass("act");
	$("#nav_main").toggleClass("show");
	$("#loaded .ico").toggleClass("hide");
	event.stopPropagation();
});
$(".nav_main").click(function(event){
	event.stopPropagation();
});

});