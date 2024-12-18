<?php include('LAYOUT/header.php'); ?>

<div class="container mt-5">
 <h1>Quer saber o seu signo</h1>
<form id="signo-form" method="POST" action="show_zodiac_sing.php">

  <div class="mb-3">
    <label for="data_nascimento" class="form-label">Digite sua data de nascimento</label><br>
    <input type="date" class="form-control" id="data_nascimento" name="data_nascimento"
    required>
  </div>
  <button type="submit" class="btn btn-primary">Descobrir signo</button>
</form>
</div>
<?php include('LAYOUT/footer.php'); ?>