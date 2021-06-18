$(document).ready(function(){
  $(".joinButton").on("click",function(){
    $(".btn").prop("disabled", true);
    updateFlg();
  });

  $(".scoreSet").on("click",function(){
    $(".btn").prop("disabled", true);
    callStored(
      {
        user_num:searchCookie("user_num")
        ,table_num:$("#table_number").val()
        ,score:$("#score").val()
      }
      ,"setScore"
    ).then(function(data){
      console.log(data);
      callStored(
        {
          user_num:searchCookie("user_num")
        }
        ,"rankSet"
      ).then(function(data){
        console.log(data);
        callStored(
          null
          ,"rankScoreSet"
        ).then(function(data){
          console.log(data);
          updateFlg();
        },function(){
          console.log("err");
        }).catch(
          err => alert(err)
        );
      },function(){
        console.log("err");
      }).catch(
      err => alert(err)
      );
    },function(){
      console.log("err");
    }).catch(
    err => alert(err)
    );
  });
});

function updateFlg(){
  callStored(
    {
      user_num:searchCookie("user_num")
    }
    ,"updateGameFlg"
  ).then(function(data){
    console.log(data);
    location.reload();
  },function(){
    console.log("err");
  }).catch(
    err => alert(err)
  );
}
