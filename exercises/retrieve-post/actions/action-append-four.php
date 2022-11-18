<?php
//If you use fopen() on a file that does not exist, it will create it,
//given that the file is opened for writing (a)
//nOTE  - "a" appends ...
if($_SERVER['REQUEST_METHOD'] == 'GET') {
    if(isset($_GET['key'])) {
        // echo($_GET['key']);
        $theFile = fopen("../files/poems.txt", "a") or die("Unable to open file!");
        fwrite($theFile, "The Dream Keeper: \n");
        $txt2 =  $_GET['key'] . "\n";
        fwrite($theFile, $txt2);
        fwrite($theFile, "\n"); // Paragraph return
        fclose($theFile);

        $theFile = fopen("../files/poems.txt", "r") or die("Unable to open file!");
        $text = array();
        while(!feof($theFile)) { //  While we are not at the end of the file
            $text[] = fgets($theFile);
        }
        echo(json_encode($text));


        exit;
    }
}




?>