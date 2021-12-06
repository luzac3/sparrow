export class CallStored {
  callSql(argArr: {[key:string]: string} | null, storedName: string, timeOut:number = 1000){
    return new Promise((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
        $.ajax({
            url: "/sparrow/common/php/js_stored.php"
            ,cache: false
            ,timeout: timeOut
            ,type:'POST'
            ,dataType: 'json'
            ,data:{
                argArr: argArr
                ,storedName: storedName
            }
            //,processData: false
            //,contentType: false
            //,traditional: true
        }).then(
            function(data: any){
                console.log(data);
                resolve(data);
            },
            function(jqXHR: JQueryXHR, textStatus: string, errorThrown: string){
                console.log("更新処理に失敗しました");
                console.log("XMLHttpRequest : " + jqXHR.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown);
                reject(0);
            }
        );
    });
  }
}
