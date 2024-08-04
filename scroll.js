// ==============scrollanimations==============//


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showw')
            entry.target.classList.add('home-show')
            entry.target.classList.add("head-animation-show")
            entry.target.classList.add("scrollreveal-right-show")
            return true;
        }
        else {
            entry.target.classList.remove('showw')
            entry.target.classList.remove('home-show')
            entry.target.classList.remove("head-animation-show")
            entry.target.classList.remove("scrollreveal-right-show")
            return false
        }
    });
});

window.onload = () => {
    let a = document.querySelectorAll(".hidden")
    let homeContent = document.querySelectorAll(".home-hidden")
    a.forEach((element) => {
        observer.observe(element)
    })
    homeContent.forEach((el) => {
        observer.observe(el)
    })

}

window.addEventListener('scroll', () => {
    let a = document.querySelectorAll(".hidden")
    let homeContent = document.querySelectorAll(".home-hidden")
    let headanimation=document.querySelectorAll(".head-animation")
    let content=document.querySelectorAll(".scrollreveal-right")
    console.log("scrollreveal-right",content);

    a.forEach((element) => {
        observer.observe(element)
    })
    homeContent.forEach((el) => {
        observer.observe(el)
    })
    headanimation.forEach((value)=>{
        observer.observe(value)
    })
    content.forEach((event)=>{
        observer.observe(event)
    })

})



