



// SECTION THREE
let carousel = document.getElementById('carousel');
let foodHolder =  document.getElementsByClassName('images');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let sortBtn = document.getElementById('meal-class').children
let meals = carousel.children

let totalPosition = foodHolder.length;
console.log(totalPosition)

prevButton.addEventListener('click', previous)
nextButton.addEventListener('click', next)

function previous() {
    carousel.prepend(foodHolder[totalPosition - 1])
}
function next() {
    carousel.append(foodHolder[0])
}

for(let i = 0; i < sortBtn.length; i++) {

    sortBtn[i].addEventListener('click', function() {
        let targetData = sortBtn[i].getAttribute("data-target")

        for(let j = 0; j < foodHolder.length; j++) {

            let targetItem = foodHolder[j].getAttribute("data-items")

            if(targetData == 'all' || targetData == targetItem) {
                foodHolder[j].classList.add('active')
                foodHolder[j].classList.remove('delete')
            }

            else {
                foodHolder[j].classList.remove('active')
                foodHolder[j].classList.add('delete')
            }

        }

    })  
}



// SECTION FIVE

let testimonial = document.getElementById('testimony').children
let dots = document.getElementById('dots')
let tl = testimonial.length




//create the dots
for (let i = 0; i < tl; i++) {
    let lis = document.createElement('li')
    lis.classList.add('dotli')
    dots.append(lis)
    let list = dots.children

    //  the first dot should be fault
    list[0].classList.add('dotli-active')

    // console.log(list)

    list[i].addEventListener('click', function(e) {

        for (item of list) {
            item.classList.remove('dotli-active')
         }
         
         list[i].classList.add('dotli-active')

    
        for (test of testimonial) {
            test.classList.remove('detail-show')
            test.classList.add('detail-hidden')
        }
    
        testimonial[i].classList.add('detail-show')

    
        console.log(testimonial[i])
    
    })




}
         
 






//             list[i].classList.remove('leave')



//perform action with the customers
//list[i].addEventListener('click', tlock)
//
//loop through the circles
//function glock() {
//    for (let i = 0; i < tl; i++) {
//      list[i].addEventListener('click', () => {
//          testimonial[i].classList.add('active')
//          
//          
//      })
//    }
//}
//item => {
//    testimo
// })
//











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


