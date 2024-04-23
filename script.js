// Header
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

//Gallery
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openImg(img) {
  fullImgBox.style.display = "flex";
  fullImg.src = img.src;
}

function closeImg() {
  fullImgBox.style.display = "none";
}