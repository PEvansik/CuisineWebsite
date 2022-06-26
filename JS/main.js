

let hamburg = document.getElementById('hamburger')
let menu = document.getElementById('menu')
let navList = document.getElementById('nav-list').children
console.log(navList)

hamburg.addEventListener('click', () => {
    hamburg.classList.toggle('active')
    menu.classList.toggle('active')
})

Array.from(navList).forEach( item  => {
    item.addEventListener('click', () => {
        hamburg.classList.remove('active')
        menu.classList.remove('active')

    })
})



// SECTION THREE
let carousel = document.getElementById('carousel');
let foodHolder =  document.getElementsByClassName('images');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

let sortBtn = document.getElementsByClassName('mealbtn')
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

sortBtn[0].classList.add('mealbtn-active')

for(let i = 0; i < sortBtn.length; i++) {

    sortBtn[i].addEventListener('click', function(e) {
        let targetData = sortBtn[i].getAttribute("data-target")

        for (sortB of sortBtn) {
            sortB.classList.remove('mealbtn-active')
        }
        sortBtn[i].classList.add('mealbtn-active')


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

let testimonial = document.getElementById('testimon').children
let dots = document.getElementById('dots')
let tl = testimonial.length

console.log(testimonial)

for (let i = 0; i < tl; i++) {

    let lis = document.createElement('li')
    lis.classList.add('dotli')
    dots.append(lis)
    let list = dots.children

    list[0].classList.add('dotli-active')

    list[i].addEventListener('click', function(e) {

        for (item of list) {
            item.classList.remove('dotli-active')
         }

        e.target.classList.add('dotli-active')

        for (test of testimonial) {
            test.classList.remove('detail-show')
            test.classList.add('detail-hidden')
        }
    
        testimonial[i].classList.add('detail-show')

        console.log(testimonial[i])
    
    })
}


// FOOTER
let t = new Date().getFullYear();
let timeLine = document.querySelector('.timeline')
timeLine.textContent = t;
