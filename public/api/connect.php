<?php

header('Content-type: text/html; charset=UTF-8');

$host = 'localhost';
$user = 'root';
$pwd  = '';
$dbname = 'panelando';

$pdo = new PDO('mysql:host=' . $host . ';dbname='. $dbname, $user, $pwd);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
