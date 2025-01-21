// Creating the variables

const clickableImage1 = document.getElementById("stio");
const overlay1 = document.getElementById("overlay1");
const firstImage1 = document.getElementById("stit");

const clickableImage2 = document.getElementById("ci");
const overlay2 = document.getElementById("overlay2");
const firstImage2 = document.getElementById("pi");

const clickableImage3 = document.getElementById("spio");
const overlay3 = document.getElementById("overlay3");
const firstImage3 = document.getElementById("spit");
const secondImage3 = document.getElementById("spith");

const clickableImage4 = document.getElementById("nio");
const overlay4 = document.getElementById("overlay4");
const firstImage4 = document.getElementById("nit");

const clickableImage5 = document.getElementById("qio");
const overlay5 = document.getElementById("overlay5");
const firstImage5 = document.getElementById("qit");

const clickableImage6 = document.getElementById("mio");
const overlay6 = document.getElementById("overlay6");
const firstImage6 = document.getElementById("mit");
const secondImage6 = document.getElementById("mith");

const clickableImage7 = document.getElementById("fio");
const overlay7 = document.getElementById("overlay7");
const firstImage7 = document.getElementById("fit");
const secondImage7 = document.getElementById("fith");

const clickableImage8 = document.getElementById("bio");
const overlay8 = document.getElementById("overlay8");
const firstImage8 = document.getElementById("bit");
const secondImage8 = document.getElementById("bith");

/////////////////////////////////////////////////////////// Image 1  //////////////////////////////////////////////////////////////

clickableImage1.addEventListener("click", function() {
    overlay1.style.display = (overlay1.style.display === "none" || overlay1.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        // Check if the image has a specific class that you want to show
        if (image.classList.contains(".si")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none"; // Hide other images
        }
    });
});

// Add functionality to close the overlay when clicked
overlay1.addEventListener("click", function() {
    overlay1.style.display = "none"; // Hide overlay
});

/////////////////////////////////////////////////////////// Image 2  //////////////////////////////////////////////////////////////

clickableImage2.addEventListener("click", function() {
    overlay2.style.display = (overlay2.style.display === "none" || overlay2.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".pi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay2.addEventListener("click", function() {
    overlay2.style.display = "none";
});

/////////////////////////////////////////////////////////// Image 3  //////////////////////////////////////////////////////////////

clickableImage3.addEventListener("click", function() {
    overlay3.style.display = (overlay3.style.display === "none" || overlay3.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".spi")) {
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
        if (image.classList.contains(".ni")) {
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
        if (image.classList.contains(".qi")) {
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
        if (image.classList.contains(".maxi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay6.addEventListener("click", function() {
    overlay6.style.display = "none";
});

/////////////////////////////////////////////////////////// Image 7  //////////////////////////////////////////////////////////////

clickableImage7.addEventListener("click", function() {
    overlay7.style.display = (overlay7.style.display === "none" || overlay7.style.display === "") ? "block" : "none";
    
    images.forEach(image => {
        if (image.classList.contains(".fi")) {
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
        if (image.classList.contains(".bowi")) {
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        } 
        else {
            image.style.display = "none";
        }
    });
});

overlay8.addEventListener("click", function() {
    overlay8.style.display = "none";
    
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