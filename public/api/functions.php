<?php

function getAll($table) {
	global $pdo;

	$selection = $pdo->prepare("SELECT * FROM $table");
	$selection->execute();

	$results = array();

	while($result = $selection->fetch(PDO::FETCH_ASSOC)) {
		array_push($results, $result);
	}

	return $results;
}

function get($table, $id) {
	global $pdo;

	$selection = $pdo->prepare("SELECT * FROM $table WHERE id = :id");
	$selection->execute(array(
		':id'=> $id
	));

	$result = $selection->fetch(PDO::FETCH_ASSOC);

	return $result;
}

function save($table, $fields, $values) {
	global $pdo;

	$fields = implode(',', $fields);
	$values = "'" . implode("', '", $values) . "'";


	$sql = "INSERT INTO $table ($fields) VALUES ($values)";

	$insertion = $pdo->prepare($sql);

	$insertion->execute();
}