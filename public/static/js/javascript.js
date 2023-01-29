// Navbar
let bar = document.getElementById("bar");
let mark = document.getElementById("mark");
function setToggle() {
  bar.classList.toggle("bar-active");
  mark.classList.toggle("mark-active");
}

//About
const getImage = [
  {
    image: "images/about/html.svg",
  },
  {
    image: "images/about/css.svg",
  },
  {
    image: "images/about/js.svg",
  },
  {
    image: "images/about/php.svg",
  },
  {
    image: "images/about/mysql.svg",
  },
  {
    image: "images/about/jquery.svg",
  },
  {
    image: "images/about/mongodb.svg",
  },
  {
    image: "images/about/nodejs.svg",
  },
  {
    image: "images/about/ex.svg",
  },
];
let getAboutLeft = document.getElementById("aboutleft");
const print = getImage.map((index) => {
  return `<div class="bg-white w-[85px] h-[85px] rounded-full shadow-custom mt-[40px] flex justify-center items-center"><img src=${index.image} class="w-[45px] h-[45px]" /></div>`;
});

getAboutLeft.insertAdjacentHTML("afterbegin", print);
