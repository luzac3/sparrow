$(document).ready(function(){
  $(".joinButton").on("click",function(){
    // ajaxで処理を飛ばす
    callStored(
      {
        id:$("#inputID").val()
      }
      ,"getUserScore"
    ).then(function(data){
      console.log(data);
      // ID誤り
      if(data == null){
        window.alert("IDが間違っています");
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

  $("#inputID").on("keyup",function(){
    // フォームに全角を入力させない
    let str = $(this).val();
    while(str.match(/[^A-Z^a-z\d\_]/)){
      str=str.replace(/[^A-Z^a-z\d\_]/,"");
    }
    $(this).val(str);
  });
});
