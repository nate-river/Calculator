$(function (){
	
	yi = '';
	er = '';
	yunsuanfu = '';

	
	$('.item').click(function(){
		/* 在内存中开辟一个空间
		   放当前点击的那个块里面的字
		*/
		fuhao = $(this).text();

        /* 如果点击的是数字，把数字放到显示屏上*/
		shuzihua = parseInt(fuhao);
		if( !isNaN(shuzihua) ){
			
			if (!yunsuanfu){
				yi  =  yi*10 + shuzihua;	
				$('.xianshizi').text(yi);
			}
			
			if( yunsuanfu ){
				er  = er*10 + shuzihua;
			}	
		}



		/* 如果点击的是＋号 把加号存储下来*/
		if(    (fuhao == '+')||
			   (fuhao == '-')||
			   (fuhao == 'x')||
			   (fuhao == '/')||
			   (fuhao == '%') 
								   ){
			yunsuanfu = fuhao;
		}	

		if(fuhao == '='){

			// if(yunsuanfu == '+'){
			// 	$('.xianshizi').text(yi + er);
			// }
			// if( yunsuanfu == '-'){
			// 	$('.xianshizi').text(yi - er);
			// }
			// if( yunsuanfu == 'x'){
			// 	$('.xianshizi').text(yi * er);
			// }
			// if( yunsuanfu == '/'){
			// 	$('.xianshizi').text(yi / er);
			// }
			// if( yunsuanfu == '%'){
			// 	$('.xianshizi').text(yi % er);
			// }
			var yunsuanjieguo;
			switch(yunsuanfu){
				case '+': 
					yunsuanjieguo = yi + er; 
					break;
				case '-':
					yunsuanjieguo = yi - er; 
					break;
				case '*':
					yunsuanjieguo = yi * er; 
					break;
				case '/':
					yunsuanjieguo  = yi / er; 
					break;
				case '%':
					yunsuanjieguo  = yi % er; 
					break;
			}
			$('.xianshizi').text(yunsuanjieguo);

			yi = '';
			er = '';
			yunsuanfu = '';
		}


  
		$('#yi').text(yi);
		$('#er').text(er);
		$('#yunsuanfu').text(yunsuanfu);

	})

})