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

/* =========================
   IMAGE GALLERY MODAL
========================= */

const images = document.querySelectorAll(".achievement-img");

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

const closeBtn = document.querySelector(".close");

/* ZOOM SCALE */

let scale = 1;

/* OPEN IMAGE */

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;

        scale = 1;

        modalImg.style.transform = `scale(${scale})`;

        document.body.style.overflow = "hidden";

    });

});

/* CLOSE MODAL */

function closeModal(){

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}

/* CLOSE BUTTON */

closeBtn.addEventListener("click", closeModal);

/* CLICK OUTSIDE IMAGE */

modal.addEventListener("click", e => {

    if(e.target === modal){

        closeModal();

    }

});

/* ESC CLOSE */

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        closeModal();

    }

});

/* =========================
   ZOOM WITH MOUSE WHEEL
========================= */

modalImg.addEventListener("wheel", e => {

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.15;

    } else {

        scale -= 0.15;

    }

    scale = Math.min(Math.max(1, scale), 5);

    modalImg.style.transform = `scale(${scale})`;

});

/* =========================
   DOUBLE CLICK ZOOM
========================= */

modalImg.addEventListener("dblclick", () => {

    if(scale === 1){

        scale = 2;

    } else {

        scale = 1;

    }

    modalImg.style.transform = `scale(${scale})`;

});

/* =========================
   PREVENT IMAGE DRAG
========================= */

modalImg.addEventListener("dragstart", e => {

    e.preventDefault();

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
