<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

use App\Models\callStored;

class LoginController extends Controlle {
  public function index() {
    // 全ユーザのデータを取得するmodel
    $callStored = new CallStored();

    $data = $callStored->callStored("getAllUserData", array('userNum'=>$_COOKIE["user_num"]));

    // ゲームフラグ書き換え
    $gameFLg = $result[0]["GAME_FLG"];

    return view('home', ["gameFLg" => $gameFlg]);
  }

  public function game($storedName, $argArr) {

    $callStored = new CallStored();
    // データ取得
    $data = $callStored->callStored($storedName, $argArr);

    // データはJS側で処理
    return $data;
  }
}
