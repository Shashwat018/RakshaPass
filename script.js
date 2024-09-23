document.getElementById("output").onclick= function(){

const num = parseInt(document.getElementById("number").value);
let inclower = document.getElementById("lowerCase").checked;
let incupper = document.getElementById("upperCase").checked;
let incnum = document.getElementById("includeNumber").checked;
let incchar = document.getElementById("character").checked;

//character pool

const lo = "qwertyuioplkjhgfdsazxcvbnm";
const uo = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const no = '123456789';
const co = "!@#$%^&*()_+{}'<>.,/?";
let charpool = ''

if(inclower ) charpool+= lo;
if(incupper) charpool+= uo;
if(incnum) charpool+= no;
if(incchar  ) charpool+= co;

if(charpool===0){
    alert("al least selct one character type");
    return; 
}
let password = "";
for(let i=1; i<=num; i++)
 {
    let rndm = Math.floor(Math.random()* charpool.length);
    password+=charpool[rndm];
 }


 document.getElementById("result").textContent = password;
}