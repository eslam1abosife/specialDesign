let mainLocal = localStorage.getItem("color-item");

if (mainLocal !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-item")
  );

  document.querySelectorAll(".setting-container ul li").forEach((element) => {
    element.classList.remove("active");
    if (mainLocal === element.dataset.color) {
      element.classList.add("active");
    }
  });
}
let randomBackgroundOption = true;

let intervalBackground;

let randomSpan = document.querySelectorAll(".random-backgrounds span");

randomSpan.forEach((span) => {
  span.addEventListener("click", function (e) {
    handleActive(e);

    if (e.target.dataset.backgrounds === "yes") {
      randomBackgroundOption = true;
      randomBackground();
      localStorage.setItem("background-Option", true);
    } else {
      randomBackgroundOption = false;
      clearInterval(intervalBackground);
      localStorage.setItem("background-Option", false);
    }
  });
});

let localBackground = localStorage.getItem("background-Option");

if (localBackground !== null) {
  if (localBackground === "true") {
    randomBackgroundOption = true;
  } else {
    randomBackgroundOption = false;
  }
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (localBackground === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
let ULli = document.querySelectorAll(".setting-container ul li");
ULli.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-item", e.target.dataset.color);
    handleActive(e);
  });
});
let settingBox = document.querySelector(".setting-box ");
document.querySelector(".icon-container i").onclick = function () {
  this.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};
let special = document.querySelector(".special-design");
special.style.backgroundImage = 'url("img/01.jpg")';
let arrImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
function randomBackground() {
  if (randomBackgroundOption === true) {
    intervalBackground = setInterval(() => {
      let random = Math.floor(Math.random() * arrImg.length);
      special.style.backgroundImage = 'url("img/' + arrImg[random] + '")';
    }, 10000);
  }
}
randomBackground();
// select Skills Selector
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
  // skills offset top
  let skillsOffSetTop = ourSkills.offsetTop;
  // skills outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // window Height
  let windowHeight = this.innerHeight;
  // window scrollTop
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOffSetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skills-box .skill-progress span"
    );
    allSkills.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
let galleryImg = document.querySelectorAll(".gallary .images-box img");
let gallerySec = document.querySelector(".gallary");
galleryImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlayGallery
    let overlayGallery = document.createElement("div");
    overlayGallery.className = "over-lay";

    document.body.appendChild(overlayGallery);

    let popImges = document.createElement("div");
    popImges.className = "pop-imges";

    let popimg = document.createElement("img");
    popimg.className = "pop-img";
    popimg.src = img.src;

    if (img.alt !== null) {
      let myHeading = document.createElement("h3");

      let imgText = document.createTextNode(img.alt);

      myHeading.appendChild(imgText);

      popImges.appendChild(myHeading);
    }
    popImges.appendChild(popimg);

    document.body.appendChild(popImges);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("x");
    closeButton.appendChild(closeButtonText);
    closeButton.className = "close-button";
    popImges.appendChild(closeButton);

    document.addEventListener("click", function (e) {
      if (e.target.className === "close-button") {
        e.target.parentNode.remove();
        overlayGallery.remove();
      }
    });
  });
});

let navBul = document.querySelectorAll(".nav-bullets .bullet");
let linksA = document.querySelectorAll(".links a");
function scrollToSomewhere(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (ele) => {
      ele.preventDefault();
      document.querySelector(ele.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSomewhere(navBul);
scrollToSomewhere(linksA);
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }
    handleActive(e);
  });
});

document.querySelector(".reset-options").onclick = function () {
  localStorage.removeItem("color-item");
  localStorage.removeItem("background-Option");
  localStorage.removeItem("bullets_option");

  window.location.reload();
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // stop propagation
  e.stopPropagation();

  // Toggle Class "menu-active" on Button
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});

tLinks.onclick = function (e) {
  e.stopPropagation();
};
