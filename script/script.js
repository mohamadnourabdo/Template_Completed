// Start Nav
let InnerUl1Id = document.getElementById("InnerUl1");
let InnerUl1Class = document.querySelector(".InnerUl1");
let InnerUl2Id = document.getElementById("InnerUl2");
let InnerUl2Class = document.querySelector(".InnerUl2");
let logoPage = document.querySelector(".navbar .container img");
let Boolean1 = true;
let Boolean2 = true;
let buttonbars = document.querySelector(".button-bars");
let contentLink = document.querySelector(".navbar .container .content");
let Boolean3 = true;
let navbar = document.getElementById("navbar");
logoPage.addEventListener("click", function () {
  window.location.href = "index.html";
});
InnerUl1Id.addEventListener("click", function () {
  if (Boolean1 === true && Boolean2 === true) {
    InnerUl1Class.style.cssText = `
        display: block;
    `;
    Boolean1 = false;
  } else if (Boolean1 === true && Boolean2 === false) {
    InnerUl2Class.style.cssText = `
        display: none;
    `;
    InnerUl1Class.style.cssText = `
        display: block;
    `;
    Boolean1 = false;
    Boolean2 = true;
  } else if (Boolean1 === false && Boolean2 === true) {
    InnerUl1Class.style.cssText = `
        display: none;
    `;
    Boolean1 = true;
  }
});
InnerUl2Id.addEventListener("click", function () {
  if (Boolean2 === true && Boolean1 === true) {
    InnerUl2Class.style.cssText = `
        display: block;
    `;
    Boolean2 = false;
  } else if (Boolean2 === true && Boolean1 === false) {
    InnerUl1Class.style.cssText = `
        display: none;
    `;
    InnerUl2Class.style.cssText = `
        display: block;
    `;
    Boolean2 = false;
    Boolean1 = true;
  } else if (Boolean2 === false && Boolean1 === true) {
    InnerUl2Class.style.cssText = `
        display: none;
    `;
    Boolean2 = true;
  }
});
buttonbars.addEventListener("click", function () {
  if (Boolean3) {
    contentLink.style.cssText = `
        right: 0;
    `;
    buttonbars.children[0].style.cssText = `
        transform: rotateZ(90deg);
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -ms-transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        `;
    Boolean3 = false;
  } else {
    contentLink.style.cssText = `
        right: -100%;
    `;
    buttonbars.children[0].style.cssText = `
        transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        -moz-transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -o-transform: rotateZ(0deg);
        `;
    Boolean3 = true;
  }
});
document.addEventListener("scroll", () => {
  if (scrollY >= 800) {
    navbar.style.cssText = `
            background-color: #202020;
        `;
  } else {
    navbar.style.cssText = `
            background-color: transparent;
        `;
  }
});
// End Nav

// Start Header
let header = document.getElementById("header");
header.addEventListener("click", function () {});

document.addEventListener("click", function (e) {
  if (
    !(
      e.target.classList.contains("InnerUl1") ||
      e.target.classList.contains("InnerUl2") ||
      e.target.id === "InnerUl1" ||
      e.target.id === "InnerUl2"
    )
  ) {
    InnerUl1Class.style.cssText = `
        display: none;
    `;
    InnerUl2Class.style.cssText = `
        display: none;
    `;
    Boolean1 = true;
    Boolean2 = true;
  }
  if (
    !(
      e.target.classList.contains("ul-content") ||
      e.target.classList.contains("button-bars") ||
      e.target.id === "InnerUl1" ||
      e.target.id === "InnerUl2"
    )
  ) {
    contentLink.style.cssText = `
        right: -100%;
    `;
    buttonbars.children[0].style.cssText = `
        transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        -moz-transform: rotateZ(0deg);
        -ms-transform: rotateZ(0deg);
        -o-transform: rotateZ(0deg);
        `;
    Boolean3 = true;
  }
});
let left = document.querySelector(".left i");
let right = document.querySelector(".right i");
let ArrayImage = [
  "image/undraw_Speech_to_text_re_8mtf.png",
  "image/python-programming-language-programing-workflow-abstract-algorithm-concept-virtual-screen-200850656.jpg",
  "image/bnr-1.png",
];
let i = 1;
let img = document.getElementById("img1");
let before = document.querySelector("#before");
let center = document.querySelector("#center");
let after = document.querySelector("#after");
before.addEventListener("click", () => {
  img.setAttribute("src", ArrayImage[0]);
  i = 1;
});
center.addEventListener("click", () => {
  img.setAttribute("src", ArrayImage[1]);
  i = 2;
});
after.addEventListener("click", () => {
  img.setAttribute("src", ArrayImage[2]);
  i = 0;
});

let Boolean4 = true;
function Before() {
  if (Boolean4 === false) {
    if (i !== 2) {
      i++;
    } else {
      i = 0;
    }
    Boolean4 = true;
  }
  if (i < ArrayImage.length) {
    img.setAttribute("src", ArrayImage[i]);
    if (i === ArrayImage.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
}

function After() {
  if (Boolean4 === true) {
    if (i !== 0) {
      i--;
    } else {
      i = ArrayImage.length - 1;
    }
    Boolean4 = false;
  }
  if (i >= 0) {
    if (i === 0) {
      i = ArrayImage.length - 1;
    } else {
      i--;
    }
    img.setAttribute("src", ArrayImage[i]);
  }
}
right.addEventListener("click", () => {
  Before();
});
left.addEventListener("click", () => {
  After();
});

setInterval(() => {
  Before();
}, 3000);

// End Header

// Start Scroll And Button To Top
let buttonToTop = document.querySelector(".to-top");
document.addEventListener("scroll", () => {
  if (scrollY >= 600) {
    buttonToTop.style.cssText = `
            bottom: 20px;
        `;
  } else {
    buttonToTop.style.cssText = `
            bottom: -60px;
        `;
  }
});

buttonToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// End Scroll And Button To Top

// Start icon Language Programing
let iconList = document.querySelectorAll(".icon-list .icon");
let list = document.querySelector(".icon-list");
window.addEventListener("scroll", () => {
  if (scrollY >= 300) {
    list.style.cssText = `
        left: 0;
        `;
  } else {
    list.style.cssText = `
        left: -70px;
        `;
  }
  if (scrollY >= 1117 && scrollY < 2729) {
    iconList[0].children[0].style.cssText = `
            color: var(--MainColor);
        `;
  } else {
    iconList[0].children[0].style.cssText = `
            color: black;
        `;
  }
  if (scrollY >= 2729 && scrollY < 5386) {
    iconList[1].children[0].style.cssText = `
            color: var(--MainColor);
        `;
  } else {
    iconList[1].children[0].style.cssText = `
            color: black;
        `;
  }
  if (scrollY >= 5386 && scrollY < 7163) {
    iconList[2].children[0].style.cssText = `
            color: var(--MainColor);
        `;
  } else {
    iconList[2].children[0].style.cssText = `
            color: black;
        `;
  }
  if (scrollY >= 7163 && scrollY < 8863) {
    iconList[3].children[0].style.cssText = `
            color: var(--MainColor);
        `;
  } else {
    iconList[3].children[0].style.cssText = `
            color: black;
        `;
  }
  if (scrollY >= 8863) {
    iconList[4].children[0].style.cssText = `
            color: var(--MainColor);
        `;
  } else {
    iconList[4].children[0].style.cssText = `
            color: black;
        `;
  }
});

// End icon Language Programing
