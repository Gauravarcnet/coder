<?php
$responce=[];
session_start();
if(!isset($_POST))die();
$username=$_POST['username'];
$password=$_POST['password'];

$con=mysqli_connect('localhost','root','Root@1992','test_site');
$query="Select * from `users` where username='$username' AND password='$password'";
$result=mysqli_query($con,$query);
if(mysqli_num_rows($result)>0){
    $responce['status']='Loggin';
    $responce['user']='admin';
    $responce['useruniqueid']=md5(uniqid());
    $SESSION['useruniqueid']=$responce['useruniqueid'];
}else{
    $responce['status']='error';
 }

 $data =json_encode($responce);
 echo $data;?>