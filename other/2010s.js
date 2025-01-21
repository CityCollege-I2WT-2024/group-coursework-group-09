// Creating the variables

const clickableImage1 = document.getElementById("stio");
const overlay1 = document.getElementById("overlay1");
const firstImage1 = document.getElementById("stit");
const secondImage1 = document.getElementById("stith");

const clickableImage2 = document.getElementById("hio");
const overlay2 = document.getElementById("overlay2");
const firstImage2 = document.getElementById("hit");
const secondImage2 = document.getElementById("hith");

const clickableImage3 = document.getElementById("skio");
const overlay3 = document.getElementById("overlay3");
const firstImage3 = document.getElementById("skit");
const secondImage3 = document.getElementById("skith");

const clickableImage4 = document.getElementById("snio");
const overlay4 = document.getElementById("overlay4");
const firstImage4 = document.getElementById("snit");
const secondImage4 = document.getElementById("snith");

const clickableImage5 = document.getElementById("pwith");
const overlay5 = document.getElementById("overlay5");
const firstImage5 = document.getElementById("pmio");
const secondImage5 = document.getElementById("pmit");
const thirdImage5 = document.getElementById("pwio");
const fourthImage5 = document.getElementById("pwit");

const clickableImage6 = document.getElementById("scio");
const overlay6 = document.getElementById("overlay6");
const firstImage6 = document.getElementById("scit");
const secondImage6 = document.getElementById("scith");

const clickableImage7 = document.getElementById("ebio");
const overlay7 = document.getElementById("overlay7");
const firstImage7 = document.getElementById("egi");
const secondImage7 = document.getElementById("ebit");

const clickableImage8 = document.getElementById("vscoio");
const overlay8 = document.getElementById("overlay8");
const firstImage8 = document.getElementById("vscoit");
const secondImage8 = document.getElementById("vscoith");

/////////////////////////////////////////////////////////// Image 1  //////////////////////////////////////////////////////////////

clickableImage1.addEventListener("click", function() {
    overlay1.style.display = (overlay1.style.display === "none" || overlay1.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        // Check if the image has a specific class that you want to show
        if (image.classList.contains(".steam")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none"; // Hide other images
        }
    });
});

overlay1.addEventListener("click", function() {
    overlay1.style.display = "none";
    
    // Hide all images when overlay is clicked
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 2  //////////////////////////////////////////////////////////////

clickableImage2.addEventListener("click", function() {
    overlay2.style.display = (overlay2.style.display === "none" || overlay2.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".hi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay2.addEventListener("click", function() {
    overlay2.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 3  //////////////////////////////////////////////////////////////

clickableImage3.addEventListener("click", function() {
    overlay3.style.display = (overlay3.style.display === "none" || overlay3.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".skate")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay3.addEventListener("click", function() {
    overlay3.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 4  //////////////////////////////////////////////////////////////

clickableImage4.addEventListener("click", function() {
    overlay4.style.display = (overlay4.style.display === "none" || overlay4.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".sneak")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay4.addEventListener("click", function() {
    overlay4.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 5  //////////////////////////////////////////////////////////////

clickableImage5.addEventListener("click", function() {
    overlay5.style.display = (overlay5.style.display === "none" || overlay5.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".pi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay5.addEventListener("click", function() {
    overlay5.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 6  //////////////////////////////////////////////////////////////

clickableImage6.addEventListener("click", function() {
    overlay6.style.display = (overlay6.style.display === "none" || overlay6.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".scene")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay6.addEventListener("click", function() {
    overlay6.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 7  //////////////////////////////////////////////////////////////

clickableImage7.addEventListener("click", function() {
    overlay7.style.display = (overlay7.style.display === "none" || overlay7.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".bi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay7.addEventListener("click", function() {
    overlay7.style.display = "none";
    
    images.forEach(image => {
        image.style.display = "none";
    });
});

/////////////////////////////////////////////////////////// Image 8 //////////////////////////////////////////////////////////////

clickableImage8.addEventListener("click", function() {
    overlay8.style.display = (overlay8.style.display === "none" || overlay8.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        // Check if the image has a specific class that you want to show
        if (image.classList.contains(".vsco")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none"; // Hide other images
        }
    });
});

overlay8.addEventListener("click", function() {
    overlay8.style.display = "none";
    
    // Hide all images when overlay is clicked
    images.forEach(image => {
        image.style.display = "none";
    });
});

//////////////////////////////////////////////////// Paulina's Code  /////////////////////////////////////////////////////////

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Toggle menu open and close
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    sideMenu.classList.toggle('open');
});

// Close the menu if clicking outside
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});