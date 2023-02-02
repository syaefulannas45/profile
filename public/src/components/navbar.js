let header = document.getElementById("navbar");

const Navbar = () => {
  let Navigasi = ["Home", "About", "Project", "Contact"];

  return `
  <div id="fixed" class="fixed z-[999999] w-full py-[15px] px-4 shadow-sm lg:flex lg:items-center lg:justify-between lg:px-[120px]">
      <div class="flex items-center text-3xl flex-row-reverse lg:flex-row w-full lg:justify-between justify-around">
        <div class="flex items-center lg:hidden w-[35%] justify-end ">
          <input type="checkbox" class="hidden" id="lamp-toggle-mobile" onclick="lampToggle()" />
          <label for="lamp-toggle-mobile">
            <div class="my-[5px] mx-2 flex h-8 w-16 cursor-pointer items-center  rounded-full bg-gradient-to-r from-blues-300 to-blues-400 px-1">
              <div class="toggle-circle-mobile flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-t from-blues-100 to-blues-200 transition duration-300 ease-in-out">
                <i id="sun" class="fa-solid fa-sun text-sm text-yellow-500 block dark:hidden"></i>
                <i class="fa-solid fa-moon text-sm hidden text-slate-700 dark:block dark:text-slate-800"></i>
              </div>
            </div>
          </label>
        </div>
        <img loading="lazy" src="public/images/logo1.svg" alt="logo" class="lg:w-[185px] block dark:hidden w-[35%]" />
        <img loading="lazy" src="public/images/logo2.svg" alt="logo" class="hidden lg:w-[185px] dark:block w-[35%]" />
        <div class="cursor-pointer w-[35%] flex">
          <button onclick="toggle()" id="toggle" name="toggle" class="block lg:hidden">
              <span class="my-2 block h-[2px] w-[30px] bg-slate-900 origin-top-left transition duration-300 ease-in-out dark:bg-white"></span>
              <span class="my-2 block h-[2px] w-[30px] bg-slate-900 transition duration-300 ease-in-out dark:bg-white"></span>
              <span class="my-2 block h-[2px] w-[30px] bg-slate-900 origin-bottom-left transition duration-300  ease-in-out dark:bg-white"></span>
            </button>
          </button>
        </div>
      </div>
      <nav>
        <ul id="nav" class="hidden items-center space-y-[10px] border-t-2 mt-6 pt-6 dark:text-slate-900 lg:flex lg:space-x-[55px] lg:space-y-0 lg:border-0 lg:pt-0 lg:mt-0 pl-4 lg:pl-0 lg:animate-none animate-left bg-background-500 rounded-lg lg:bg-transparent dark:lg:text-slate-100">
          <li id="nav-home">
            <a href="#hero">${Navigasi[0]}</a>
          </li>
          <li id="nav-about">
            <a href="#about">${Navigasi[1]}</a>
          </li>
          <li id="nav-project">
            <a href="#project">${Navigasi[2]}</a>
          </li>
          <li id="nav-contact">
            <a href="#contact">${Navigasi[3]}</a>
          </li>
          <li class="mx-8 flex items-center ">
            <div class="flex items-center hidden md:block">
              <input type="checkbox" class="hidden" id="lamp-toggle" onclick="lampToggle()" />
              <label for="lamp-toggle">
                <div class="my-[5px] mx-2 flex h-8 w-16 cursor-pointer items-center  rounded-full bg-gradient-to-r from-blues-300 to-blues-400 px-1">
                  <div class="toggle-circle flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-t from-blues-100 to-blues-200 transition duration-300 ease-in-out">
                    <i class="fa-solid fa-sun text-md text-yellow-500 block dark:hidden"></i>
                    <i class="fa-solid fa-moon text-md hidden text-slate-700 dark:block dark:text-slate-800"></i>
                  </div>
                </div>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </div>`;
};

header.insertAdjacentHTML("afterbegin", Navbar());

function toggle() {
  const navMenu = document.querySelector("#nav");
  const toggle = document.querySelector("#toggle");
  toggle.classList.toggle("toggle-active");
  navMenu.classList.toggle("hidden");
}

let navHome = document.getElementById("nav-home");
let navAbout = document.getElementById("nav-about");
let navProject = document.getElementById("nav-project");
let navContact = document.getElementById("nav-contact");

navHome.addEventListener("click", () => {
  navHome.classList.add("text-blues-100");
  navHome.classList.add("font-bold");
  if (navHome.click || navProject.click || navContact.click) {
    navAbout.classList.remove("text-blues-100");
    navAbout.classList.remove("font-bold");
    navProject.classList.remove("text-blues-100");
    navProject.classList.remove("font-bold");
    navContact.classList.remove("text-blues-100");
    navContact.classList.remove("font-bold");
  }
});
navAbout.addEventListener("click", () => {
  navAbout.classList.add("text-blues-100");
  navAbout.classList.add("font-bold");
  if (navAbout.click || navProject.click || navContact.click) {
    navHome.classList.remove("text-blues-100");
    navHome.classList.remove("font-bold");
    navProject.classList.remove("text-blues-100");
    navProject.classList.remove("font-bold");
    navContact.classList.remove("text-blues-100");
    navContact.classList.remove("font-bold");
  }
});
navProject.addEventListener("click", () => {
  navProject.classList.add("text-blues-100");
  navProject.classList.add("font-bold");
  if (navProject.click || navProject.click || navContact.click) {
    navHome.classList.remove("text-blues-100");
    navHome.classList.remove("font-bold");
    navAbout.classList.remove("text-blues-100");
    navAbout.classList.remove("font-bold");
    navContact.classList.remove("text-blues-100");
    navContact.classList.remove("font-bold");
  }
});
navContact.addEventListener("click", () => {
  navContact.classList.add("text-blues-100");
  navContact.classList.add("font-bold");
  if (navContact.click || navProject.click || navContact.click) {
    navHome.classList.remove("text-blues-100");
    navHome.classList.remove("font-bold");
    navAbout.classList.remove("text-blues-100");
    navAbout.classList.remove("font-bold");
    navProject.classList.remove("text-blues-100");
    navProject.classList.remove("font-bold");
  }
});
