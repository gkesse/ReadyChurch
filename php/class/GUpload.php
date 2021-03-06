<?php   
    class GUpload {
        //===============================================
        private static $m_instance = null;
        private $m_root;
        private $m_size;
        //===============================================
        private function __construct() {
            $this->m_root = $_SERVER["DOCUMENT_ROOT"];
            $this->m_root .= "/data/img/uploads/";
            $this->m_size = 2*1024*1024; // 2Mo
        }
        //===============================================
        public static function Instance() {
            if(is_null(self::$m_instance)) {
                self::$m_instance = new GUpload();  
            }
            return self::$m_instance;
        }
        //===============================================
        public function upload() {
            if(empty($_FILES) || !isset($_FILES["FileToUpload"])) return;
            $lTotal = count($_FILES["FileToUpload"]["name"]);
            for($i = 0; $i < $lTotal; $i++) {
                $lFilename = basename($_FILES["FileToUpload"]["name"][$i]);
                
                $lFilename = strtr($lFilename, 
                'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ', 
                'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
                $lFilename = preg_replace('/([^.a-z0-9]+)/i', '-', $lFilename);
                
                $lFullpath = $this->m_root.$lFilename;
                
                if(file_exists($lFullpath)) continue;
                
                $lExt = strtolower(pathinfo($lFullpath, PATHINFO_EXTENSION));
                
                $lSize = $_FILES["FileToUpload"]["size"][$i];
                if($lSize > $this->m_size) continue;
                
                $lTmpFile = $_FILES["FileToUpload"]["tmp_name"][$i];
                move_uploaded_file($lTmpFile, $lFullpath);
            }
        }
        //===============================================
    }
?>