// change header's opacity on scroll
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// for responsive design
const bars = document.querySelector(".bars-staggered");
const navbar = document.getElementById("navbar");
const closeIcon = document.querySelector(".close-icon");

bars.addEventListener("click", () => {
  navbar.style.display = "block";
  closeIcon.style.display = "block";
  bars.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  navbar.style.display = "none";
  closeIcon.style.display = "none";
  bars.style.display = "block";
});


// Slide show
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const bullets = document.querySelectorAll(".bullet");

let showSlide = (index) => {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 100;
    } else {
      slide.style.opacity = 0;
    }
  });
  bullets.forEach((bullet, i) => {
    // change bullet color on transition
    bullet.style.color = i === currentSlide ? "#E8E6E6" : "#FFF";
  });
};

let nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

let prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};

let currentSlideF = (index) => showSlide(index - 1);

showSlide(currentSlide);
setInterval(nextSlide, 3500);


// Get all dropdowns
let dropdowns = document.querySelectorAll(".select-menu");

// Add click event listener to each dropdown
dropdowns.forEach((dropdown) => {
  let button = dropdown.querySelector(".select-btn");
  let answer = dropdown.querySelector(".answer");
  let arrowDown = dropdown.querySelector(".arrow-down");
  let arrowsDown = dropdown.querySelectorAll(".arrow-down");

  button.addEventListener("click", () => {
    // Hide all other dropdowns and remove active class from all other arrow
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.querySelector(".answer").classList.remove("active");
        otherDropdown.querySelector(".arrow-down").classList.remove("active");
      }
    });

    // Toggle the dropdown content
    answer.classList.toggle("active");

    // rotate arrow
    arrowDown.classList.toggle("active");
  });
});
