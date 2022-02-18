// click listener
let txtChangeMe = document.body.firstElementChild;
// console.dir(txtChangeMe);

//add function to execute
function funcChangeText(){
    txtChangeMe.textContent = "Changed!";
    console.log("clicked");
}
//add listener
txtChangeMe.addEventListener('click',funcChangeText);

//get access to input
let inputText = document.querySelector('input');
// console.dir(inputText);
//get access to span to output characters typed
let spanText = document.querySelector('span');
let charactersTyped = 0;

function logKey(){
    charactersTyped++;
    spanText.innerHTML = charactersTyped;
    
    if(charactersTyped == 20){
        inputText.setAttribute("maxlength","20");
    }
}
//add listener
inputText.addEventListener('keypress', logKey);
// inputText.addEventListener();
