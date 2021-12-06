<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CallStored extends Model{
  protected $dbInfo = "";

  public function __construct(array $attributes = []) {
    parent::__construct($attributes);
    require_once("../conection.php");
    $dbInfo = new DbInfo();
  }

  public function callStored($storedName, $argArr) {
    $sql = "exec ";
    $sql .= $storedName;
    $sql .= "(";

    if(!is_null($argArr)){
        foreach($argArr as $key => $val){
            $sql .= "?,";
        }
    }
    $sql .= "@exit_cd)";

    $data = DB::select($sql, $argArr);

    return $data;
  }
}
?>
