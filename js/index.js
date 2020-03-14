const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//ADD IMG SRC
const img = document.querySelector("#cta-img");
img.src = "../img/header-img.png";

// ADD NAV TEXT
const nav_link = document.querySelectorAll("a");
nav_link[0].innerHTML = siteContent.nav["nav-item-1"];
nav_link[1].innerHTML = siteContent.nav["nav-item-2"];
nav_link[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav_link[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav_link[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav_link[5].innerHTML = siteContent["nav"]["nav-item-6"];

//ADD H1 AND BUTTON CONTENT
const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];
h1.style.fontSize = "3.5rem";

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// ADD BODY H4
const top_text_h4 = document.querySelectorAll(".text-content h4");
top_text_h4[0].textContent = siteContent["main-content"]["features-h4"];
top_text_h4[1].textContent = siteContent["main-content"]["about-h4"];
top_text_h4[2].textContent = siteContent["main-content"]["services-h4"];
top_text_h4[3].textContent = siteContent["main-content"]["product-h4"];
top_text_h4[4].textContent = siteContent["main-content"]["vision-h4"];

//ADD BODY P
const top_text_p = document.querySelectorAll(".text-content p");
top_text_p[0].innerHTML = siteContent["main-content"]["features-content"];
top_text_p[1].innerHTML = siteContent["main-content"]["about-content"];
top_text_p[2].innerHTML = siteContent["main-content"]["services-content"];
top_text_p[3].innerHTML = siteContent["main-content"]["product-content"];
top_text_p[4].innerHTML = siteContent["main-content"]["vision-content"];

//ADD MIDDLE IMG
const middle_img = document.querySelector(".middle-img");
middle_img.src = siteContent["main-content"]["middle-img-src"];

//ADD CONTACT INFO
const contact_h4 = document.querySelector(".contact h4");
contact_h4.innerHTML = siteContent["contact"]["contact-h4"];

const contact_p = document.querySelectorAll(".contact p");
contact_p[0].textContent = siteContent["contact"]["address"];
contact_p[1].textContent = siteContent["contact"]["phone"];
contact_p[2].textContent = siteContent["contact"]["email"];

//ADD FOOTER
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

//CHANGE NAVIGATION TEXT COLOR

const navColor = document.querySelectorAll("header nav a");
navColor.forEach(navBar => {
  navBar.style.color = "green";
  navBar.style.textDecoration = "none";
  navBar.style.fontWeight = "bold";
});

// ADD NAV ITEM

//create a tag
const aTag = function(text, href) {
  const a = document.createElement("a");
  a.innerHTML = text;
  a.style.color = "green";
  a.style.fontWeight = "bold";
  a.style.textDecoration = "none";
  a.setAttribute("href", href);
  return a;
};
//append a tag to nav
const nav = document.querySelector("nav");
nav.appendChild(aTag("Rules", "#"));

//ADJUST ALL Ps FONT SIZE
const fontSize = document.querySelectorAll("p");
fontSize.forEach(font => {
  font.style.fontSize = ".8rem";
});

button.addEventListener("click", function() {
  let tagText = prompt("please enter tag text");
  nav.appendChild(aTag(tagText, "#"));
  let h1Text = prompt("Please enter a new h1 text");
  h1.innerHTML = h1Text;
});
