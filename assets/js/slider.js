// Code for the subheader slider/rotator
let slideIndex = 1;
showSlides(slideIndex, "hero");
showSlides(slideIndex, "lightbox");
showSlides(slideIndex, "singleBed");
showSlides(slideIndex, "doubleBed");
showSlides(slideIndex, "fourBed");

function plusSlides(n, type) {
  showSlides((slideIndex += n), type);
}

function currentSlide(n, type) {
  showSlides((slideIndex = n), type);
}

function showSlides(n, type) {
  let i, slides, dots, captionText;
  switch (type) {
    case "hero":
      slides = document.getElementsByClassName("heroSlides");
      dots = document.getElementsByClassName("dot");
      break;
    case "lightbox":
      slides = document.getElementsByClassName("lightBoxSlides");
      dots = document.getElementsByClassName("demo");
      captionText = document.getElementById("caption");
      break;
    case "singleBed":
      slides = document.getElementsByClassName("singleBedSlides");
      break;
    case "doubleBed":
      slides = document.getElementsByClassName("doubleBedSlides");
      break;
    case "fourBed":
      slides = document.getElementsByClassName("fourBedSlides");
      break;
    default:
      console.log(
        "Something went wrong in slider.js! Make sure you passed the correct variable names"
      );
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; dots && (i < dots.length); i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots) {
    dots[slideIndex - 1].className += " active";
  }
  if (captionText) {
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
}

function openModal() {
  document.getElementById("lightboxModal").style.display = "block";
}

function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
}

function validateForm() {
  if (document.forms["contact-form"]["fname"].value == "") {
    alert("First name must be filled out!");
    return false;
  }
  if (document.forms["contact-form"]["lname"].value == "") {
    alert("Last name must be filled out!");
    return false;
  }
  if (document.forms["contact-form"]["email"].value == "") {
    alert("Email must be filled out!");
    return false;
  }
  if (document.forms["contact-form"]["phone"].value == "") {
    alert("Phone number must be filled out!");
    return false;
  }
  return true;
}

const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (event) => {
  contactForm.style.top = "175px";
  contactForm.innerHTML = `<h1>${event.target.fname.value} thanks for contacting us, We'll reply as soon as possible!</h1>`;
  event.preventDefault();
});
