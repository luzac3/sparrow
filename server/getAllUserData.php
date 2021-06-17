<?php
$root = $_SERVER["DOCUMENT_ROOT"];

require_once $root . '/sparrow/common/php/stored.php';

$result = stored(
  "getAllUserData",array('user_num'=>$_COOKIE["user_num"])
);

$gameFLg = $result[0]["GAME_FLG"];
?>
