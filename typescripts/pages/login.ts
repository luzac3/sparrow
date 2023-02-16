import {CallStored} from '../module/callStored';
import {DiscardFullWidth} from '../module/discardFullWidth';
import {GetUrlParams} from '../module/getUrlParams';

$(document).ready(function(){
  const callStored = new CallStored();
  const getUrlParams = new GetUrlParams();

  const eventId = getUrlParams.getUrlParams("event_id");

  $(".joinButton").on("click",function(){
    // ajaxで処理を飛ばす
    callStored.callSql(
      {
        event_id: eventId,
        user_id: String($("#inputID").val())
      }
      ,"getUser"
    ).then((data: any) => {
      console.log(data);
      // ID誤り
      if(data == null || data == "データ取得エラー"){
        window.alert("IDが間違っています");
        return;
      }

      document.cookie = "user_num=" + data[0]["USER_NUM"];
      document.cookie = "user_id=" + data[0]["USER_ID"];

      // ユーザ名が登録されていない
      if(data[0]["USER_NAME"] == ""){
        location.href = "/sparrow/front/register.html";
      }

      // ユーザ名が登録されている
      if(data[0]["USER_NAME"] != ""){
        location.href = "/sparrow/front/home.html";
      }
    },function(){
      console.log("err");
    }).catch(
      err => alert(err)
    );
  });

  new DiscardFullWidth(document.getElementById("inputID")!);
});
