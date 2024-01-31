let text=document.querySelector(".disp");
let btn= document.querySelectorAll(".btn");

let string="";
let arr =Array.from(btn);
arr.forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML =="="){
            string= eval(string);
            text.value=string;
        
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            text.value=string;
        }
        else if(e.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1);
            text.value=string;
        }
        else{
        string += e.target.innerHTML;
        text.value= string;
        }
    })
})