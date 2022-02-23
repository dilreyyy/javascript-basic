//get access to html elements
let txtInput = document.body.querySelector("input");
txtInput.maxLength = 30;
console.dir(txtInput);
let countLength = document.body.querySelector("span");
// console.dir(txtInput);

//listen to input string
txtInput.addEventListener('input', validateInput);

function validateInput(event){
    let inputLength = event.target.value.length;
    countLength.textContent = txtInput.maxLength - inputLength;

    if(countLength.textContent <= 10 && countLength.textContent != 0){
        txtInput.classList.add("warning");
        countLength.classList.add("warning");
        txtInput.classList.remove("error");
        countLength.classList.remove("error");
    }else if(countLength.textContent == 0){
        txtInput.classList.add("error");
        countLength.classList.add("error");
        txtInput.classList.remove("warning");
        countLength.classList.remove("warning");
    }else{
        txtInput.classList.remove("warning");
        countLength.classList.remove("warning");
        txtInput.classList.remove("error");
        countLength.classList.remove("error");
    }
    
}