//Connects to Firebase DONT TOUCH
var firebaseConfig = {
        apiKey: "AIzaSyAMzoYTxnJXPEvRtXjbDENh1kl0fJXQURM",
        authDomain: "underdawg-95fe5.firebaseapp.com",
        databaseURL: "https://underdawg-95fe5-default-rtdb.firebaseio.com",
        projectId: "underdawg-95fe5",
        storageBucket: "underdawg-95fe5.appspot.com",
        messagingSenderId: "226313866925",
        appId: "1:226313866925:web:9ba0aabd91b3768f8a4024",
        measurementId: "G-WM2W961NFV"
      };
      // Initialize Firebase DONT TOUCH (Could Add Items if Needed)
      firebase.initializeApp(firebaseConfig);
      var storage = firebase.storage();

      var storage = firebase.storage();
      var storageRef = storage.ref();
      var tangRef = storageRef.child('images/UnderDogSBofficial.png');
      var imRef = storageRef.child('images/Underdogsb Iphone.png');
    // First we sign in the user anonymously
  
        // Once the sign in completed, we get the download URL of the image
        tangRef.getDownloadURL().then(function(url)                             {
          // Once we have the download URL, we set it to our img element
          document.getElementById('img1').src = url;
          
        }).catch(function(error) {
          // If anything goes wrong while getting the download URL, log the error
          console.error(error);
        });
      
        imRef.getDownloadURL().then(function(url)                             {
          // Once we have the download URL, we set it to our img element
          document.getElementById('img2').src = url;
          
        }).catch(function(error) {
          // If anything goes wrong while getting the download URL, log the error
          console.error(error);
        });

   

        //How the data will be stored in our database
        var messagesRef= firebase.database().ref('Waitlist');
        var signupForm = document.getElementById('signup-form');
        var signupSuccess = document.getElementById('signup-success');
        var signupError = document.getElementById('signup-error');
        var signupBtn = document.getElementById('signup-button');
        var onSignupComplete = function(error) {
          signupBtn.disabled = false;
          if (error) {
            signupError.innerHTML = 'Sorry. Could not signup.';
          } else {
            signupSuccess.innerHTML = "Thank you for signing up! We will reach out to you soon!"
            // hide the form
            signupForm.style.display = 'none';
          }
        };
        function signup(formObj) {
            // Store emails to firebase
            var myFirebaseRef = firebase.database().ref("Waitlist");
            myFirebaseRef.push({
              email: formObj.email.value,
            }, onSignupComplete);
            signupBtn.disabled = true;
            return false;
        }
       