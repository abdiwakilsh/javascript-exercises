function changeImage() {
    const image = document.querySelector("#image");

    const url = prompt("Enter image URL:");
    const borderColor = prompt("Enter border color:");
    const width = prompt("Enter image width (px):");
    const height = prompt("Enter image height (px):");
    const borderRadius = prompt("Enter border radius (px):");

    image.src = url;
    image.style.border = "2px solid " + borderColor;
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.borderRadius = borderRadius + "px";
    image.style.padding = "10px";
    image.style.backgroundColor = "#cfc2dc";
}