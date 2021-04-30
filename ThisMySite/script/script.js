// Initialize Cloud Firestore through Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
let showBy = "Website";
function showFormAdd() {
	let show = document.getElementById('add-data');
	if(show.style.display == "none"){
		show.style.display = "block"
	}else{
		show.style.display = "none"
	}
}



function addData() {
	let title = document.getElementById('title');
	let topic = document.getElementById('topic');
	let matkul = document.getElementById('matkul');
	let link = document.getElementById('link');
	let linkW = document.getElementById('linkW');
	let menu = document.getElementById('MenuMain');
	if(title.value != "" && topic.value != "" && matkul.value != "" && link.value != ""){

		if (linkW.value != "") {
			db.collection("Project").add({
			    Title: title.value,
			    Topic: topic.value,
			    MataKuliah: matkul.value,
			    LinkG: link.value,
			    LinkW: linkW.value
			})
			.then((docRef) => {
			    console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
			    console.error("Error adding document: ", error);
			});
		}else{
			db.collection("Project").add({
			    Title: title.value,
			    Topic: topic.value,
			    MataKuliah: matkul.value,
			    LinkG: link.value,
			})
			.then((docRef) => {
			    console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
			    console.error("Error adding document: ", error);
			});
		}
		searchDataByTitle(topic.value);
		title.value = null;
		topic.value = null;
		matkul.value = null;
		link.value = null;
		linkW.value = null;
	}
}

function searchDataByTitle(title){
	showBy = title;
	let menu = document.getElementById('MenuMain');
	menu.innerHTML = "";
	db.collection("Project").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
	    if(title == doc.data()['Topic']){
	    	if(doc.data()['LinkW'] != null){
				menu.innerHTML += `<div class="card">
				  	<div class="card-body">
						    <h5 class="card-title">${doc.data()['Title']}</h5>
						    <h6 class="card-subtitle mb-2 text-muted">${doc.data()['Topic']}</h6>
						    <p class="card-text">${doc.data()['MataKuliah']}</p>
						    <a href="${doc.data()['LinkG']}" class="card-link">Link Github</a>
						  	<a href="${doc.data()['LinkW']}" class="card-link">Link Website</a>
						 </div>
						  <button class="btn btn-danger" onclick="deleteData('${doc.id}')">Delete</button>
					</div>`;	    		
	    	}else{
	    		menu.innerHTML += `<div class="card">
				  	<div class="card-body">
						    <h5 class="card-title">${doc.data()['Title']}</h5>
						    <h6 class="card-subtitle mb-2 text-muted">${doc.data()['Topic']}</h6>
						    <p class="card-text">${doc.data()['MataKuliah']}</p>
						    <a href="${doc.data()['LinkG']}" class="card-link">Link Github</a>
						 </div>
						  <button class="btn btn-danger" onclick="deleteData('${doc.id}')">Delete</button>
					</div>`;
	    	}
	    }
	    });

	});
}

function deleteData(id) {
	db.collection("Project").doc(id).delete().then(() => {
    	console.log("Document successfully deleted!");
	}).catch((error) => {
    	console.error("Error removing document: ", error);
	});
	searchDataByTitle(showBy);
}
searchDataByTitle(showBy);