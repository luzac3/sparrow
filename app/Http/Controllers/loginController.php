<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

use App\Models\callStored;

class LoginController extends Controller
{
  public function index()
  {
    // ログインページではユーザーIDはない
    return view('login');
  }

  public function login($storedName, $argArr) {

    $callStored = new CallStored();
    // データ取得
    $data = $callStored->callStored($storedName, $argArr);

    // データはJS側で処理
    return $data;
  }
}
