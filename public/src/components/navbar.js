let header = document.getElementById("navbar");

const Navbar = () => {
  let Navigasi = ["Home", "About", "Project", "Contact"];
  return `
  <div id="fixed" class="lg:flex w-full lg:justify-between lg:px-[120px] py-[15px] lg:items-center shadow-sm fixed px-4 z-[999999]">
  <div class="flex justify-between items-center text-3xl">
    <img src="images/logo.png" alt="logo" class="w-[185px]" />
    <div id="toggle" class="cursor-pointer">
      <i id="bar" class="fa-solid fa-bars lg:hidden block"></i>
      <i id="mark" class="fa-solid fa-xmark lg:hidden hidden"></i>
    </div>
  </div>
  <nav>
    <ul id="nav"
      class="lg:flex lg:space-x-[55px] lg:space-y-0 space-y-[10px] hidden border-t-2 lg:border-0 pt-6 lg:pt-0 items-center dark:text-yellow-400">
      <li class="text-blues-100"><a href="/">${Navigasi[0]}</a></li>
      <li><a href="#about">${Navigasi[1]}</a></li>
      <li><a href="#project">${Navigasi[2]}</a></li>
      <li><a href="#contact">${Navigasi[3]}</a></li>
      <li class="mx-8 flex items-center">
       <div class="flex items-center">
            
            <input type="checkbox" class="hidden" id="lamp-toggle" onclick="lampToggle()" />
            <label for="lamp-toggle">
            <div class="my-[5px] mx-2 flex h-8 w-20 cursor-pointer items-center  rounded-full bg-gradient-to-r from-blues-300 to-blues-400 px-1">
            <div class="toggle-circle h-6 w-6 rounded-full bg-gradient-to-t from-blues-100 to-blues-200 transition duration-300 ease-in-out flex items-center justify-center">
            <i id="sun" class="fa-solid fa-sun text-md text-yellow-500 dark:hidden"></i>
            <i class="fa-solid fa-moon text-md text-slate-700 dark:text-yellow-500 hidden dark:block"></i>
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

let toggle = document.getElementById("toggle");
let bar = document.getElementById("bar");
let mark = document.getElementById("mark");
let nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("navbar-active");
  bar.classList.toggle("bar-active");
  mark.classList.toggle("mark-active");
});
