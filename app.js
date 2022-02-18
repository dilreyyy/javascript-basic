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
    if(countLength.textContent == 10){
        txtInput.style.backgroundColor = "red";
    }else{
        txtInput.style.backgroundColor = "rgb(52, 136, 136);";
    }
    
}