<?php

include('connect.php');
include('functions.php');


if(isset($_FILES['file'])) {
	$image = $_FILES['file'];
	$fileName = $_POST['file_name'];
	$ds = DIRECTORY_SEPARATOR;
	$staticFolder = dirname(__DIR__) . $ds . 'assets' . $ds . 'images' . $ds . 'super-static' . $ds;

	uploadFile($image, $fileName, $staticFolder);
	echo json_encode($_FILES['file']);
}


// echo $_POST['id'];
