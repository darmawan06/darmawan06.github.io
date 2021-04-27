<!DOCTYPE html>
<html>
<head>
	<title>SMART ALARM - IOT</title>
	<link rel="stylesheet" type="text/css" href="loading-bar.css"/>
	<script type="text/javascript" src="loading-bar.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<label>Lampu 1 : <span id="alarm-info"></span></label>
<br>
<label>Kelembaban Tanaman 1 : </label>
<div class="progress">
  <div id="kelembaban-info" class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
<br>
<button onclick="UpdateLamp()">KLIK</button>









<script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-database.js"></script>
<script type="text/javascript" src="index.js"></script>
<!-- Optional JavaScript -->


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>