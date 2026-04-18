async function signup(){

let email=
document.getElementById("email").value;

let password=
document.getElementById("password").value;

const res=await fetch(
"http://localhost:5000/signup",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

});

const data=await res.json();

document.getElementById(
"message"
).innerText=data.message;

}