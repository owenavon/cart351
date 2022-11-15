<?php
//If you use fopen() on a file that does not exist, it will create it,
//given that the file is opened for writing (a)
//nOTE  - "a" appends ....
$theFile = fopen("../files/riddles.txt", "a") or die("Unable to open file!");
$txt = "Sunday\n";
fwrite($theFile, $txt);
$txt2 = "Stromy\n";
fwrite($theFile, $txt2);
$txt3 = "Walked and walked  - got lost \n";
fwrite($theFile, $txt3);
fclose($theFile);
?>