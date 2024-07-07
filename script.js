
let inputText = document.querySelector(".input");
let clear = document.getElementById("clear")
let equal = document.getElementById("equal")
let del = document.querySelector("#del");
let string = "";
function apendToDisplay(input){
    string += input;
    inputText.value = string;
}
clear.addEventListener('click',function(){
    string = ""
    inputText.value = string;
})
equal.addEventListener('click',function(){
    try{
        string = eval(string)
        inputText.value = string;
    }
    catch(error){
        inputText.value = "Error";
    } 
})
function Delete(){
    string = string.substring(0,string.length-1);
    inputText.value = string;
}


