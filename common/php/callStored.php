<?php
function callStored($storedName,$argArr = null){
  $root = $_SERVER["DOCUMENT_ROOT"];

  require_once $root . '/sparrow/common/php/stored.php';

  $result = stored(
    $storedName,$argArr
  );

  return $result;
}
?>
