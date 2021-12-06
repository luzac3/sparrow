<?php

namespace controllers;

use model\callStored;

class LoginController extends Controller
{
  public function index()
  {
    // ログインページではユーザーIDはない
    return view('login.model');
  }

  public function login($storedName, $argArr) {
    // Frameworksモデルのインスタンス化
    $md = new CallStored();
    // データ取得
    $data = $md->callStored($storedName, $argArr);

    // ビューを返す
    // return view('login.model', ['data' => $data]);
    return $data;
  }

}
