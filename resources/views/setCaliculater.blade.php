<!DOCTYPE html>
<html>
<head>

@extends('share.htmlHeader)

<link rel="stylesheet" href="/sparrow/css/setCaliculater.css" type="text/css" media="screen">
<script src="/sparrow/scripts/setCaliculater.js"></script>
<title>セット料金計算ツール</title>
</head>
<body>
<form class="form-signin">
  <div class="caliculater">
    <p>
      入場時間：
      <input class="inHour" type="number" name="" value="">
      時　
      <input class="inMinutes" type="number" name="" value="">
      分
    </p>
    <p>
      退場時間：
      <input class="outHour" type="number" name="" value="">
      時　
      <input class="outMinutes" type="number" name="" value="">
      分
    </p>
    <p>
      加算時間単位：
      <select class="unitOfMinutes" name="">
        <option value="10">10</option>
        <option value="10">30</option>
        <option value="10">60</option>
      </select>
      分　
    </p>
    <p>
      金額：
      <input class="amount" type="number" name="" value="">
      円　
    </p>
    <p>
      人数：
      <select class="numberOfPeople" name="">
        <option value="10">3</option>
        <option value="10">4</option>
      </select>
      人
    </p>
    <br>
    <p class="plice">一人：<span class="showPlice"></span>円</p>
  </div>
  <div id="test">

  </div>
</form>

@extends('share.htmlFooter)

</html>
