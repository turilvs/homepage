// Funktio jolla lisätään navbariin tausta
const addNavbarBg = () => {
    if (window.pageYOffset > 70) {
        document.querySelector("#navbar").classList.add('transparent')
        document.querySelectorAll('.title-inner').forEach(x=>x.classList.add('shrink-title'))
        document.querySelector('.title-wrapper').classList.add('opacity-title')
        document.querySelector(".ttop").classList.add('slide-out')
        document.querySelector(".tbtm").classList.add('slide-out')
    }
    else {
        document.querySelector("#navbar").classList.remove("transparent")   
    }
}
window.addEventListener("scroll", headerScrollAnimation)

// Nappi joka vie sivun alkuun
const toTopButton = document.querySelector(".to-top-button")
toTopButton.addEventListener('click', topFunction)

const toTopActivationPoint = document.querySelector("#main").getBoundingClientRect()


// Funktio jolla näytetään sivun alkuun vievä nappi
function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        toTopButton.style.display = "flex"
    } else {
        toTopButton.style.display = "none"
    }
}
window.addEventListener("scroll", scrollFunction)


// Funktio joka vie sivun alkuun
function topFunction() {
  document.body.scrollTop = 0 //Safari
  document.documentElement.scrollTop = 0 //Chrome, Firefox, IE and Opera
}

// title-container observer
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const title = entry.target.querySelector('.title-wrapper')
//         const ttop = entry.target.querySelector('.ttop')
//         const tbtm = entry.target.querySelector('.tbtm')
    
//         if (entry.isIntersecting) {
//           title.classList.add('shrink-inner')
//           ttop.classList.add('slide-title')
//           tbtm.classList.add('slide-title')
          
//           return // if we added the class, exit the function
//         }
    
//         // We're not intersecting, so remove the class!
//         // title.classList.remove('shrink-inner')
//       })
//   })
//   observer.observe(document.querySelector('.title-container'))
