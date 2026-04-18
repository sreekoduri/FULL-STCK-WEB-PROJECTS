async function login(){

let email=
document.getElementById("username").value;

let password=
document.getElementById("password").value;

const res=await fetch(
"http://localhost:5000/login",
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

if(data.success){

window.location.href=
"dashboard.html";

}else{

document.getElementById(
"message"
).innerText=data.message;

}

}