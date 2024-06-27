// js/fotos.js

let currentImageIndex;
let images;

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }

    var imageModal = document.getElementById('imageModal');
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}

function showImageModal(imageElement, index) {
    images = imageElement.parentElement.getElementsByTagName('img');
    currentImageIndex = index;
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('imageModalContent');
    modal.style.display = "block";
    modalImg.src = images[currentImageIndex].src;
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    var modalImg = document.getElementById('imageModalContent');
    modalImg.src = images[currentImageIndex].src;
}
