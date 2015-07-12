window.onload = function(){
  function $c(cname){
    return d.getElementsByClassName(cname);
  }
  function $i(id){
    return d.getElementById(id);
  }
  var d = document, numbers = $c('shuzi'),
      symbols = $c('fuhao'), denghao = $i('denghao'),
      zhengfu = $i('zhengfu'), screen = $i('pingmu'),
      ac = $i('ac'), fn=sn=smb='',result;
  for ( var i = 0;  i < numbers.length;  i++){
    numbers[i].onclick = function(){
      if(result){
        fn = sn = smb = result = '';
      }
      if(!smb){
        if( fn.indexOf('.') !== -1 && this.textContent == '.') return;
        fn = fn + this.textContent;
        fn = (fn.indexOf('.')==0)?'0'+fn:fn;
        displayNumber(fn);
      } else{
        if( sn.indexOf('.') !== -1 && this.textContent == '.') return;
        sn = sn + this.textContent;
        sn = (sn.indexOf('.')==0)?'0'+sn:sn;
        displayNumber(sn);
      }
    };
  }
  for ( var i = 0;  i < symbols.length;  i++){
    symbols[i].onclick = function(){
      if(result){
        fn = result,sn = '',result = '';
      }
      if(fn){
        smb = this.textContent;
      }else{
        fn = '0';
        smb = this.textContent;
      }
    };
  }
  denghao.onclick = function(){
    if( !(fn && sn && smb) ){
      if(!fn){
        displayNumber(0);
      }else{
        displayNumber(fn);
      }
      return;
    }
    fn = parseFloat(fn);
    sn = parseFloat(sn);
    if(smb == '+') result = fn + sn;
    else if(smb == '-') result = fn - sn;
    else if(smb == 'x') result = fn * sn;
    else if(smb == '/') result = fn / sn;
    else if(smb == '%') result = fn % sn;
    else return;
    displayNumber(result);
  };
  ac.onclick = function(){
    sn = fn = result = smb = '';
    displayNumber(0);
  };
  zhengfu.onclick = function(){
    if(result) return;
    if(!smb){
      if(fn.indexOf('-') == -1) fn = '-' + fn;
      else fn = fn.slice(1);
      displayNumber(fn);
    }else{
      if(sn.indexOf('-') == -1) sn = '-' + sn;
      else sn = sn.slice(1);
      displayNumber(sn);
    }
  };
  function displayNumber(n){
    n  = String(n);
    if( n.length > 15  ){
      n = parseFloat(n).toPrecision(11);
      screen.style.fontSize = '2em';
    }else if( n.length > 8){
      screen.style.fontSize = '2em';
    }else{
      screen.style.fontSize = '4em';
    }
    screen.textContent = n;
  }
};
