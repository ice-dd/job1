		//定时器开始
		var time;
		
		function start() {
			time = window.setInterval("mathcolor()", 1000);
			var btn = document.getElementById("start")
			btn.style.backgroundColor = "lightcoral";
			btn.style.color = "white";
			btn.setAttribute('disabled','disabled');
		}

		//获取随机div 并赋予随机颜色
		function mathcolor() {
			var div = document.getElementsByClassName("div");
			for(var j = 0; j < div.length; j++) {
				div[j].style.backgroundColor = "orange";
			}
			function a() {
				var number1 = [];
				for(var q = 0; q < 3; q++) {
					number1[q] = Math.floor(Math.random() * 9);
				}
				if(number1[0] != number1[1] && number1[0] != number1[2] && number1[1] != number1[2]) {
					for(var i = 0; i < 3; i++) {
						var color1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
						var color2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
						var color3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
						var rgb = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
						div[number1[i]].style.backgroundColor = rgb;
					}
				} else {
					a();
				}
			}
			a();
		}
		
		
		//停止;
		function stop() {
			var div = document.getElementsByClassName("div");
			for(var j = 0; j < div.length; j++) {
				div[j].style.backgroundColor = "orange";
			}
			window.clearInterval(time);
			
			
			var btn = document.getElementById("start")
			btn.style.backgroundColor = "white";
			btn.style.color = "lightcoral";
			btn.removeAttribute('disabled');
		}