import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
  import { getFirestore, setDoc, addDoc,doc, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8weZ1zwf5AKly19uIIlDX2HJjMl7pqsA",
    authDomain: "adarsha-secondary-school-e526d.firebaseapp.com",
    projectId: "adarsha-secondary-school-e526d",
    storageBucket: "adarsha-secondary-school-e526d.appspot.com",
    messagingSenderId: "134007763506",
    appId: "1:134007763506:web:5dc29472d2e6654b73422b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  
  var addStudent = document.querySelector('#submit').value
  var name = document.querySelector('#name').value
   var grade = document.querySelector('#grade').value
    var rollNo = document.querySelector('#Rollno').value
     var section = document.querySelector('#section').value
      var studentId = document.querySelector('#studentId').value



addStudent.addEventListener('click', function(){


 
import { doc, setDoc } from "firebase/firestore"; 


 addDoc(collection(db, "students"), {
  Name: name,
  Grade: grade,
  Roll No: rollNo,
  Section: section,
  Student Id: studentId,
}); 
 
 alert("added")
 
})