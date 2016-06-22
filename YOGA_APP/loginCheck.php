<?php
include('connect_mysql.php');
$user = $_REQUEST['uname'];
$pass = $_REQUEST['pword'];

if(isset($_POST['loggedin']))
{
if (empty ($user)) //if username field is empty echo below statement
{
    echo "you must enter your unique username <br />";
}
if (empty ($_REQUEST['pass'])) //if password 1 field is empty echo below statement
{
    echo "you must enter your password <br />";
}
}

else
{   
$query = "SELECT * FROM yogaapp WHERE username = '".$user."' AND password = '".$pass."'" ;
$result = mysqli_query($dbcon,$query);
if ($result) 
{
    echo "query successfull wrote to DB";
    header('location: http://localhost/YOGA_APP/QuizSelection.html');
}
else
{
    echo"unscccessful login";
}
}?>
