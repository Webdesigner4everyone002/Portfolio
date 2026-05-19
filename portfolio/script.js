const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
link.addEventListener("click", e => {

e.preventDefault();

document.querySelector(link.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})
})
const images = document.querySelectorAll(".achievement-img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(img=>{
img.addEventListener("click",()=>{
modal.style.display="block";
modalImg.src=img.src;
});
});

closeBtn.onclick=()=>{
modal.style.display="none";
}

modal.onclick=()=>{
modal.style.display="none";
}
/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const cards = document.querySelectorAll(".achievement-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {
    observer.observe(card);
});
