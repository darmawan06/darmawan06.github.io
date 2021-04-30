// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCiNk-NN70lNqR-ghR306qrarK4e6gMfuI",
    authDomain: "tubesrpl-44144.firebaseapp.com",
    databaseURL: "https://tubesrpl-44144-default-rtdb.firebaseio.com",
    projectId: "tubesrpl-44144",
    storageBucket: "tubesrpl-44144.appspot.com",
    messagingSenderId: "623447441321",
    appId: "1:623447441321:web:36438643bcc05f63f58eb8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database =  firebase.database();
  
  function controlLamp(){
    let checkBox	= document.getElementById('checkBoxLamp');
    if(checkBox.checked == true){
      firebase.database().ref('Lamps/lamp1').set("ON");
      console.log("ON");
    }else{
      firebase.database().ref('Lamps/lamp1').set("OFF");
      console.log("OFF");
    }
  }

  function displayDate(){
    let checkBox  = document.getElementById('checkBoxDisplay');
    if(checkBox.checked == true){
      firebase.database().ref('DisplayDate').set("ON");
      console.log("ON");
    }else{
      firebase.database().ref('DisplayDate').set("OFF");
      console.log("OFF");
    }
  }


  function sendMessage(){
    let input = document.getElementById('message').value;
    console.log(input);
    firebase.database().ref('Message').set(input);
  }

  function sendHours(){
    let input = document.getElementById('hours').value;
    firebase.database().ref('SetTimes/Hours').set(parseInt(input));
    console.log(input);
  }


  function sendMinutes(){
    let input = document.getElementById('minutes').value;
    firebase.database().ref('SetTimes/Minutes').set(parseInt(input));
    console.log(input);
  }

  function sendBuzzer(){
    let input = document.getElementById('buzzer').value;
    firebase.database().ref('Buzzer').set(parseInt(input));
    console.log(input);
  }


  function setAll(){
    let checkBoxLamp  = document.getElementById('checkBoxLamp');
    database.ref('Lamps/lamp1').on('value',(snap)=>{
      var data = snap.val();
      if(data == "ON"){
        checkBoxLamp.checked = true;
      }else{
        checkBoxLamp.checked = false;
      }
    });
    
    let checkBoxDisplay  = document.getElementById('checkBoxDisplay');
    database.ref('DisplayDate').on('value',(snap)=>{
      var data = snap.val();
      if(data == "ON"){
        checkBoxDisplay.checked = true;
      }else{
        checkBoxDisplay.checked = false;
      }
    });
    
    let inputMessage = document.getElementById('message');
    database.ref('Message').on('value',(snap)=>{
      inputMessage.value = snap.val()
    });
    
    let inputHours = document.getElementById('hours');
    database.ref('SetTimes/Hours').on('value',(snap)=>{
      inputHours.value = snap.val()
    });
    
    let inputMinutes = document.getElementById('minutes');
    database.ref('SetTimes/Minutes').on('value',(snap)=>{
      inputMinutes.value = snap.val()
    });

    let inputBuzzer = document.getElementById('buzzer');
    database.ref('Buzzer').on('value',(snap)=>{
      inputBuzzer.value = snap.val()
    });
  }

  function sendAll() {
    controlLamp();
    displayDate();
    sendMessage();
    sendHours();
    sendMinutes();
    sendBuzzer();
  }