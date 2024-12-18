<?phpinclude('layout/header.php'); ?>


<div class="container mt-5">

<h1>Seu signo é</h1>

<?php

$data_nascimento = $_POST['data_nascimento'];

$signos = simplexml_load_file("signos.xml");

$data_nascimento = newDateTime($data_nascimento);

$signo_encontrado = false;

foreach ($signos->signo as $signo) {

$data_inicio = DateTime::createFromFormat('d/m', (string)$signo->dataInicio);

$data_fim = DateTime::createFromFormat('d/m', (string)$signo->dataFim);

$data_inicio->setDate($data_nascimento->format('Y'), $data_inicio->format('m'),

$data_inicio->format('d'));

$data_fim->setDate($data_nascimento->format('Y'), $data_fim->format('m'),

$data_fim->format('d'));

if ($data_inicio > $data_fim) {

$data_fim->modify('+1 year');

if ($data_nascimento < $data_inicio && $data_nascimento > $data_fim){

continue;

}

}

if($data_nascimento >= $data_inicio && $data_nascimento <= $data_fim){

echo"<h2>{$signo->$signoNome}</h2>";

echo"<p>{$signo->descrição}</p>";

$signo_encontrado = true;

break;

}

}

if(!$signo_encontrado){

echo"<P>Não foi possivel determinar seu signo. Veririque a data informada.</p>";

}

?>

<a href="index.php" class="btn btn-secondary mt-3">Voltar</a>

</div>

<?phpinclude('LAYOUT/footer.php'); ?>