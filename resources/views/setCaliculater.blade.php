<!DOCTYPE html>
<html>
<head>

@include('share.htmlHeader')

<link rel="stylesheet" href="/sparrow/css/setCaliculater.css" type="text/css" media="screen">
<script src="/sparrow/scripts/pages/setCaliculater.js"></script>
<title>セット料金計算ツール</title>
</head>
<body>

<div class="container">
  <h1 id="title" class="d-flex align-items-center justify-content-center">セット料金計算ツール</h1>
  @include('share.header')
  <div class="main">
    <form class="form-signin">
      <div class="caliculater">
        <p>
          <span>入場時間：</span>
          <input class="inHour" type="number" name="" value="">
          <span>時　</span>
          <input class="inMinutes" type="number" name="" value="">
          <span>分</span>
        </p>
        <p>
          <span>退場時間：</span>
          <input class="outHour" type="number" name="" value="">
          <span>時　</span>
          <input class="outMinutes" type="number" name="" value="">
          <span>分</span>
        </p>
        <p>
          金額：
          <input class="amount" type="number" name="" value="">
          <span>円　×　</span>
          <select class="unitOfMinutes" name="">
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="60">60</option>
          </select>
          <span>分</span>
        </p>
        <p>
          <span>人数：</span>
          <select class="numberOfPeople" name="">
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <span>人</span>
        </p>
        <br>
        <p class="plice">一人：<span class="showPlice"></span>円</p>
      </div>
    </form>
  </div>
</div>

@include('share.htmlFooter')

</html>
