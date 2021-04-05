/*var firebaseConfig = {
    apiKey: "AIzaSyAMzoYTxnJXPEvRtXjbDENh1kl0fJXQURM",
    authDomain: "underdawg-95fe5.firebaseapp.com",
    databaseURL: "https://underdawg-95fe5-default-rtdb.firebaseio.com/image",
    projectId: "underdawg-95fe5",
    storageBucket: "gs://underdawg-95fe5.appspot.com/UnderDogSBofficial.png",
    messagingSenderId: "226313866925",
    appId: "1:226313866925:web:9ba0aabd91b3768f8a4024",
    measurementId: "G-WM2W961NFV"
  };
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var tangRef = storageRef.child('image/UnderDog.png');

// First we sign in the user anonymously
firebase.auth().signInAnonymously().then(function() {
    // Once the sign in completed, we get the download URL of the image
    tangRef.getDownloadURL().then(function(url)                             {
      // Once we have the download URL, we set it to our img element
      document.querySelector('img').src = url;
      
    }).catch(function(error) {
      // If anything goes wrong while getting the download URL, log the error
      console.error(error);
    });
  }); */