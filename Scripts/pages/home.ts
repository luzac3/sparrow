import {ControlModal} from '../common/ControlModal';
import {callStored} from '../common/callStored';
import {searchCookie} from '../common/searchCookie';

$(document).ready(function() {
  const controlModal = new ControlModal(document.getElementById('joinModal'));
  $('.joinButton').on('click', () => {

    $('.btn').prop('disabled', true);

    const mess = "卓番号:" + $('#table_number').val() + "\nのゲームに参加します";

    controlModal.openModal(mess).then((event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.dataset.button;

      if (button === 'ok') {
        updateFlg();
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
        updateFlg();
        controlModal.clickOk();
      } else {
        controlModal.clickCancel();
      }
    });

    callStored(
      {
        user_num: searchCookie('user_num'),
        table_num: $('#table_number').val(),
        score: $('#score').val()
      },
      'setScore'
    ).then((data) => {
      console.log(data);
      callStored(
        {
          user_num: searchCookie('user_num')
        },
        'rankSet'
      ).then(data => {
        console.log(data);
        callStored(
          null,
          'rankScoreSet'
        ).then((data) => {
          console.log(data);
          updateFlg();
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

function updateFlg(){
  callStored(
    {
      user_num: searchCookie('user_num')
    },
    'updateGameFlg'
  ).then((data) => {
    console.log(data);
    location.reload();
  }, () => {
    console.log('err');
  }).catch(
    err => alert(err)
  );
}
