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

function changeInputFileName($newName, $fileName) {
	$extension = explode('.', $fileName);
	$fileName = $newName . '.' . $extension[1];

	return $fileName;
}

function uploadFile($file, $name, $location) {
	$temp_file = $file['tmp_name'];

	if(!is_dir($location)) {
		mkdir($location, 0777, true);
	}

	move_uploaded_file($temp_file, $location . $name);
}