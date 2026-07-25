function addItem() {
    let li = document.createElement("li");
    li.textContent = "New Item";

    document.getElementById("myList").appendChild(li);
}

function removeItem() {
    let list = document.getElementById("myList");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
     if (!list.lastElementChild) {
            alert("All items have been removed!");
        }
}