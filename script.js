var btn=document.querySelector("#btn");
var text=document.querySelector(".profile")

var flag=0;
btn.addEventListener("click",function(){
    if(flag===0){
        text.style.display="none";
        flag=1;
    }
    else if(flag===1){
        text.style.display="";
        flag=0;  
    }
})