import {ControlModal} from '../module/ControlModal';
import {CallStored} from '../module/callStored';
import {SearchCookie} from '../module/searchCookie';
import {GetUrlParams} from '../module/getUrlParams';

$(document).ready(function() {
  const controlModal = new ControlModal(document.getElementById('joinModal')!);

  const searchCookie = new SearchCookie();
  const getUrlParams = new GetUrlParams();

  const userNum = searchCookie.getCookie('user_num');
  const eventId = getUrlParams.getUrlParams("event_id");

  if(!userNum){
    alert("ユーザー番号がありません");
    return;
  }

  if(!eventId){
    alert("イベントIDが不正です");
    return;
  }

  const callStored = new CallStored();
  const home = new Home(eventId, userNum, callStored);

  $('.joinButton').on('click', () => {

    $('.btn').prop('disabled', true);

    const mess = "卓番号:" + $('#table_number').val() + "\nのゲームに参加します";

    controlModal.openModal(mess).then((event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.dataset.button;

      if (button === 'ok') {
        home.updateFlg();
        controlModal.clickOk();
      } else {
        controlModal.clickCancel();
      }
    });
  });

  $('.scoreSet').on('click', () => {
    $('.btn').prop('disabled', true);

    // 点数設定
    const mess = $('#score').val() + "点で登録します。よろしいですか？";

    controlModal.openModal(mess).then((event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.dataset.button;

      if (button === 'ok') {
        home.updateFlg();
        controlModal.clickOk();
      } else {
        controlModal.clickCancel();
      }
    });

    callStored.callSql(
      {
        event_id: eventId,
        user_num: userNum,
        table_num: String($('#table_number').val()),
        score: String($('#score').val())
      },
      'setScore'
    ).then((data) => {
      console.log(data);
      callStored.callSql(
        {
          event_id: eventId,
          user_num: userNum
        },
        'rankSet'
      ).then(data => {
        console.log(data);
        callStored.callSql(
          {
            event_id: eventId
          },
          'rankScoreSet'
        ).then(data => {
          console.log(data);
          home.updateFlg();
        }, function(){
          console.log('err');
        }).catch(
          err => alert(err)
        );
      }, () => {
        console.log('err');
      }).catch(
      err => alert(err)
      );
    }, () => {
      console.log('err');
    }).catch(
    err => alert(err)
    );
  });
});

class Home{
  eventId: string;
  userNum: string;
  callStored: CallStored;

  constructor(eventId: string, userNum: string, callStored: CallStored){
    this.userId = userId;
    this.userNum = userNum;
    this.callStored = callStored;
  }

  updateFlg(){
    this.callStored.callSql(
      {
        event_id: this.eventId,
        user_num: this.userNum
      },
      'updateGameFlg'
    ).then(data => {
      console.log(data);
      location.reload();
    }, () => {
      console.log('err');
    }).catch(
      err => alert(err)
    );
  }
}
