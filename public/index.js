const navbar = document.querySelector(".navbar")
// Funktio jolla lisätään navbariin tausta
const innerTitles = document.querySelectorAll('.title-inner')
const titleWrapper = document.querySelector('.title-wrapper')
const innerTitleContainer = document.querySelector('.title-inner-container')
const sliders = document.querySelectorAll('.slider')
const ttop = document.querySelector(".ttop")
const tbtm = document.querySelector(".tbtm")

const headerScrollAnimation = () => {
    if (window.pageYOffset > 70) {
        navbar.classList.add('transparent')
        // innerTitles.forEach(x=>x.classList.add('shrink-title'))
        // titleWrapper.classList.add('opacity-title')
        
        // for (const slider of sliders) {
        //     slider.classList.add('slide-out')
        //     }

        // innerTitles.forEach(x=>x.classList.add('shrink-title'))
        // for (const slider of sliders) {
        //     slider.classList.add('slide-out')
        //     }
    }
    else {
        navbar.classList.remove("transparent")
    }
}
window.addEventListener("scroll", headerScrollAnimation)


// Nappi joka vie sivun alkuun
const topFunction = () => {
    document.body.scrollTop = 0 //Safari
    document.documentElement.scrollTop = 0 //Chrome, Firefox, IE and Opera
  }

const toTopButton = document.querySelector(".to-top-button")
toTopButton.addEventListener('click', topFunction)


// Funktio jolla näytetään sivun alkuun vievä nappi
const scrollFunction = () => {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        toTopButton.style.display = "flex"
    } else {
        toTopButton.style.display = "none"
    }
}
window.addEventListener("scroll", scrollFunction)


// title-container observer
// const observer = new IntersectionObserver(entries => {
    
//     entries.forEach(entry => {
//         const title = entry.target.querySelector('.title-wrapper')
        
//         if (entry.isIntersecting ) { // && window.pageYOffset > 70) {
//             console.log("näkyy")
//             // innerTitles.forEach(x=>x.classList.add('shrink-title'))
//             innerTitles.forEach(x=>x.classList.add('shrink-title'))
//             titleWrapper.classList.add('slide-out')
//           return
//         }
        

//       }  ,{ threshold: 0 })
//   })
//   observer.observe(document.querySelector('.title-container'))
