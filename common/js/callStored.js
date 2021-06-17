function callStored(argArr, storedName, time_out = 1000){

    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/sparrow/common/php/js_stored.php"
            ,cache: false
            // ,timeout: time_out
            ,type:'POST'
            ,dataType: 'json'
            ,data:{
                argArr:argArr
                ,storedName:storedName
            }
            //,processData: false
            //,contentType: false
            //,traditional: true
        }).then(
            function(data){
                console.log(data);
                resolve(data);
            },
            function(XMLHttpRequest, textStatus, errorThrown){
                console.log("更新処理に失敗しました");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
                reject(0);
            }
        );
    });
}
