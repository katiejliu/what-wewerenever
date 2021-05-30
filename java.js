// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBr5GgO4QBP9liJWRB-QFW9TyuVFY7b3Hk",
  authDomain: "proj3-fbaa3.firebaseapp.com",
  projectId: "proj3-fbaa3",
  storageBucket: "proj3-fbaa3.appspot.com",
  messagingSenderId: "213978746353",
  appId: "1:213978746353:web:b4c0bde611d001e9468850"
};


// Initialize Firebase

// https://www.youtube.com/watch?v=vepxnKUecFs

firebase.initializeApp(firebaseConfig);

function FormSubmission(){
  var today = new Date();
  
  var myDBConn = firebase.database().ref();
  
  var LetterBranch = myDBConn.child("Letters");
  
  var letter = document.getElementById("UserData");
  
  LetterBranch.push({Letter: letter.value});

  letter.value="";
}


// var myLetters=[];

// var myConn=firebase.database().ref("Letters");

// myConn.on("child_added", function(data, prevChildKey){
//   var dataPoint=data.val();
  
//   myLetters.push(dataPoint.Letters);
  
//   document.getElementId("submitted").innerHTML=myLetters(myLetters.length-1);
                                   
                                  
                                   
                                   
                                   
//                                    });
                                   


//   var ref = database.ref('Letters');
//   ref.on('value', gotData, errData);

// function gotData(data) {
  
  
//   var letterlistings= selectAll('.letterlisting')
//   for(var i=0; i<letterlistings.length; i++);
//   letterlistings[i].remove();
// }
    
    
//   console.log(data.val());
//   var Letters = data.val();
//   var keys = Object.keys(Letters);
//   console.log(keys);
//   for (var i=0; i < keys.length; i++){
//     var k= keys[i]:
//     var letter = Letter[k];
//     var li=createElement('li', letter);
//     li.class('letterlisting');
//     li.parent('letterlist');
//   }
  
// }

// function errData(err){
//   console.log('Error!');
//   console.log(err);
// }