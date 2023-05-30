// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpUW-OYQ73dQdkZCj8GlJ2k_PXaRyCiqA",
    authDomain: "webtechcrud.firebaseapp.com",
    databaseURL: "https://webtechcrud-default-rtdb.firebaseio.com",
    projectId: "webtechcrud",
    storageBucket: "webtechcrud.appspot.com",
    messagingSenderId: "547793620974",
    appId: "1:547793620974:web:4ff88b7854e955b68108ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var nickname = document.getElementById('nickname').value
    var password = document.getElementById('password').value
    var course = document.getElementById('course').value
    var uok = document.getElementById('uok').value
    var epitaph = document.getElementById('epitaph').value
  
    database.ref('users/' + nickname).set({
      nickname : nickname,
      password : password,
      course : course,
      uok : uok,
      epitaph : epitaph
    })
  
    alert('Saved')
  }
  
  function get() {
    var nickname = document.getElementById('nickname').value
  
    var user_ref = database.ref('users/' + nickname)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.nickname)
  
    })
  
  }
  
  function update() {
    var nickname = document.getElementById('nickname').value
    var password = document.getElementById('password').value
    var course = document.getElementById('course').value
    var uok = document.getElementById('uok').value
    var epitaph = document.getElementById('epitaph').value
  
    var updates = {
      nickname : nickname,
      password : password,
      course : course,
      uok : uok,
      epitaph : epitaph
    }
  
    database.ref('users/' + nickname).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var nickname = document.getElementById('nickname').value
  
    database.ref('users/' + nickname).remove()
  
    alert('deleted')
  }

  var table = document.getElementById('table');
  
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>Nickname</th><th>Password</th><th>Course</th><th>UOK</th><th>Epitaph</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.nickname + '</td><td>' + childData.password + '</td><td>' + childData.course + '</td><td>' + childData.uok + '</td><td>' + childData.epitaph + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();

  function displayTable() {
    window.location.href = "db.html";
  }