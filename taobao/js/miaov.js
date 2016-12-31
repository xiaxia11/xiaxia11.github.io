function getId(name){ //获取Id
	return document.getElementById(name);  //返回文档下id的name
}
function getTag(parent,tag){  //获取标签名
	return parent.getElementsByTagName(tag);
}
function getClass(parent,name){ //获取class名
	return parent.getElementsByClassName(name);
}

//
//重新封装的获取ID class 标签名
function M(sele) {
	var first = sele.substr(0,1);
	var isArr = sele.split(' ');
	if(first === '#' && isArr.length == 1){
		return document.getElementById(sele.substr(1));
	}else{
		var arr = Array.from(document.querySelectorAll(sele));
		return arr.length == 1 ? arr[0] : arr;
	}
}
/*
		M('.box').forEach(function(item){
			arr.push([item.offsetLeft,item.offsetTop]);
		}); 
*/
//
var Tween = {
	linear: function (t, b, c, d){ //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){ //加速
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){ //先加速后减速
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){ //二次方加速
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){ //二次方减速
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){ //二次方先加速后减速
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){ //弹性在开始方向
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){ //弹性在结束方向
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){ //弹性 开始和结束方向都有
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){  //回弹  在开始方向
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){ // 回弹  在结束方向
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){ //回弹  开始和结束都有
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){  // 碰撞  在开始方向
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){ //碰撞  在结束方向
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){  //碰撞  开始和结束都有
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};
/* 当css的参数个数小于3，获取否则 设置 */
function css(el,attr,val) {
	if(arguments.length < 3) {
		var val  = 0;
		if(el.currentStyle) {
			val = el.currentStyle[attr]; //IE下
		} else {
			val = getComputedStyle(el)[attr]; //标准下
		}
		if(attr == "opacity") {
			val*=100;
		}
		return parseFloat(val);
	}
	if(attr == "opacity") {
		el.style.opacity = val/100;
		el.style.filter = "alpha(opacity = "+val+")";
	} else {
		el.style[attr] = val + "px";
	}
}
/*function mTween(el,target,time,type,callBack) {  //元素  对象（目标样式）  时间  类型  回调  （box，{left:500},300,"linear",function(){添加运动完要执行的样式}）;
			clearInterval(el.timer);
			var t = 0; //执行至第几次
			var b = {}; //初始值
			var c = {}; // 差值
			var d = time/20;  //总次数
			for(var s in target) { //遍历循环目标值
				b[s] = css(el,s);  
				c[s] = target[s] - b[s];
			}
			el.timer = setInterval(function(){
				t++;
				if(t>d) {
					clearInterval(el.timer);
					if(typeof fn == 'function'){
						setTimeout(fn, 16);
					}
					//callBack&&callBack(); //回调函数 动画执行完了以后，要执行的内容 ，类型 function 不加判断的话 有问题  执行到一半  就不执行了
					
				} else {
					for(var s in target) {
						var val = Tween[type](t,b[s],c[s],d);
						css(el,s,val);
					}
				}
			},20);
		}*/
		
		//给个范围求随机数
		function rP(arr) { 
			var max = Math.max(arr[0],arr[1]),
				min = Math.min(arr[0],arr[1]);
			return Math.round(Math.random() * (max - min)) + min;	
		}
		
		//抖动
		function shake(obj,times,dir,fn) { //元素 次数 方向  回调函数
				var arr = [];
				
				for(var i=times; i>=0; i--){
					arr.push(i,-i);
				}

				arr.push(0);

				var n = 0;

				clearInterval(obj.timer);

				obj.timer = setInterval(function() {
					obj.style.transform = 'translate'+dir+'('+arr[n]+'px)';
					n++;
					if(n == arr.length){
						clearInterval(timer);
						if(typeof fn == 'function'){
							setTimeout(fn, 16);
						}
					}
				}, 16);
			}
		
		//抖动
		function toShake(el,attr,second,callBack){
			if(el.shake){
				return;
			}
			var arr = [];
			var b = css(el,attr);
			var nub = 0;
			for(var i = second-1; i >= 0; i--){
				i%2?arr.push(i):arr.push(-i);
			}
			el.shake = setInterval(
				function(){
					if(nub >= second){
						clearInterval(el.shake);
						callBack&&callBack(); //关闭的时候   是否还需要执行下一步操作  需要的话   使用回调  不需要 直接关闭  这样调用的话 需要加个延迟定时器
					} else {
						var val = b + arr[nub];
						css(el,attr,val);	
						nub++;
					}
				},40
			);
		}
		//运动
		function mTween(obj,attrs,times,fx,fn) { //元素  样式  次数   运动形式  回调
			if(typeof times == 'undefined'){
				times = 400;
				fx = 'linear';
			}
			if(typeof times == 'string'){  // (box,{opacity:30},'linear')
				if(typeof fx == 'undefined'){
					fx = times;
					times = 400;
				}else{
					fn = fx;
					fx = times;
					times = 400;
				}
			}
			if(typeof times == 'function'){ //(box,{opacity:30},function(){})
				fn = times;
				fx = 'linear';
				times = 400;
			}
			if(typeof times == 'number'){//(box,{opacity:30},400,function(){})
				if(typeof fx == 'undefined'){ //(box,{opacity:30},400)
					fx = 'linear';
				}
				if(typeof fx == 'function'){ //(box,{opacity:30},400,fn)
					fn = fx;
					fx = 'linear';
				}
			}
			var json = {};
			for(var attr in attrs){
				if(attr == 'opacity'){
					json[attr] = getComputedStyle(obj)[attr]*100;
				}else{
					json[attr] = parseInt(getComputedStyle(obj)[attr]);
				}
			}
			var startTime = new Date().getTime();
			clearInterval(obj.timer);
			obj.timer = setInterval(function() {
				var nowTime = new Date().getTime();
				var t = Math.min(times,nowTime - startTime);
				for(var attr in attrs){
					var value = Tween[fx](t,json[attr],attrs[attr] - json[attr],times);
					if(attr == 'opacity'){
						obj.style.opacity = value/100;
					}else{
						obj.style[attr] = value + 'px';
					}
				}
				if(t == times){
					clearInterval(obj.timer);
					if(typeof fn == 'function'){
						setTimeout(function() {
							fn();
						}, 16);
					}
				}
			}, 16);
		
		}
		
		//倒计时
		function cT(t,fn) { //未来的时间  回调

			var startTime = new Date().getTime();//当前时间

			var endTime = new Date(t).getTime(); //我们设置的那个时间 未来时间
			var syTime = Math.max(0,Math.round((endTime - startTime)/1000));

			if(syTime == 0){
				alert('时间到了');
				clearInterval(timer);
				if(typeof fn == 'function'){
					fn();
				}
				return;
			}

			var days = parseInt(syTime/(24 * 60 * 60));
			var hours = parseInt((syTime - (days * 24 * 3600))/3600);
			var mins = parseInt((syTime - (days * 24 * 3600) - hours*3600)/60);
			var secs = syTime%60;

			var str = days + '天' + add0(hours) + '小时' + add0(mins) + '分钟' + add0(secs) + '秒';

			timeHtml.innerHTML = str;//timeHtml 是需要根据获取的元素名称进行改变的
		}
		
		//快速排序
		function quickSort(arr) {
			//停止条件
			if(arr.length <= 1){
				return arr;
			}
			//2
			var first = arr.shift(); //[1]
			var left = []; //[1]
			var right = []; // []

			while(arr.length){
				if(arr[0] < first){
					left.push(arr.shift())
				}else{
					right.push(arr.shift())
				}
			}
			//[1] [2] []== > [1,2] [3] ==> [1,2,3] + [4] == > [1,2,3,4];
			return quickSort(left).concat(first,quickSort(right));

		}