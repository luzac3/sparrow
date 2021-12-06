<?php
class DbInfo{
    public $server = "";
    public $username = "";
    public $password = "";
    public $db_name = "";
    public $host = "";

    function __construct(){
        if ($_SERVER['HTTP_HOST'] == "localhost"){
            $this->server = "localhost";
            $this->username = "root";
            $this->password = "alderaan";
            $this->db_name = "sparrow";
        }else{
            $this->server = "mysql622.db.sakura.ne.jp";
            $this->username = "wolfnet-twei";
            $this->password = "alderaan123";
            $this->db_name = "wolfnet-twei_sparrow";
        }
    }
}
?>
