let header1 = document.querySelector('header')
window.addEventListener('scroll',(e)=>{
    let windowPosition = window.scrollY > 50
    header1.classList.toggle('colored-header',windowPosition)

})
let navbar = document.querySelector('.mobile-menu')
function  toggleNav(){
    navbar.classList.remove('d-none')
}   


function closeNav(){
   navbar.classList.add('d-none')
}