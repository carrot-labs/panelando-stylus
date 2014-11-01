<?php
include('connect.php');
include('functions.php');

extract($_POST);

$foo = array();
foreach($ingredients as $ingredient) { array_push($foo, $ingredient['name']); }
$ingredients = json_encode($foo);

$foo = array();
foreach($steps as $step) { array_push($foo, $step['name']); }
$steps = json_encode($foo);

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
