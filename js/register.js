$(document).ready(function(){
  $(".yes").on("click",function(){
    // ajaxで処理を飛ばす
    callStored(
      {
        user_num:searchCookie("user_num")
        ,user_name:$("#inputName").val()
      }
      ,"registerUserName"
    ).then(function(data){
      console.log(data);

      if(data["exit_cd"] == 0){

        location.href = "/sparrow/front/home.html";
      }
    },function(){
      console.log("err");
    }).catch(
      err => alert(err)
    );
  });

  $(".no").on("click",function(){
    location.reload();
  });
});
