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
                <i id="sun" class="fa-solid fa-sun text-sm text-yellow-500 dark:hidden"></i>
                <i class="fa-solid fa-moon text-sm hidden text-slate-700 dark:block dark:text-slate-800"></i>
              </div>
            </div>
          </label>
        </div>
        <img src="public/images/logo1.svg" alt="logo" class="lg:w-[185px] dark:hidden w-[35%]" />
        <img src="public/images/logo2.svg" alt="logo" class="hidden lg:w-[185px] dark:block w-[35%]" />
        <div id="toggle" class="cursor-pointer w-[35%] ">
          <i id="bar" class="fa-solid fa-bars block lg:hidden dark:text-white animate-rotatetr w-2/4"></i>
          <i id="mark" class="fa-solid fa-xmark hidden lg:hidden dark:text-white animate-rotatetl w-2/4"></i>
        </div>
      </div>
      <nav>
        <ul id="nav" class="hidden items-center space-y-[10px] border-t-2 mt-6 pt-6 dark:text-yellow-400 lg:flex lg:space-x-[55px] lg:space-y-0 lg:border-0 lg:pt-0 lg:mt-0 pl-4 lg:pl-0 lg:animate-none animate-left">
          <li class="text-blues-100">
            <a href="/">${Navigasi[0]}</a>
          </li>
          <li>
            <a href="#about">${Navigasi[1]}</a>
          </li>
          <li>
            <a href="#project">${Navigasi[2]}</a>
          </li>
          <li>
            <a href="#contact">${Navigasi[3]}</a>
          </li>
          <li class="mx-8 flex items-center ">
            <div class="flex items-center hidden md:block">
              <input type="checkbox" class="hidden" id="lamp-toggle" onclick="lampToggle()" />
              <label for="lamp-toggle">
                <div class="my-[5px] mx-2 flex h-8 w-16 cursor-pointer items-center  rounded-full bg-gradient-to-r from-blues-300 to-blues-400 px-1">
                  <div class="toggle-circle flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-t from-blues-100 to-blues-200 transition duration-300 ease-in-out">
                    <i id="sun" class="fa-solid fa-sun text-md text-yellow-500 dark:hidden"></i>
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


let bar = document.getElementById("bar");
let mark = document.getElementById("mark");
let nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("navbar-active");
  bar.classList.toggle("bar-active");
  mark.classList.toggle("mark-active");
});
