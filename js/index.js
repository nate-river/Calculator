$(function (){
	var yi = '',er = '',yunsuanfu = '',xiaoshudian = '',yunsuanjieguo = 0;
	$('.item').mouseup(function(){
        if( !isNaN ( $(this).text() )
            || $(this).text() == '.'
            || $(this).text() == 'AC'
            || $(this).text() == '+-'
            || $(this).text() == '='
          ){
            var that = this;
            setTimeout(function(){
                $(that).css('boxShadow','none');
            },200)
        }
    })

	$('.item').mousedown(function(){
		fuhao = $(this).text();
		if( !isNaN( parseInt(fuhao) ) ){
            $(this).css('boxShadow','0 0 10px black inset')
			if (!yunsuanfu){
				yi  =  yi + fuhao;	
				$('.xianshizi').text(yi);
			}
			if( yunsuanfu ){
				er  = er + fuhao;
				$('.xianshizi').text(er);
			}	
		}
        if(fuhao ==  '.'){
            $(this).css('boxShadow','0 0 10px black inset')
            if(xiaoshudian == ''){
                xiaoshudian = '.';
                $('.xianshizi').text( $('.xianshizi').text()+'.' )
                if( !yunsuanfu){
                    yi  = yi + '.';
                }
                if( yunsuanfu){
                    er = er + '.';
                }
            }
        }
        if(fuhao == '+-'){
            $(this).css('boxShadow','0 0 10px black inset')
            if ( $('.xianshizi').text().charAt(0) == '-' ){
                if(!yunsuanfu){
                    yi = yi.slice(1);
                    $('.xianshizi').text(yi);
                }else{
                    er = er.slice(1);
                    $('.xianshizi').text(er);
                }
            }else{
                if(!yunsuanfu){
                    yi = '-' + yi;
                    $('.xianshizi').text(yi);
                }else{
                    er = '-' + er;
                    $('.xianshizi').text(er);
                }
            }
        }
		if(    (fuhao == '+')||
			   (fuhao == '-')||
			   (fuhao == 'x')||
			   (fuhao == '/')||
			   (fuhao == '%') 
		  ){
            if( yi == '' ){
                yi = 0;
            }
            $('.chengse').css('boxShadow','none');
            $(this).css('boxShadow','2px 2px 0px black inset,-2px -2px 0px black inset');
            xiaoshudian = '';
			yunsuanfu = fuhao;
		}	
        if(fuhao == 'AC'){
            $(this).css('boxShadow','0 0 10px black inset')
			$('.xianshizi').text(0);
            yi = er = yunsuanfu = xiaoshudian = yunsuanjieguo =  '';
        }

		if(fuhao == '='){
            $(this).css('boxShadow','0 0 10px black inset');
            $('.chengse').css('boxShadow','none');
            yi = parseFloat(yi);
            er = parseFloat(er);
			switch(yunsuanfu){
			case '+': 
				yunsuanjieguo = yi + er; 
				break;
			case '-':
				yunsuanjieguo = yi - er; 
				break;
			case 'x':
				yunsuanjieguo = yi * er; 
				break;
			case '/':
				yunsuanjieguo  = yi / er; 
				break;
			case '%':
				yunsuanjieguo  = yi % er; 
				break;
			}
			$('.xianshizi').text(yunsuanjieguo||0);
			yi = er = xiaoshudian = '';
            yi = yunsuanjieguo||0;
		}
	})
})