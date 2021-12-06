<!DOCTYPE html>
<html>
<head>

@extends('share.htmlHeader)

<link rel="stylesheet" href="/sparrow/css/login.css" type="text/css" media="screen">
<script src="/sparrow/scripts/login.js"></script>
<title>雀オフ　ログイン</title>
</head>
<body>
<form class="form-signin">
  <img class="mb-4 chun" src="/sparrow/img/bird_suzume_9916 copy.jpg" alt="ちゅん">
  <h1 class="h3 mb-3 font-weight-normal">お前も焼き鳥にしてやろうか</h1>
  <input type="text" id="inputID" class="form-control" placeholder="TwitterID" required autofocus>
  <button class="btn btn-lg btn-primary btn-block joinButton" type="button">参加するにゃ</button>
</form>

@extends('share.htmlFooter)

</html>
