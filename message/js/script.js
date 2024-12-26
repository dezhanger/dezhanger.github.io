// Image Array
var imageArray = [
    "./pic/pic1.jpg", 
    "./pic/pic2.jpg", 
    "./pic/pic3.jpg", 
    "./pic/pic4.jpg", 
    "./pic/pic5.jpg", 
    "./pic/pic6.jpg", 
    "./pic/pic7.jpg", 
    "./pic/pic8.jpg", 
    "./pic/pic9.jpg", 
    "./pic/pic10.jpg", 
    "./pic/pic11.jpg", 
    "./pic/pic12.jpg", 
    "./pic/pic13.jpg", 
    "./pic/pic14.jpg", 
    "./pic/pic15.jpg", 
    "./pic/pic16.jpg", 
    "./pic/pic17.jpg", 
    "./pic/pic18.jpg", 
    "./pic/pic19.jpg", 
    "./pic/pic20.jpg", 
    "./pic/pic21.jpg", 
    "./pic/pic22.jpg", 
    "./pic/pic23.jpg", 
    "./pic/pic24.jpg", 
    "./pic/pic25.jpg", 
    "./pic/pic26.jpg", 
    "./pic/pic27.jpg", 
    "./pic/pic28.jpg", 
    "./pic/pic29.jpg", 
    "./pic/pic30.jpg", 
    "./pic/pic31.jpg", 
    "./pic/pic32.jpg", 
    "./pic/pic33.jpg", 
    "./pic/pic34.jpg", 
    "./pic/pic35.jpg"
];

var currentImageIndex = 0;

// Open the Carousel
function openCarousel() {
    document.getElementById("carouselOverlay").style.display = "flex";
    updateCarouselImage();
}

// Close the Carousel
function closeCarousel() {
    document.getElementById("carouselOverlay").style.display = "none";
}

// Update the Carousel Image
function updateCarouselImage() {
    var imagePath = imageArray[currentImageIndex];
    document.getElementById("carouselImage").src = imagePath;
}

// Show Previous Image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    updateCarouselImage();
}

// Show Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    updateCarouselImage();
}
// Fade-in Animation for Heart Button
function fadeInHeart() {
    var heartTxt = document.getElementById("heartTxt");
    var opacity = 0;

    // Gradually increase opacity
    var fadeInterval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fadeInterval); // Stop fading when fully visible
        } else {
            opacity += 0.02; // Adjust fade-in speed here
            heartTxt.style.opacity = opacity;
        }
    }, 30); // Adjust interval timing here
}

// Trigger Heart Fade-In after the Middle Text
window.onload = function () {
    setTimeout(fadeInHeart, 10000); // Adjust the delay here (in milliseconds)
};
// Event Listener for Heart Button
document.getElementById("button").addEventListener("click", openCarousel);
