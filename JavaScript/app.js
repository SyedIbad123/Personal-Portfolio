
// Navbar-fixed-position

const navbar = document.querySelector(".navbar");
const content = document.querySelector("main");
let prevScrollPos = window.pageYOffset;

const bodyHeight8Percent = document.body.scrollHeight * 0.08;

// Initially show the navbar
navbar.style.top = "0";

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        if (currentScrollPos >= bodyHeight8Percent) {
            // Scrolling beyond 8%
            navbar.style.top = "0";
        } else {
            // Scrolling within the first 8%
            navbar.style.top = `-${navbar.offsetHeight}px`;
        }
    } else {
        // Scrolling up
        if (currentScrollPos === 0) {
            // At the top of the page, show the navbar
            navbar.style.top = "0";
        } else {
            // Scrolling up but not at the very top, hide the navbar
            navbar.style.top = `-${navbar.offsetHeight}px`;
        }
    }

    prevScrollPos = currentScrollPos;
});


//  up-arrow-animation

const upArrow = document.querySelector(".up-arrow");

upArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Scroll to top and then apply the animation
    setTimeout(() => {
        upArrow.style.animation = "up-animate1 2s ease";
    }, 1000);
});

const up = document.querySelector(".up-arrow");

up.style.display = "none";

function handleIntersection1(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            up.style.display = "block";
            observer.disconnect();
        } else {
            up.style.display = "none";
        }
    });
}

// Create an observer that will watch for the footer section
const footerObserver1 = new IntersectionObserver(handleIntersection1, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this threshold as needed
});

// Start observing the footer
footerObserver1.observe(document.querySelector('.Contact'));


// project-section img-overlay animation


const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.card-title').style.transition = 'top 2s ease, visibility 0s 0s';
    card.querySelector('.card-link').style.transition = 'top 2.2s ease, visibility 0s 0s';
    card.querySelector('.card-text').style.transition = 'top 2.4s ease, visibility 0s 0s';

    card.querySelector('.card-img-overlay').style.transition = 'top 1s ease, visibility 0s 0s';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.card-title').style.transition = 'top 0.9s ease, visibility 0s 3s';
    card.querySelector('.card-link').style.transition = 'top 0.7s ease, visibility 0s 3s';
    card.querySelector('.card-text').style.transition = 'top 0.4s ease, visibility 0s 3s';
    card.querySelector('.card-img-overlay').style.transition = 'top 0.7s ease, visibility 0s 3s';
  });
});


// projects section-animation


const front = document.querySelector(".Front");
const frontEnd = document.querySelectorAll(".frontend");
const all = document.querySelector(".All");
const container = document.querySelector(".projects");
const backend = document.querySelector(".backend");
const back = document.querySelector(".back");

function clearContainer() {

  while (container.firstChild) {

    container.removeChild(container.firstChild);

  }
}

all.addEventListener("click", () => {

  clearContainer();

  front.style.color = "white";
  all.style.color = "orange";
  back.style.color = "white";


  frontEnd.forEach((element) => {

    element.style.display = "block";
    element.classList.remove("animate-frontend");
    element.classList.add("animate-frontend2");
    container.appendChild(element);
  });

  backend.style.display = "block";
  backend.classList.remove("animate");
  backend.classList.add("animate-frontend2");
  container.appendChild(backend);

});

front.addEventListener("click", () => {

  clearContainer();
  front.style.color = "orange";
  all.style.color = "white";
  back.style.color = "white";



  frontEnd.forEach((element) => {
    element.style.display = "block";
    element.classList.remove("animate-frontend");
    element.classList.add("animate-frontend2");
    container.appendChild(element);

  });

  backend.style.display = "none";

});

back.addEventListener("click", () => {


  clearContainer();

  frontEnd.forEach((element) => {

    element.classList.remove("animate-frontend2");
    element.classList.add("animate-frontend");
  });


  backend.style.display = "block";
  // back.style.color = "orange";
  front.style.color = "white";
  all.style.color = "white";
  back.style.color = "orange";
  backend.classList.remove("animate-frontend2");
  backend.classList.add("animate");
  container.appendChild(backend);
});
  

// input borders 
  
const inputBorder = document.querySelectorAll("input");
const textAreaBorder = document.querySelector("textarea")

inputBorder.forEach((input) => {
  input.addEventListener("click",() => {
    input.style.border = "1px solid orange";
    input.style.transition = "border 0.5s ease";
  });
});

inputBorder.forEach((input) => {
  input.addEventListener("mouseleave",() => {
    input.style.border = " 1px solid rgba(255, 255, 255, 0.103)";
    input.style.transition = "border 0.5s ease";
  });
});

textAreaBorder.addEventListener("click",() => {
  textAreaBorder.style.border = "1px solid orange";
  textAreaBorder.style.transition = "border 0.5s ease";
});

textAreaBorder.addEventListener("mouseleave",() => {
  textAreaBorder.style.border = " 1px solid rgba(255, 255, 255, 0.103)";
  textAreaBorder.style.transition = "border 0.5s ease";
});


// footer name animation

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {

          document.querySelector('.name3').classList.add('animate1');
          document.querySelector('.name4').classList.add('animate2');
          document.querySelector('.name5').classList.add('animate3');
          
          observer.disconnect();
      }
  });
}

// Create an observer that will watch for the footer section
const footerObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust this threshold as needed
});

// Start observing the footer
footerObserver.observe(document.querySelector('.footer'));



// Loader 

// Wait for the page to load
window.addEventListener("load", function () {
  // Show the loader
  document.getElementById("loader-container").style.display = "block";

  // Set a timeout to hide the loader after 2 seconds
  setTimeout(function () {
      document.getElementById("loader-container").style.display = "none";
  }, 1200);
});


// Pdf-downloader

const downloadButton = document.getElementById("downloadPdfButton");

// Define the PDF file URL
const pdfUrl = "images\\SyedIbadAli(Resume) .pdf";

// Add a click event listener to the button
downloadButton.addEventListener("click", function () {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SyedIbad_Reume.pdf"; // Rename the downloaded file if needed
    link.target = "_blank"; // Open in a new tab if supported

    // Trigger a click event on the link to start the download
    link.click();
});