const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
}

handleResize();
window.addEventListener("resize", handleResize);

const dialog = document.createElement("dialog");
dialog.classList.add("image-viewer");
document.body.appendChild(dialog);

function handleImageClick(event) {
    const clickedImage = event.target.closest("img");
    if(!clickedImage) return;

    const srcParts = clickedImage.src.split("-");
    const fullImageSrc = srcParts[0].replace("-sm", "") + "-full.jpeg";

    dialog.innerHTML = `<img src="${fullImageSrc}" alt="${clickedImage.alt}">
        <button class='close-viewer'>X</button>`;

    dialog.showModal();
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", handleImageClick);

dialog.addEventListener("click", (event) =>{
    if (event.target.classList.contains("close-viewer") || event.target === dialog) {
        dialog.close();
    }
 });