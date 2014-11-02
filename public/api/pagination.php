<?php

include('connect.php');
include('functions.php');

extract($_POST);

if($offset < 0) {
	echo json_encode(array());
} else {
	echo json_encode(getPage('receitas', $limit, $offset));
}
