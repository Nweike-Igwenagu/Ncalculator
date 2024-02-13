const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }

    catch{
        display.value = "Syntax Error"
    }

}


function del(){
    display.value = display.value.toString().slice(0,-1)
}