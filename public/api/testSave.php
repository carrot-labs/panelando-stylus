<?php

extract($_POST);

$foo = array();
foreach($ingredients as $ingredient) { array_push($foo, $ingredient['name']); }
$ingredients = $foo;

$foo = array();
foreach($steps as $step) { array_push($foo, $step['name']); }
$steps = $foo;

$recipe = array(
	'name' => $name,
	'preparation_time' => $preparation_time,
	'number_of_portions' => $number_of_portions,
	'difficulty' => $difficulty,
	'ingredients' => $ingredients,
	'steps' => $steps,
);
echo json_encode($recipe);