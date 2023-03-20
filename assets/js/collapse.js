var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display == "block") {
      content.classList.remove("fadeIn");
      content.classList.add("fadeOut");
      /* Add animation to when closing the collapsible */
      const timeOut = setTimeout(() => { content.style.display = "none"; }, 300);
    } else {
      content.style.display = "block";
      content.classList.remove("fadeOut");
      content.classList.add("fadeIn");
    }
  });
}