<?php
ini_set('default_charset', 'utf-8');
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