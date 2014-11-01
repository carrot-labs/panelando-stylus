<?php

include('connect.php');
include('functions.php');

extract($_POST);

save(
	'receitas', 
	array(
		'nome', 
		'imagem', 
		'tempo_preparo', 
		'num_porcoes', 
		'dificuldade', 
		'ingredientes', 
		'modo_preparo'
	),
	array(
		$name,
		$image,
		$preparation_time,
		$number_of_portions,
		$difficulty,
		$ingredients,
		$steps
	)
);

if(isset($_FILES['file'])) {
	$image = $_FILES['file'];
	$fileName = $_POST['file_name'];
	$ds = DIRECTORY_SEPARATOR;
	$staticFolder = dirname(__DIR__) . $ds . 'assets' . $ds . 'images' . $ds . 'super-static' . $ds;

	uploadFile($image, $fileName, $staticFolder);
	echo json_encode($_FILES['file']);
}