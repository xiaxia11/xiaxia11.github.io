window.onload = function(){
	//导航
	var con1 = document.querySelector("#header .con1");
	var headerO = document.querySelector("#header .headerO");
	//console.log(con1,headerO)
	var span = con1.getElementsByTagName("span")[0];
	var parent = document.querySelectorAll(".parent");
	var doc = document.querySelector(".parent .doc");//文档中心
	var docChild = document.querySelector(".parent .docChild");//文档中心
	
	con1.onmouseover = function(){
		for(var i = 0; i < 2; i++){
			doc.style.background = "";
			mTween(docChild,{height:0},100,"linear");
		}
		this.style.background = "#2b2d34";
		//headerO.style.height = "277px";
		mTween(headerO,{height:277},500,"linear");
		span.style.transform = "rotateY(180deg)";
	};
	con1.onmouseout = function(){
		mTween(headerO,{height:0},200,"linear",function(){
			con1.style.background = "";
		});
	};
	headerO.onmouseover = function(){
		con1.style.background = "#2b2d34";
		mTween(headerO,{height:277},500,"linear");
	};
	headerO.onmouseout = function(){
		mTween(headerO,{height:0},300,"linear",function(){
			con1.style.background = "";
		});
		
	};
	//文档中心
	doc.onmouseover = function(){
		for(var i = 0; i < 2; i++){
			con1.style.background = "";
			mTween(headerO,{height:0},10,"linear");
		}
		this.style.background = "#2b2d34";
		mTween(docChild,{height:140},100,"linear");
	};
	doc.onmouseout = function(){
		this.style.background = "";
		mTween(docChild,{height:0},100,"linear");
	};
	docChild.onmouseover = function(){
		doc.style.background = "#2b2d34";
		mTween(docChild,{height:140},100,"linear");
	};
	docChild.onmouseout = function(){
		mTween(docChild,{height:0},100,"linear",function(){
			doc.style.background = "";
		});
	};
	//所有的父级
	for( var i = 0; i < parent.length; i++){
		parent[i].onmouseover = function(){
			for(var i = 0; i < parent.length; i++){
				parent[i].style.background = "";
			}
			this.style.background = "#2b2d34";
		};
		parent[i].onmouseout = function(){
			this.style.background = "";
		};
	}
	
	//播放幻灯片
	var bannerbg = document.querySelector(".bannerbg");//a标签的父级
	var lis = bannerbg.children;
	var navs = document.querySelectorAll(".navs span");
	//console.log(lis.length)
	var wrap = document.querySelector("#banner .wrap");
	
	var now = 0;
	var imgW = css(imgWidth,"width");//注意这获取的宽度   是每张图片的宽度
	//console.log(imgW)
	bannerbg.innerHTML += bannerbg.innerHTML;
	bannerbg.style.width =lis.length + "00%";
	var timer = 0;
	for( var i = 0; i < navs.length; i++){
		if(navs[i].className == "active"){
			now = i;
		}
		navs[i].index = i;
		navs[i].onmouseover = function(){
			now = this.index;
			for( var i = 0; i < navs.length; i++){
				navs[i].className = "";
			}
			navs[now].className = "active";
			mTween(bannerbg,{left:-now*imgW},500,"easeOut");
		};
	}
	timer = setInterval(playAuto,2000);
	wrap.onmouseover = function(){
		clearInterval(timer);
	};
	wrap.onmouseout = function(){
		timer = setInterval(playAuto,2000);
	};
	navs.onmouseover = function(){
		clearInterval(timer);
	};
	navs.onmouseout = function(){
		timer = setInterval(playAuto,2000);
	};
	function playAuto(){
		if(now >= navs.length){
			now = 0;
			css(bannerbg,"left",0);
		}
		now++;
		for( var i = 0; i < navs.length; i++){
			navs[i].className = "";
		}
			navs[now%navs.length].className = "active";
			mTween(bannerbg,{left:-now*imgW},500,"easeOut");
	};
	//---------------------------
	//优势能力
	var isOff = true;
	var divs = document.querySelectorAll(".su div");
	//当滚动条下拉到那个页面的时候  显示动画那个效果
	window.onscroll = function(){
		show();	
	};
	function show(){
		var superiority = document.querySelector("#superiority");
		var rect = superiority.getBoundingClientRect();
		var list = document.querySelector(".list");
		var img4 = document.querySelector(".img4");
		var a = document.querySelector(".con5 a");
		var p = document.querySelector(".con5 p")
		
		if(rect.top <= window.innerHeight){
			if(isOff){
				mTween(list,{left:60,opacity:100},800,"linear");
				mTween(img4,{right:40,opacity:100},800,"linear");
				
				list1.style.opacity = 0;
				img5.style.opacity = 0;
				list1.style.left = 0;
				img5.style.right = 0;
				
				list2.style.opacity = 0;
				img6.style.opacity = 0;
				list2.style.left = 0;
				img6.style.right = 0;
				
				mTween(list1,{left:0,opacity:0},800,"linear");
				mTween(img5,{right:0,opacity:0},800,"linear");
				
				mTween(list2,{left:0,opacity:0},800,"linear");
				mTween(img6,{right:0,opacity:0},800,"linear");
				
				a1.className = "img2";
				p1.className = "";
				a2.className = "img3";
				p2.className = "";
				
					
				a.className = "img1 active2";
				p.className = "active1";
				isOff = false;
			}
			
		}
	}
	
	var con5 = document.querySelector(".con5");
	var a = document.querySelector(".con5 a");
	var con5_p = document.querySelector(".con5 p");

	var con6 = document.querySelector(".con6");
	var a1 = document.querySelector(".con6 a");
	var p1 = document.querySelector(".con6 p");
	
	var con7 = document.querySelector(".con7");
	var a2 = document.querySelector(".con7 a");
	var p2 = document.querySelector(".con7 p");
	
	var list = document.querySelector(".list");
	var img4 = document.querySelector(".img4");
	
	var list1 = document.querySelector(".list1");
	var img5 = document.querySelector(".img5");
	
	var list2 = document.querySelector(".list2");
	var img6 = document.querySelector(".img6");
		con5.onmouseover = function(){
			
			a1.className = "img2";
			p1.className = "";
			a2.className = "img3";
			p2.className = "";
			
			a.className = "img1 active2";
			con5_p.className = "active1";
			
			
			list1.style.opacity = 0;
			img5.style.opacity = 0;
			list1.style.left = 0;
			img5.style.right = 0;
			
			list2.style.opacity = 0;
			img6.style.opacity = 0;
			list2.style.left = 0;
			img6.style.right = 0;
			mTween(list1,{left:0,opacity:0},0,"linear");
			mTween(img5,{right:0,opacity:0},0,"linear");
			
			mTween(list2,{left:0,opacity:0},0,"linear");
			mTween(img6,{right:0,opacity:0},0,"linear");
			
			mTween(list,{left:60,opacity:100},800,"linear");
			mTween(img4,{right:40,opacity:100},800,"linear");
		}
		con5.onmouseout = function(){
			a.className = "img1 active2";
			con5_p.className = "active1";
			
			a2.className = "img3";
			p2.className = "";
			
			a1.className = "img2";
			p1.className = "";
			
			mTween(list1,{left:0,opacity:0},0,"linear");
			mTween(img5,{right:0,opacity:0},0,"linear");
			
			mTween(list2,{left:0,opacity:0},0,"linear");
			mTween(img6,{right:0,opacity:0},0,"linear");
		}
		con6.onmouseover = function(){
			a.className = "img1";
			con5_p.className = "";
			a2.className = "img3";
			p2.className = "";
			
			a1.className = "img2 active1";
			p1.className = "active";
			
			list.style.opacity = 0;
			img4.style.opacity = 0;
			list2.style.opacity = 0;
			img6.style.opacity = 0;
			
			list.style.left = 0;
			img4.style.right = 0;
			list2.style.left = 0;
			img6.style.right = 0;
			
			mTween(list,{left:0,opacity:0},0,"linear");
			mTween(img4,{right:0,opacity:0},0,"linear");
			
			mTween(list2,{left:0,opacity:0},0,"linear");
			mTween(img6,{right:0,opacity:0},0,"linear");
			
			mTween(list1,{left:60,opacity:100},800,"linear");
			mTween(img5,{right:40,opacity:100},800,"linear");
		}
		con6.onmouseout = function(){
			a.className = "img1";
			con5_p.className = "";
			
			a2.className = "img3";
			p2.className = "";
			 
			a1.className = "img2 active1";
			p1.className = "active";
			
			mTween(list,{left:0,opacity:0},0,"linear");
			mTween(img4,{right:0,opacity:0},0,"linear");
			
			mTween(list2,{left:0,opacity:0},0,"linear");
			mTween(img6,{right:0,opacity:0},0,"linear");
		}
		con7.onmouseover = function(){
			a.className = "img1";
			con5_p.className = "";
			a1.className = "img2";
			p1.className = "";
			
			a2.className = "img3 active1";
			p2.className = "active";
			
			list1.style.opacity = 0;
			img5.style.opacity = 0;
			list.style.opacity = 0;
			img4.style.opacity = 0;
			
			list1.style.left = 0;
			img5.style.right = 0;
			list.style.left = 0;
			img4.style.right = 0;
			
			mTween(list,{left:0,opacity:0},0,"linear");
			mTween(img4,{right:0,opacity:0},0,"linear");
			
			mTween(list1,{left:0,opacity:0},0,"linear");
			mTween(img5,{right:0,opacity:0},0,"linear");
			
			mTween(list2,{left:60,opacity:100},800,"linear");
			mTween(img6,{right:40,opacity:100},800,"linear");
		}
		
		con7.onmouseout = function(){
			a2.className = "img3 active1";
			p2.className = "active";
			
			a.className = "img1";
			con5_p.className = "";
			 
			a1.className = "img2";
			p1.className = "";
			
			mTween(list,{left:0,opacity:0},0,"linear");
			mTween(img4,{right:0,opacity:0},0,"linear");
			
			mTween(list1,{left:0,opacity:0},0,"linear");
			mTween(img5,{right:0,opacity:0},0,"linear");
		}
		
		//基础云环境
		var pictureL = document.querySelector(".pictureL");
		var picL = document.querySelector(".pictureL .picL");
		var h3 = pictureL.querySelector(".pictureL h3");
		var p = pictureL.querySelector(".pictureL p");
		pictureL.onmouseover = function(){
			picL.style.display = "block";
			h3.style.display = "none";
			p.style.display = "none";
			mTween(picL,{top: 0,height:420,opacity:100},200,"easeOut");
		};
		pictureL.onmouseout = function(){
			picL.style.height ="";
			picL.style.opacity =0;
			mTween(picL,{top: 0,height:0,opacity:0},0,"easeOut",function(){
				h3.style.display = "block";
				p.style.display = "block";
				picL.style.display = "none";
				picL.style.top = "50px";
			});
		};
		//右边的
		var pictureR = document.querySelector(".pictureR");
		var picR = document.querySelector(".pictureR .picR");
		var h3R = pictureR.querySelector(".pictureR h3");
		var strongR = pictureR.querySelector(".pictureR strong");
		var pR = pictureR.querySelector(".pictureR p");
		pictureR.onmouseover = function(){
			h3R.style.display = "none";
			pR.style.display = "none";
			strongR.style.display ="none";
			picR.style.display = "block";
			mTween(picR,{top: 0,height:420,opacity:100},200,"easeOut");
		};
		pictureR.onmouseout = function(){
			picR.style.height ="";
			picR.style.opacity =0;
			
			mTween(picR,{top:0,height:0,opacity:0},0,"easeOut",function(){
				h3R.style.display = "block";
				pR.style.display = "block";
				strongR.style.display ="block";
				picR.style.display = "none";
				picR.style.top = "50px";
			});
			
		};
};
