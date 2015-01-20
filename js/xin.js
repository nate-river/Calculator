$(function (){
	
	yi = '';
	er = '';
	yunSuanFu = '';


	
	$('.item').click(function(){
		



		/* 在内存中开辟一个空间
		   放当前点击的那个块里面的字
		*/
		var fuhao = $(this).text();

        /* 如果点击的是数字，把数字放到显示屏上*/
		shuzihua = parseInt(fuhao);
		if( !isNaN(shuzihua) ){
			
			if (!yunSuanFu){
				yi  = yi*10 + shuzihua;	
				$('.xianshizi').text(yi);
			}

			if( yunSuanFu ){
				er  = er*10 + shuzihua;	
				$('.xianshizi').text(er);
			}
			
		}



	
		if(    (fuhao == '+')||
			   (fuhao == '-')||
			   (fuhao == 'x')||
			   (fuhao == '/')||
			   (fuhao == '%') 
								   ){
			if( yi !== '' ){
				yunSuanFu = fuhao;
			}
			
		}
			
		if( fuhao=='AC' ){
			yi = '';
			er = '';
			yunSuanFu = '';
			$(".xianshizi").text('0');
		}
		

		if(fuhao == '='){
			var jieguo;
			if(yunSuanFu == '+'){
				jieguo = yi+er;
			}
			if( yunSuanFu == '-'){
				jieguo = yi-er;
			}
			if( yunSuanFu == 'x'){
				jieguo = yi*er;
			}
			if( yunSuanFu == '/'){
				jieguo = yi/er;
			}
			if( yunSuanFu == '%'){
				jieguo = yi%er;
			}
			$('.xianshizi').text(jieguo);
			yi = '';
			er = '';
			yunSuanFu = '';
		}


  
		// $('#yi').text(yi);
		// $('#er').text(er);
		// $('#yunsuanfu').text(yunSuanFu);

		// if( $('.xianshizi').text().length >= 8 ){
		// 	$('.xianshizi').css('font-size','3em');
		// }else{
		// 	$('.xianshizi').css('font-size','4em');
		// }







	})

})