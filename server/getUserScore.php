<?php
$root = $_SERVER["DOCUMENT_ROOT"];

require_once $root . '/sparrow/common/php/stored.php';

if(!empty($_GET["user_num"])){
  $userNum = $_GET["user_num"];
}else{
  $userNum = $_COOKIE["user_num"];
}

$result = stored(
  "getUserScore",array('user_num'=>$userNum)
);

$myScore = $result;
?>
