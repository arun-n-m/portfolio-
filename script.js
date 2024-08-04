// ==============message==============//


const scriptURL = 'https://script.google.com/macros/s/AKfycbx8ZlOgQolbWhxUmouzc_DTmmFoUfjAEa4UFerpQMbNvYIUdJ0aEokTmTQrCNU8IkKMuA/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Send Successfully"

            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// ==============navbar responsive==============//
var sidemenu = document.getElementById("sidemenu")

function openMenu() {
    sidemenu.style.right = "0"
}
function closeMenu() {
    sidemenu.style.right = "-200px"
}




// ==============navbar onclick==============//
// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('#header .container nav ul li a')

// console.log("sections,navlinkssssssssssssssssss",sections, navLinks );

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop - 150
//         let height = sec.offsetHeight
//         let id = sec.getAttribute('id')

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach.apply(links => {
//                 links.classList.remove('active')
//                 document.querySelector('#header .container nav ul li a[href*=' + id + ']').classList.add('active')
//             })
//         }

//     })
// }











// ==============scroll reavel cdn==============//

// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200,

// });

// ScrollReveal({
//     distance:'50px',
//     duration: 2000,
//     delay:200,

// });

// ScrollReveal().reveal('.home-content', { origin:'top'});cmplt
// ScrollReveal().reveal('.skills-content,.project-list,.row,.social-mediat', {origin:'right' });
// ScrollReveal().reveal('.sub-title,.heading', { origin:'top' });cmplt

