<?php
//If you use fopen() on a file that does not exist, it will create it,
//given that the file is opened for writing (a)
//nOTE  - "a" appends ....
if($_SERVER['REQUEST_METHOD'] == 'GET') {
    if(isset($_GET['key'])) {
        echo($_GET['key']);
        $theFile = fopen("../files/riddles.txt", "a") or die("Unable to open file!");
        fwrite($theFile, "Riddle 1:" . $_GET['key'] . "\n");
        $txt2 = "Test\n";
        fwrite($theFile, $txt2);
        fclose($theFile);
        exit;
    }
}




?>