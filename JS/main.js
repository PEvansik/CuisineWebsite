//get elements in the same category e.g breakfast

//create a varibale to track count (a countup and a countdown to track the element on display)
//the element on display will the value on the active DOM it could also be the first in the stack
//
//when you click previous,
    //check the index of the present item on the active DOM  (for mobile) to ensure it is not the first element
    //check the index of the element in the first and last container of the stack (desktop and tablet)
    //decrement the tracker such that the item in the active stack is 
    //if the current element is the first element, return

//when you click next,
    //check the index of the present item on the active DOM (for mobile) to ensure it is not the first element
    //check the index of the element in the first and last container of the stack (desktop and tablet)
    //increment the tracker such that the item in the active stack is
    //if the current element is the last element, return


let mealButtons = document.querySelectorAll(".food-time")
let imageContainers =document.querySelectorAll("image-container")

mealButtons.forEach(button => {
    button.addEventListener('click', (e) => {

    })
})