function generate(){  
var pin=document.getElementById('displaypin').innerHTML=Math.floor(Math.random()*899998+100000);
 document.getElementById('redirect').textContent="Redirecting in 5 secs...."
 setTimeout(()=>{
 window.location="validate.html"
},5000);
 localStorage.setItem("one",pin);
}
function play(){
var getPin=localStorage.getItem("one");
 var k=[...getPin];
 var p=document.getElementById("getnumber").value;
 var comparepin=[...p];
 var ccount=0;
 for(var i=0;i<k.length; i++){
  for(var j=0;j<p.length; j++){
   if(k[i]===p[j]){
     p[j]=null;
       ccount++;
       break;
}
}
} 
 if(ccount=== k.length){
   document.getElementById("winningtext").innerText=`you done it `
 }
 else{
  document.getElementById("winningtext").innerText=` ohhhh... you did  ${ccount} write`
 }
}
function resume()
{
  window.location="validate.html";
}








