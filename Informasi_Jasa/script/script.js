const firebaseConfig = {
  apiKey: "AIzaSyAlKD1WXX3Q5Esu74tMgkLXi7i7gMwXzLo",
  authDomain: "mysite-87ed0.firebaseapp.com",
  projectId: "mysite-87ed0",
  storageBucket: "mysite-87ed0.appspot.com",
  messagingSenderId: "472395372780",
  appId: "1:472395372780:web:e58fb06b3699ad3dd5adc9",
  measurementId: "G-LKTE8VQDV6"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


let boolNavbar = true;
function ShowNavbar() {
	let navbar = document.getElementById('navbar');
	let icon = document.getElementById('iconNavbar');
	if (boolNavbar){
		navbar.style.display = "block";
		boolNavbar = false;
		icon.className = "fa fa-eye-slash";
	}else{
		navbar.style.display = "none";
		boolNavbar = true;
		icon.className = "fa fa-eye";
	}
}

const closePopUp = ()=>{
	let PopUp = document.getElementById('popUpOrder');
	PopUp.style.display = "none";
}

const openPopUp = ()=>{
	let PopUp = document.getElementById('popUpOrder');
	PopUp.style.display = "flex";
}

closePopUp();


const SelectJob = ()=>{
	let Job = document.getElementById('Job').value;
	let Harga = document.getElementById('RangeHarga');
	let HargaO = Harga.getElementsByTagName('option')[0];
	if (Job == "Front-End Development") {
		HargaO.innerText = "$5/Jam";
		HargaO.value = "$5";
	}else if(Job == "Back-End Development"){
		HargaO.innerText = "$10/Jam";
		HargaO.value = "$10";
	}else if(Job == "Front-End and Back-End Development"){
		HargaO.innerText = "$15/Jam";
		HargaO.value = "$15";
	}else if(Job == "Implementasi Algoritma"){
		HargaO.innerText = "$3/Jam";
		HargaO.value = "$3";
	}else if(Job == "Lain-Lain"){
		HargaO.innerText = "$?/Jam";
		HargaO.value = "$?";
	}else{
		HargaO.innerText = "$0/Jam";
		HargaO.value = "$0";
	}
}

function addData() {
	let namaClient = document.getElementById('namaClient');
	let noClient = document.getElementById('noClient');
	let Job = document.getElementById('Job');
	let RangeHarga = document.getElementById('RangeHarga');
	let emailClient = document.getElementById('emailClient');
	let pesanClient = document.getElementById('pesanClient');
	console.log(namaClient.value);
	if(namaClient.value != "" && noClient.value != "" && Job.value != "" && RangeHarga.value != "" && pesanClient.value != ""){
		db.collection("ProjectClient").add({
		    namaClient: namaClient.value,
		    noClient: noClient.value,
		    Job: Job.value,
		    RangeHarga: RangeHarga.value,
		    emailClient: emailClient.value,
		    pesanClient: pesanClient.value
		})
		.then((docRef) => {
		    console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
		    console.error("Error adding document: ", error);
		});
		namaClient.value = null;
		noClient.value = null;
		Job.value = null;
		RangeHarga.value = null;
		emailClient.value = null;
		pesanClient.value = null;
	}
}