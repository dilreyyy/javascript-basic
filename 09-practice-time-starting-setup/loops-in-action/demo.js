//get access to html elements
const userNumber = document.getElementById("user-number");
const calCulatedSum = document.getElementById("calculated-sum");
const btnCalculateSum = document.querySelector("#calculator button");
// console.dir(userNumber);
// calCulatedSum.textContent = "a";
// console.dir(calCulatedSum);
// console.log(btnCalculateSum);
function getSum(){
    let sum = 0;
    for ( let num = userNumber.value; num > 0; num--){
        sum += Number(num);
    }
    // console.log(sum);
    calCulatedSum.textContent = sum;
    calCulatedSum.style = "display: block";
}

btnCalculateSum.addEventListener('click', getSum);

