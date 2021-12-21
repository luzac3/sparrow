<!DOCTYPE html>
<html>
<head>

@include('share.htmlHeader)

<link rel="stylesheet" href="/sparrow/css/login.css" type="text/css" media="screen">
<script src="/sparrow/scripts/login.js"></script>
<title>雀オフ　イベント登録(ユーザ登録)</title>
</head>
<body>
<form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">メンバー登録</h1>
  <p>
    一括登録：<input class="bulk_registration" type="text" name="" value="">
    <a href="#">テンプレートダウンロード</a>
  </p>
  <p>
    <input class="user_name" type="text" name="" value="">ユーザ名/
    <input class="user_id" type="text" name="" value="">ツイッターID
  </p>
  <p><button class="user_add" type="button" name="button">追加</button></p>
  <p><button class="user_add" type="button" name="button">登録</button></p>

  <!-- このボタン、PHP経由で表示すべきか。ページをロードして表示するならその方がよさそう -->
  <button type="button" name="button">ルール登録へ</button>

  <input type="text" name="" value="">
</form>

@include('share.htmlFooter)

</html>
