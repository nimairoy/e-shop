// const bars = document.getElementById("bars");
// const navbar = document.getElementById("navbar");

// if(bars){
//     bars.addEventListener("click", () => {
//         navbar.classList.add("active");
//     })
// }
const bars = document.getElementById('bars');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const navbar = document.getElementById('navbar');

if(bars){
    bars.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}
if(closeMobileMenu){
    closeMobileMenu.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}


// Product Details Slider

var mainImg = document.getElementById("mainImg");

function img1(){
    mainImg.src = "assets/img/products/f1.jpg";
}
function img2(){
    mainImg.src = "assets/img/products/f2.jpg";
}
function img3(){
    mainImg.src = "assets/img/products/f3.jpg";
}
function img4(){
    mainImg.src = "assets/img/products/f4.jpg";
}