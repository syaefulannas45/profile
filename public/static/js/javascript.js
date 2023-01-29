//Animte On Scroll

// Navbar-Section
let bar = document.getElementById("bar");
let mark = document.getElementById("mark");
function setToggle() {
  bar.classList.toggle("bar-active");
  mark.classList.toggle("mark-active");
}

window.onscroll = function () {
  const header = document.querySelector("#navbar");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//About-Section
const imagesAbout = [
  {
    url: "images/about/ex.svg",
  },
  {
    url: "images/about/nodejs.svg",
  },
  {
    url: "images/about/mongodb.svg",
  },
  {
    url: "images/about/jquery.svg",
  },
  {
    url: "images/about/mysql.svg",
  },
  {
    url: "images/about/php.svg",
  },
  {
    url: "images/about/js.svg",
  },
  {
    url: "images/about/css.svg",
  },
  {
    url: "images/about/html.svg",
  },
];

let getAboutLeft = document.getElementById("aboutleft");
function loopImageAbout(url) {
  const image = `
<div  class="bg-white w-[85px] h-[85px] rounded-full shadow-custom mt-[40px] flex justify-center items-center "><img src=${url} class="w-[45px] h-[45px]" /></div>
`;
  getAboutLeft.insertAdjacentHTML("afterbegin", image);
}

imagesAbout.forEach((image) => {
  loopImageAbout(image.url);
});

//Project-Section
const imagesProject = [
  {
    url: "images/project/img-6.svg",
    id: 6,
  },
  {
    url: "images/project/img-5.svg",
    id: 5,
  },
  {
    url: "images/project/img-4.svg",
    id: 4,
  },
  {
    url: "images/project/img-3.svg",
    id: 3,
  },
  {
    url: "images/project/img-2.svg",
    id: 2,
  },
  {
    url: "images/project/img-1.svg",
    id: 1,
  },
];

let getProjectImg = document.getElementById("images-project");

function loopImageProject(url, increment) {
  const image = `<div id=${increment} class="cursor-pointer before:hover:content-['See_More'] before:hover:absolute  before:hover:text-white before:hover:bg-green-200 before:hover:py-[10px] before:hover:px-[10px] before:hover:rounded-[10px]"><img src=${url} alt="img" class="w-[400px] h-[300px] my-[10px] " /></div>`;

  getProjectImg.insertAdjacentHTML("afterbegin", image);
}

imagesProject.forEach((image) => {
  loopImageProject(image.url, image.id);
  
});
getProjectImg.addEventListener("click", () => {
  const modal = `<div class="absolute">test</div>`;
  getProjectImg.insertAdjacentHTML("afterbegin", modal);
});