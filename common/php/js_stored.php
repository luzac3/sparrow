<?php
if(!empty($_POST)){

    // ストアドプロシージャ実行関数読み込み
    require_once ("./stored.php");

    // ストアド名を取得
    $stored = $_POST["storedName"];

    // POSTデータ配列の取得
    $argArr = $_POST["argArr"];

    // 配列が存在しない場合、明示的にNULLを指定
    if(empty($argArr)){
        $argArr = null;
    }

    // ストアドプロシージャ呼び出し
    $result = stored($stored, $argArr);

    if($result){
        echo json_encode($result);
    }else{
    	// echo json_encode($result);
        echo json_encode("データ取得エラー");
    }
}else{
    echo json_encode("実行失敗");
}
?>
