
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  
import { initializeApp } from 'firebase/app';

$.getScript('https://www.gstatic.com/firebasejs/3.2.1/firebase.js', function () {

    /**
     * initialize
     * @type {{apiKey: string, authDomain: string, databaseURL: string, storageBucket: string}}
     */


    const firebaseConfig = {
        apiKey: "AIzaSyBkMC1VSn6dNCTcYk6jsnDyYv4MVCY4AX8",
        authDomain: "to-do-app-e691f.firebaseapp.com",
        projectId: "to-do-app-e691f",
        storageBucket: "to-do-app-e691f.appspot.com",
        messagingSenderId: "1007999147036",
        appId: "1:1007999147036:web:29c87a991f6f63606d53d9",
        measurementId: "G-8MHCPYYW7F"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    firebase.auth.Auth.Persistance.LOCAL;


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    //Add event listner on login button
    $("#submit-btn").click(function(){
        let email = $("#email").val();
        let password = $("#password").val();

        if(email != "" && password != ""){
            let results = firebase.auth().signInWithEmailAndPassword(email, password);

            results.catch(function(error){
                let errorCode = error.code;
                let errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                alert("Message: " + errorMessage);
            });
        }
        else{
            alert("Hey, fill out all the fields.")
        }
    })
})


    