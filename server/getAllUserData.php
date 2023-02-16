<?php
$root = $_SERVER["DOCUMENT_ROOT"];

require_once $root . '/sparrow/common/php/stored.php';

$eventId = $_GET["event_id"];

$result = stored(
  "getAllUserData",array(
    'user_num'=>$_COOKIE["user_num"]
    ,'event_id'=>$eventId
  )
);

$gameFLg = $result[0]["GAME_FLG"];
?>
