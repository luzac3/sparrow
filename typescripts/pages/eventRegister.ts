import {CallStored} from '../module/callStored';
import {SearchCookie} from '../module/searchCookie';

$(document).ready(() => {
  const callStored = new CallStored();
  const searchCookie = new SearchCookie();

  const eventId = (new URL(document.location)).searchParams.get('event_id');

  $("#registerButton").on("click", () => {
    // ajaxで処理を飛ばす
    callStored.callSql(
      {
        event_name: String($("#eventName").val())
        , table_number: Number($("#tableNumber").val())
        , date: String($("#eventDate").val())
        , event_id: String($("#eventId").val())
      }
      , "regEvent"
    ).then((data: any) => {
      console.log(data);

      if (data["exit_cd"] === 0){

        winbdow.alert("登録完了");
        location.href = "/sparrow/Views/admin/admin.html";
      }
    }, () => {
      console.log("err");
    }).catch(
      err => alert(err)
    );
  });
});
