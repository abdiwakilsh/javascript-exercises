const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

// Change preview and add color to history
colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;

    colorPreview.style.backgroundColor = selectedColor;
    colorPreview.textContent = selectedColor;

    addColorToHistory(selectedColor);
});

// Add selected color to history
function addColorToHistory(color) {
    const li = document.createElement("li");
    li.textContent = color;
    li.style.color = color;

    colorHistory.appendChild(li);
}

// Clear color history
clearHistoryButton.addEventListener("click", function () {
    colorHistory.innerHTML = "";
});