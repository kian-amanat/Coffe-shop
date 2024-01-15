
const x = document.getElementById("list")

function numberDisplay(val){
    
    x.innerText += val

    return val
}

function equal(){

let content = x.innerText
let resault = eval(content)
x.innerText = resault
return resault

}

function clearSc(){
   x.innerText = ""
}    
    