function searchCookie(key){
  let cookies = document.cookie; //全てのcookieを取り出して
  let cookiesArray = cookies.split(';'); // ;で分割し配列に

  let cArray;

  for(let c of cookiesArray){ //一つ一つ取り出して
      cArray = c.split('='); //さらに=で分割して配列に
      if( cArray[0].trim() == key){ // 取り出したいkeyと合致したら
          return cArray[1].trim();  // [key,value]
      }
  }

  // マッチしなかった場合
  return false;
}
