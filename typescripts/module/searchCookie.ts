export class SearchCookie {
  cookiesArray: string[];

  constructor(){
    const cookies = document.cookie;
    this.cookiesArray = cookies.split(';');
  }

  getCookie(key: string) {
    let cArray = [];

    for (let c of this.cookiesArray){
      cArray = c.split('='); //さらに=で分割して配列に
      if ( cArray[0].trim() === key){ // 取り出したいkeyと合致したら
          return cArray[1].trim();
      }
    }

    // マッチしなかった場合
    return false;
  }
}
