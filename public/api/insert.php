<?php
include('connect.php');


$nome = 'Brigadeiro';
$ingredientes = '["chocolate em p\u00f3","leite condensado","leite","creme de leite","a\u00e7ucar"]';
$modo_preparo = '["Bata o leite","Coloque no forno","Bom apetite"]';
$num_porcoes = 12;
$tempo_preparo = '30 min';
$dificuldade = 2;




$sql = "INSERT INTO receitas (nome, ingredientes, modo_preparo, num_porcoes, tempo_preparo, dificuldade) VALUES (:nome, :ingredientes, :modo_preparo, :num_porcoes, :tempo_preparo, :dificuldade)";

$insertion = $db->prepare($sql);

$insertion->execute(array(
	':nome' 					=> $nome,
	':ingredientes' 	=> $ingredientes,
	':modo_preparo' 	=> $modo_preparo,
	':num_porcoes' 		=> $num_porcoes,
	':tempo_preparo' 	=> $tempo_preparo,
	':dificuldade'		=> $dificuldade
));
