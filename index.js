const addNavbarBg = () => {
    if (window.pageYOffset > 100) {
        document.querySelector("#navbar").classList.add("transparent");
    }    
    else {
        document.querySelector("#navbar").classList.remove("transparent");
    }
}

window.addEventListener("scroll", addNavbarBg);