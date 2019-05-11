// class Car {
//     constructor() {
//         console.log("Car is in speed");
//     }

// }
// class Suzuki extends Car {
//     constructor(abc){
//         super()
//         this.abc = abc
//         console.log(abc)
        
//     }
// }
// class Cultus extends Suzuki {
//     constructor(model,color){
//         super("Suzuki")
//         this.model = model
//         this.color = color
//     }
// }
// const newCar = new Cultus(2010,"red");
// console.log(newCar);


// const sum = function(a,b,c){
//     var sum = a+b;
//     c(sum);
// }
// sum(1,2,(sumValue)=>{
//     setTimeout(()=>{
//         console.log("The sum is "+sumValue)
//     },2000)
// })

// var iftarParty = new Promise((resolve,reject)=>{
//     var randNum = Math.ceil(Math.random() * 2)
//     setTimeout(()=>{
//         if (randNum === 1){
//             resolve()
//         }
//         else{
//             reject("Something went wrong bro")
//         }
//     },0000)
// })

// iftarParty
//     .then(()=>{
//         var username = prompt("Enter yo name nigg","Wayne")
//         return `Brofist nigg ${username}`
//     })
//     .catch((err)=>{
//         console.error(err)
//     })
//     .then((returned)=>{
//         console.log(returned)
//     })

// var fruitsArr = ['yasir','Maaz','salman']

// var a = fruitsArr.map((fruits,index)=>{
//     console.log(fruits, index)
//     return `${fruits} is delicious `
// })
// console.log(a)


// sigup,login,resetPassword,send data to database



function createUser(){
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value

   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then(()=>{
       console.log('user created')
   })
   
   .catch(function(error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}


function loginUser(){
  var email = document.getElementById('email1').value;
   var password = document.getElementById('password1').value

   firebase.auth().signInWithEmailAndPassword(email, password)
   .then(()=>{
       window.location = './home.html'
   })
   
   .catch(function(error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}


function resetPassword(){

  var email= prompt("Enter your email you want to reset ")
  var auth = firebase.auth();
  var emailAddress = email ;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
   console.log('email sent')
  }).catch(function(error) {
    console.log('error')
  });
}

var db = firebase.firestore();


db.collection("users").add({
  first: "yasir",
  last: "wahid",
  born: 22/12/97
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});