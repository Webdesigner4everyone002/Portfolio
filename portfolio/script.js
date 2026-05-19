/* =========================
   SMOOTH NAVIGATION
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

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

        /* RESET ANIMATION */

        modalImg.style.animation = "none";

        modalImg.offsetHeight; // reflow trigger

        modalImg.style.animation =
        "zoomIn 0.4s ease forwards";

    });

});

/* CLOSE MODAL */

function closeModal(){

    modal.style.display = "none";

}

/* CLOSE BUTTON */

closeBtn.addEventListener("click", closeModal);

/* CLICK OUTSIDE IMAGE */

modal.addEventListener("click", e => {

    if(e.target === modal){

        closeModal();

    }

});

/* ESC KEY CLOSE */

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        closeModal();

    }

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const cards = document.querySelectorAll(".achievement-card");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.2
    }

);

/* OBSERVE ALL CARDS */

cards.forEach(card => {

    observer.observe(card);

});

/* =========================
   OPTIONAL IMAGE HOVER GLOW
========================= */

images.forEach(image => {

    image.addEventListener("mousemove", e => {

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        image.style.transformOrigin =
        `${x}px ${y}px`;

    });

});

/* =========================
   PREVENT IMAGE DRAG
========================= */

images.forEach(image => {

    image.addEventListener("dragstart", e => {

        e.preventDefault();

    });

});
