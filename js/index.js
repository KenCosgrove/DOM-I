const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const topHeading = document.querySelector("h1");
const button = document.querySelector("button");
const mainPic = document.querySelector("#cta-img");
const contact = document.querySelector(".contact h4");
const address = document.querySelector(".contact p");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");
const footer = document.querySelector("footer");
const features = document.querySelector(".top-content .text-content h4");
const about = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
const featuresP = document.querySelector(".top-content .text-content p");
const aboutP = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);
const services = document.querySelector(".bottom-content .text-content h4");
const product = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
const vision = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
const servicesP = document.querySelector(".bottom-content .text-content p");
const productP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
const visionP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
const secondPic = document.getElementById("middle-img");
const navBar = document.querySelector("nav a");

topHeading.textContent = "Dom Is Awesome!";
button.textContent = "Get Started";
mainPic.setAttribute("src", siteContent["cta"]["img-src"]);
contact.textContent = "Contact";
address.textContent = "123 Way 456 Street Somewhere, USA";
phone.textContent = "1 (888) 888-8888";
email.textContent = "sales@greatidea.io";
footer.textContent = "Copyright Great Idea! 2018";
features.textContent = "Features";
about.textContent = "about";
featuresP.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
aboutP.textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
services.textContent = "services";
product.textContent = "product";
vision.textContent = "vision";
servicesP.textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
productP.textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
visionP.textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
secondPic.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
navBar.textContent = "hello, home";
