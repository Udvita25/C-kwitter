
var firebaseConfig = {
      apiKey: "AIzaSyB8Dd3Im1HqWxXJj8SZUEYcD9dY3CbNDT8",
      authDomain: "kwitter-33f4a.firebaseapp.com",
      databaseURL: "https://kwitter-33f4a-default-rtdb.firebaseio.com",
      projectId: "kwitter-33f4a",
      storageBucket: "kwitter-33f4a.appspot.com",
      messagingSenderId: "815513703954",
      appId: "1:815513703954:web:8fc9eb77028fd2c4edeacb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
    function addroom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_room.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";


}
function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}
