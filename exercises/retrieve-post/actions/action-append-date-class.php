<?php
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $theFile = fopen("../files/activeDates.txt", "a") or die("Unable to open file!");
    

//    echo(json_encode($_POST['lengthOfVals']));
   $length = intval($_POST['lengthOfVals']);
   for ($i=0;$i<$length; $i++){
   echo(json_encode($_POST['e'.$i]));
     fwrite($theFile,$_POST['e0']."\n");
   }
//    fwrite($theFile, 'hey');
   fclose($theFile);
   echo("done");
   exit;
 }
?>