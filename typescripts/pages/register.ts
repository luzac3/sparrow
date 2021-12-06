import {CallStored} from '../module/callStored';
import {SearchCookie} from '../module/searchCookie';

$(document).ready(() => {
  const callStored = new CallStored();
  const searchCookie = new SearchCookie();
  const userNum = searchCookie.getCookie('user_num');

  if(!userNum){
    alert("ユーザー番号がありません");
    return;
  }

  $(".yes").on("click", () => {
    // ajaxで処理を飛ばす
    callStored.callSql(
      {
        user_num: userNum
        ,user_name: String($("#inputName").val())
      }
      ,"registerUserName"
    ).then((data: any) => {
      console.log(data);

      if(data["exit_cd"] == 0){

        location.href = "/sparrow/front/home.html";
      }
    }, () => {
      console.log("err");
    }).catch(
      err => alert(err)
    );
  });

  $(".no").on("click", () => {
    location.reload();
  });
});
