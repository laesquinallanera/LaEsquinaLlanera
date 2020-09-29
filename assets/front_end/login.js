// JavaScript Document


var userEmail = document.getElementById("si-email");
		var password = document.getElementById("si-password");

		function inicioSesion(){
			if(userEmail.value == 'admin@esquinallanera.com' & password.value == '123'){
			window.location="Dashboard/index.html";
		}else{
			alert('datos erroneos');
		}
			return false;
		}