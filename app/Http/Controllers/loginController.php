<?php

namespace controllers;

use App\Models\callStored;

class LoginController extends Controller
{
  public function index()
  {
    // ログインページではユーザーIDはない
    return view('login.model');
  }

  public function login($storedName, $argArr) {

    $callStored = new CallStored();
    // データ取得
    $data = $callStored->callStored($storedName, $argArr);

    // データはJS側で処理
    return $data;
  }
}
