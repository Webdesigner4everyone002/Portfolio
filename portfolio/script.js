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
/* =========================
   IMAGE MODAL VIEWER
========================= */

const images = document.querySelectorAll(".achievement-img");

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

const closeBtn = document.querySelector(".close");

/* OPEN MODAL */

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;

    });

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

/* CLICK OUTSIDE IMAGE */

modal.addEventListener("click", e => {

    if(e.target !== modalImg){

        modal.style.display = "none";

    }

});

/* ESC KEY CLOSE */

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        modal.style.display = "none";

    }

});
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
