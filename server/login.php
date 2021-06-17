<?php
header('Content-Type: text/html; charset=utf8mb4');
$root = $_SERVER["DOCUMENT_ROOT"];

require_once $root . '/sparrow/common/php/stored.php';

if(!empty($_POST["argArr"])){
  $id = $_POST["argArr"]["id"];
  $storedName = "getUser";

    // ストアドプロシージャ呼び出し
    $result = stored(
        $storedName
        ,array('user_id'=>$id)
    );

    echo json_encode($result);
}else{
    echo json_encode(0);
}
?>
