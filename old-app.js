// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
// let varFirstChild = document.body.children[0];
// console.log(varFirstChild);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
// console.log(varFirstChild.parentElement);
// console.log(varFirstChild.parentElement.children[1]);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// let newvarFirstChild = document.getElementById("first-child");
// console.log(varFirstChild);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
// let varSecondP = document.querySelector("#second-p");
// console.log(varSecondP);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
// varSecondP.innerHTML = `<span style='font-size: 600px;
//                                      color: red;'>awsdf</span>`;
//EZZZZ


//did not note prior topics coz already knowledeable about variable and functions

//create methods in js
//-functions in an object

// let person = {
//     name: "Del",
//     age: 23,
//     greet(){
//         console.log("Hello");
//     }
// }

// person.greet();



// PRACTICE MOVE ELEMENT
//get access to the element
let h1Element = document.getElementById("first-child");
console.dir(h1Element);
//remove
// h1Element.remove();
//getparent
h1Element.parentElement.insertBefore(document.getElementById("sample"),h1Element);

//create new element using JS
let newElement = document.createElement('span');
newElement.textContent = "this is new element created using js";
h1Element.parentElement.append(newElement);