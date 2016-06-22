<?php

DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'myprojects');

$dbcon = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

?>
