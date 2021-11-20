

var firebaseConfig = {
  apiKey: "AIzaSyBcoLEmmVsS6T1e3z1Z3_pqlmznrquJt_c",
  authDomain: "kwitter3-a179f.firebaseapp.com",
  databaseURL: "https://kwitter3-a179f-default-rtdb.firebaseio.com",
  projectId: "kwitter3-a179f",
  storageBucket: "kwitter3-a179f.appspot.com",
  messagingSenderId: "822009181360",
  appId: "1:822009181360:web:ffbeb45ba70c48b7853775",
  measurementId: "G-27HCHJHL05"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    
    
  
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room names"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room Name -"+room_name);
      row="<div class='room_names'id="+room_name+"onclick ='rediectToRoomName(this.id)>#"+room_name+"</div></hr>";
      document.getElementById("output").innerHTML+= row;
      

      //End code
      });});}
getData();
function rediectToRoomName(){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page_html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
