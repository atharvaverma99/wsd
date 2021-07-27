var firebaseConfig = {
    apiKey: "AIzaSyBPmn5fi5p8mr45lwI_8KjTEiqB3SvEsoc",
    authDomain: "mkol-e54be.firebaseapp.com",
    databaseURL: "https://mkol-e54be-default-rtdb.firebaseio.com",
    projectId: "mkol-e54be",
    storageBucket: "mkol-e54be.appspot.com",
    messagingSenderId: "374614121492",
    appId: "1:374614121492:web:238f12c563b4fcb2ea9b01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  
  function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row =
            "<div class='room_name' id=" +
            Room_names +
            " onclick='redirectToRoomName(this.id)' >#" +
            Room_names +
            "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
  }
  
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
  }
  