export class DefaultAjax {
  argArr: {[key:string]: string};
  phpAddr: string;
  timeOut: number;

  constructor(argArr: {[key:string]: string}, phpAddr: string, timeOut:number = 1000) {
    this.argArr = argArr;
    this.phpAddr = phpAddr;
    this.timeOut = timeOut;
  }

  post(){
    return new Promise((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
        $.ajax({
            url: this.phpAddr
            ,cache: false
            // ,timeout: time_out
            ,type:'POST'
            ,dataType: 'json'
            ,data:{
                argArr: this.argArr
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
                console.log("jqXHR : " + jqXHR.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown);
                reject(0);
            }
        );
    });
  }
}
