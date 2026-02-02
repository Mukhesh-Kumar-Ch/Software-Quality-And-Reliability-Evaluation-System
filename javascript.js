const dragndrop = document.getElementById("dragndrop");
const addFileButton = document.getElementById("AddFileButton");
const fileInput = document.getElementById("fileInput");
const dropText = document.getElementById("dropText");

/* Open file dialog on button click */
addFileButton.addEventListener("click", () => {
    fileInput.click();
});

/* Handle file selection (common handler) */
function handleFile(file) {
    dropText.textContent = "Selected file: " + file.name;
    console.log(file); // You can upload or process it here
    addFileButton.textContent = "Change File";
}

/* File selected via dialog */
fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
    }
});

/* Drag events */
dragndrop.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragndrop.classList.add("dragover");
});

dragndrop.addEventListener("dragleave", () => {
    dragndrop.classList.remove("dragover");
});

dragndrop.addEventListener("drop", (e) => {
    e.preventDefault();
    dragndrop.classList.remove("dragover");

    const file = e.dataTransfer.files[0];
    if (file) {
        handleFile(file);
    }
});
