<!DOCTYPE html>
<html>
<head>

@include('share.htmlHeader)

<link rel="stylesheet" href="/sparrow/css/login.css" type="text/css" media="screen">
<script src="/sparrow/scripts/login.js"></script>
<title>雀オフ　イベント登録(ルール)</title>
</head>
<body>
<form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">メンバー登録</h1>
  <p>
    <!-- この部分もフラグとして保持 -->
    <input type="raio" name="registerationMethod" value="" selected="selected">簡易
    <input type="raio" name="registerationMethod" value="">詳細
  </p>
  <div class="easy">
    <table>
      <tr>
        <th>喰いタン</th>
        <td><input type="radio" name="kuitan" value="">あり</td>
        <td><input type="radio" name="kuitan" value="">なし</td>
      </tr>
    </table>
    <p>

    </p>
  </div>
  <div class="detail">
    <table>
      <thead>
        <tr rowspan="3">
          一般役
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>喰いタン</th>
          <td><input type="radio" name="kuitan" value="">あり</td>
          <td><input type="radio" name="kuitan" value="">なし</td>
        </tr>
        <tr>
          <th>後付け</th>
          <td><input type="radio" name="atoduke" value="">あり</td>
          <td><input type="radio" name="atoduke" value="">なし</td>
        </tr>
        <tr>
          <th>ピンヅモ</th>
          <td><input type="radio" name="pindumo" value="">あり</td>
          <td><input type="radio" name="pindumo" value="">なし</td>
        </tr>
        <tr>
          <th>一発</th>
          <td><input type="radio" name="ippatsu" value="">あり</td>
          <td><input type="radio" name="ippatsu" value="">なし</td>
        </tr>
        <tr>
          <th>流し満貫</th>
          <td><input type="radio" name="nagashi" value="">あり</td>
          <td><input type="radio" name="nagashi" value="">なし</td>
        </tr>
        <tr>
          <th>国士無双時暗槓への槍槓</th>
          <td><input type="radio" name="kokushi_chankan" value="">あり</td>
          <td><input type="radio" name="kokushi_chankan" value="">なし</td>
        </tr>
        <tr>
          <th>發なし緑一色</th>
          <td><input type="radio" name="hatsu_ryuiso" value="">あり</td>
          <td><input type="radio" name="hatsu_ryuiso" value="">なし</td>
        </tr>
        <tr>
          <th>役満の複合</th>
          <td><input type="radio" name="fukugou" value="">あり</td>
          <td><input type="radio" name="fukugou" value="">なし</td>
        </tr>
        <!-- 複合がアリの場合のみ -->
        <tr>
          <th>いくつまで複合するか</th>
          <td rowspan="2">
            <select class="" name="fukugou_su">
              <option value="0">無制限</option>
              <option value="2">2:ダブル役満</option>
              <option value="3">3:トリプル役満</option>
              <option value="4">4:クオドラプル役満</option>
              <option value="5">5:クインティプル役満</option>
              <option value="6">6:セクスタプル役満</option>
              <option value="7">7:セプタプル役満</option>
            </select>
          </td>
        </tr>
        <tr>
          <th rowspan="2">単独役でのダブル役満</th>
        </tr>
        <tr>
          <th>四暗刻単騎</th>
          <td><input type="radio" name="suanko_tanki" value="">あり</td>
          <td><input type="radio" name="suanko_tanki" value="">なし</td>
        </tr>
        <tr>
          <th>国士無双13面待ち</th>
          <td><input type="radio" name="kokushi_13men" value="">あり</td>
          <td><input type="radio" name="kokushi_13men" value="">なし</td>
        </tr>
        <tr>
          <th>純正九蓮宝塔</th>
          <td><input type="radio" name="junsei_churen" value="">あり</td>
          <td><input type="radio" name="junsei_churen" value="">なし</td>
        </tr>
        <tr>
          <th>發なし緑一色</th>
          <td><input type="radio" name="tatsunashi_ryuiso_double" value="">あり</td>
          <td><input type="radio" name="tatsunashi_ryuiso_double" value="">なし</td>
        </tr>
        <tr>
          <th>大四喜</th>
          <td><input type="radio" name="daisushi" value="">あり</td>
          <td><input type="radio" name="daisushi" value="">なし</td>
        </tr>
        <tr>
          <th>四槓子</th>
          <td><input type="radio" name="sukantsu" value="">あり</td>
          <td><input type="radio" name="sukantsu" value="">なし</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          縛り
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>5巡目以降二翻縛り</th>
          <td><input type="radio" name="ryanhan" value="">あり</td>
          <td><input type="radio" name="ryanhan" value="">なし</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          流局
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>四風連打</th>
          <td><input type="radio" name="sufurenda" value="">流局</td>
          <td><input type="radio" name="sufurenda" value="">続行</td>
        </tr>
        <tr>
          <th>九種九牌</th>
          <td><input type="radio" name="kyushukyuhai" value="">流局</td>
          <td><input type="radio" name="kyushukyuhai" value="">続行</td>
        </tr>
        <tr>
          <th>三家和</th>
          <td><input type="radio" name="sanchaho" value="">流局</td>
          <td><input type="radio" name="sanchaho" value="">続行</td>
        </tr>
        <tr>
          <th>四家和</th>
          <td><input type="radio" name="suchaho" value="">流局</td>
          <td><input type="radio" name="suchaho" value="">続行</td>
        </tr>
        <tr>
          <th>四開槓</th>
          <td><input type="radio" name="sukaikan" value="">流局</td>
          <td><input type="radio" name="sukaikan" value="">続行</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          王牌
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>裏ドラ</th>
          <td><input type="radio" name="uradora" value="">あり</td>
          <td><input type="radio" name="uradora" value="">なし</td>
        </tr>
        <tr>
          <th>槓ドラ(暗槓)</th>
          <td><input type="radio" name="kandora_ankan" value="">即めくり</td>
          <td><input type="radio" name="kandora_ankan" value="">後めくり</td>
        </tr>
        <tr>
          <th>槓ドラ(明槓)</th>
          <td><input type="radio" name="kandora_minkan" value="">即めくり</td>
          <td><input type="radio" name="kandora_minkan" value="">後めくり</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          包
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>大三元</th>
          <td><input type="radio" name="daisangen" value="">責任払い</td>
          <td><input type="radio" name="daisangen" value="">なし</td>
        </tr>
        <tr>
          <th>四喜和</th>
          <td><input type="radio" name="sushiho" value="">責任払い</td>
          <td><input type="radio" name="sushiho" value="">なし</td>
        </tr>
        <tr>
          <th>大明槓嶺上開花</th>
          <td><input type="radio" name="daiminkan_rinshan" value="">責任払い</td>
          <td><input type="radio" name="daiminkan_rinshan" value="">なし</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          特殊ルール
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>永田町ルール</th>
          <td><input type="radio" name="nagatacho" value="">あり</td>
          <td><input type="radio" name="nagatacho" value="">なし</td>
        </tr>
        <tr>
          <th>割れ目</th>
          <td><input type="radio" name="wareme" value="">あり</td>
          <td><input type="radio" name="wareme" value="">なし</td>
        </tr>
        <tr>
          <th>青天井</th>
          <td><input type="radio" name="aotenjo" value="">あり</td>
          <td><input type="radio" name="aotenjo" value="">なし</td>
        </tr>
        <tr>
          <th>同時和了</th>
          <td><input type="radio" name="doujihora" value="">あり</td>
          <td><input type="radio" name="doujihora" value="">なし</td>
        </tr>
        <!-- 同時和了がアリの場合のみ -->
        <tr>
          <th>同時に和了できる人数</th>
          <td rowspan="2">
            <select class="" name="doujihora_num">
              <option value="2">2人</option>
              <option value="3">3人</option>
            </select>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          ローカル役1
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>オープンリーチ</th>
          <td><input type="radio" name="open" value="">あり</td>
          <td><input type="radio" name="open" value="">なし</td>
        </tr>
        <tr>
          <th>三連刻</th>
          <td><input type="radio" name="sanrenko" value="">あり</td>
          <td><input type="radio" name="sanrenko" value="">なし</td>
        </tr>
        <tr>
          <th>一色三順</th>
          <td><input type="radio" name="isu_sanjun" value="">あり</td>
          <td><input type="radio" name="isu_sanjun" value="">なし</td>
        </tr>
        <tr>
          <th>パンダ</th>
          <td><input type="radio" name="panda" value="">あり</td>
          <td><input type="radio" name="panda" value="">なし</td>
        </tr>
        <tr>
          <th>大車輪</th>
          <td><input type="radio" name="daisharin" value="">あり</td>
          <td><input type="radio" name="daisharin" value="">なし</td>
        </tr>
        <tr>
          <th>四連刻</th>
          <td><input type="radio" name="surenko" value="">あり</td>
          <td><input type="radio" name="surenko" value="">なし</td>
        </tr>
        <tr>
          <th>八連荘</th>
          <td><input type="radio" name="parenchan" value="">あり</td>
          <td><input type="radio" name="parenchan" value="">なし</td>
        </tr>
        <tr>
          <th>人和</th>
          <td><input type="radio" name="renho" value="">あり</td>
          <td><input type="radio" name="renho" value="">なし</td>
        </tr>
      </tbody>
      <thead>
        <tr rowspan="3">
          ローカル役2
          <!-- ローカル役追加できるようにしても良いかも -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>サンプル</th>
          <td><input type="radio" name="kuitan" value="">あり</td>
          <td><input type="radio" name="kuitan" value="">なし</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p><button class="user_add" type="button" name="button">登録</button></p>

  <!-- このボタン、PHP経由で表示すべきか。ページをロードして表示するならその方がよさそう -->
  <button type="button" name="button">確認画面へ</button>

  <input type="text" name="" value="">
</form>

@include('share.htmlFooter)

</html>
