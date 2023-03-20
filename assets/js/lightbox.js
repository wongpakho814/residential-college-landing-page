const imageSrc = [
  "./assets/images/gallery_img1.jpg",
  "./assets/images/gallery_img2.jpg",
  "./assets/images/gallery_img3.jpg",
  "./assets/images/gallery_img4.jpg",
  "./assets/images/gallery_img5.jpg",
  "./assets/images/gallery_img6.jpg",
  "./assets/images/gallery_img7.jpg",
  "./assets/images/gallery_img8.jpg",
];

const imageAlt = [
  "Caption for gallery image 1",
  "Caption for gallery image 2",
  "Caption for gallery image 3",
  "Caption for gallery image 4",
  "Caption for gallery image 5",
  "Caption for gallery image 6",
  "Caption for gallery image 7",
  "Caption for gallery image 8",
];

/* Inserting image columns to the section with class "row" */
const row = document.querySelector(".row");
for (let i = 0; i < imageSrc.length; i++) {
    const img = document.createElement("img");
    img.src = imageSrc[i];
    img.className += ("column hover-shadow cursor default-img");
    img.addEventListener("click", () => {
        openModal();
        currentSlide(i + 1, "lightbox");
    });
    img.alt = imageAlt[i];
    row.appendChild(img);
}

/* Inserting lightbox slides to modal content */
const modalContent = document.querySelector(".modal-content");

/* Adding the actual lightbox slides */ 
for (let i = 0; i < imageSrc.length; i++) {
  const lightBoxSlide = document.createElement("div");
  lightBoxSlide.classList.add("lightBoxSlides");

  const img = document.createElement("img");
  img.src = imageSrc[i];
  img.alt = imageAlt[i];
  lightBoxSlide.appendChild(img);

  modalContent.appendChild(lightBoxSlide);
}

/* Adding the lightbox prev button */
const lightBoxPrev = document.createElement("a");
lightBoxPrev.classList.add("lightbox-prev");
lightBoxPrev.addEventListener("click", () => {
  plusSlides(-1, "lightbox");
});
lightBoxPrev.innerHTML = "&#10094;";
modalContent.appendChild(lightBoxPrev);

/* Adding the lightbox next button */
const lightBoxNext = document.createElement("a");
lightBoxNext.classList.add("lightbox-next");
lightBoxNext.addEventListener("click", () => {
  plusSlides(1, "lightbox");
});
lightBoxNext.innerHTML = "&#10095;";
modalContent.appendChild(lightBoxNext);

/* Adding the lightbox slide captions */
const captionDiv = document.createElement("div");
captionDiv.classList.add("caption-container");

const captionP = document.createElement("p");
captionP.id = "caption";
captionDiv.appendChild(captionP);
modalContent.appendChild(captionDiv);

/* Adding the lightbox slide previews */
const columnContainerDiv = document.createElement("div");
columnContainerDiv.classList.add("column-container");
for (let i = 0; i < imageSrc.length; i++) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("column");

  const img = document.createElement("img");
  img.className += "demo cursor";
  img.src = imageSrc[i];
  img.addEventListener("click", () => {
    currentSlide(i + 1, "lightbox");
  });
  img.alt = imageAlt[i];

  columnDiv.appendChild(img);
  columnContainerDiv.appendChild(columnDiv);
}
modalContent.appendChild(columnContainerDiv);