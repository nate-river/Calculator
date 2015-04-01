windown.onload= function(){
	var yi = '',er='',yunSuanFu='';

    var $els = document.getElementsByClassName('.item');
    var $xianshizi = document.getElementsByClassName('.xianshizi')[0];
    for ( var i = 0;  i < $els.length;  i++){
        $els[i].onclick = function(){
		    /* 在内存中开辟一个空间
		       放当前点击的那个块里面的字
		    */
		    var fuhao = this.textContent.trim();
            /* 如果点击的是数字，把数字放到显示屏上*/
		    shuzihua = parseInt(fuhao);
		    if( !isNaN(shuzihua) ){
			    if (!yunSuanFu){
				    yi  = yi*10 + shuzihua;	
				    $xianshizi.textContent = yi;
			    }

			    if( yunSuanFu ){
				    er  = er*10 + shuzihua;	
				    $xianshizi.textContent = er;
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
				$xianshizi.textContent = '0';
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
				$xianshizi.textContent = jieguo;
			    yi = er =  yunSuanFu = '';
		    }
        }
    }
}
