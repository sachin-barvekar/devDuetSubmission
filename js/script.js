let bar=document.getElementById("bar");

bar.addEventListener("click",()=>{
    bar.classList.toggle("show");
     if(bar.style.display==="block"){
        bar.style.display==="none";
     }else{
        bar.style.display==="block";
     }

     console.log("clicked");
     
});