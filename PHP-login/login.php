<?php
session_start();

if((!isset($_POST['name']))||(!isset($_POST['password']))){
    header('Location:index.php');
    exit();
}
require_once "connect.php";

$connection=new mysqli($host,$db_user,$db_password,$db_name);

if($connection->connect_errno!=0){
    echo "Error:".$connection->connect_errno;
}
else{

$user=$_POST['name'];
$password=$_POST['password'];

$user=htmlentities($user,ENT_QUOTES,"UTF-8");
$password=htmlentities($password,ENT_QUOTES,"UTF-8");
$user=mysqli_real_escape_string($connection,$user);
$password=mysqli_real_escape_string($connection,$password);

$sql="SELECT * FROM users WHERE user='$user' AND password='$password'";

if($result=$connection->query($sql)){
    $num_users=$result->num_rows;
    if($num_users>0){
        $_SESSION['logged']=true;
        $row=$result->fetch_assoc();
        $_SESSION['id']=$row['id'];
        $_SESSION['user']=$row['user'];
        $_SESSION['email']=$row['email'];
        $_SESSION['salary']=$row['salary'];
        $_SESSION['holiday']=$row['holiday'];
        $_SESSION['bonus']=$row['bonus'];
        $_SESSION['status']=$row['status'];
        unset( $_SESSION['fail']);
        $result->close();

       header('Location:employee.php');
    }
    else{
        $_SESSION['fail']='<p class="alert alert-warning mt-2"> Wrong name or password</p>';
        header('Location:index.php');
       
    }

};

    $connection->close();
}



?>