<?php

include('connect.php');
include('functions.php');

$id = $_POST['id'];

echo json_encode(get('receitas', $id));
