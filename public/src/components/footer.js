let footer = document.getElementById("footer");

const Footer = () => {
  return `
     <div class="flex px-[120px] py-[35px] items-center dark:bg-background-300 dark:text-slate-100 w-full space-x-10">
          <div class="w-[25%]">
          <img src="public/images/logo.png"/>
          <p class="pl-6 text-[20px] text-slate-700 dark:text-slate-100">Seinjak sejejak setujuan</p>
          </div>
          <div class="w-[25%]">
          <h1 class="bg-gradient-to-t from-blues-300 to-blues-400 bg-clip-text text-transparent text-[30px] border-b-2">About Us</h1>
          <ul class="flex-col space-y-2 cursor-pointer pt-2">
          <li href="/">Web Design</li>
          <li href="/">App Design</li>
          <li href="/">Social Media Manage</li>
          <li href="/">Market Analysis Project</li>
          </ul>
          </div>
          <div class="w-[25%]">
          <h1 class="bg-gradient-to-t from-blues-300 to-blues-400 bg-clip-text text-transparent text-[30px] border-b-2">Project</h1>
          <ul class="flex-col space-y-2  cursor-pointer pt-2">
          <li href="/">Web E-Commerce</li>
          <li href="/">Web Portfolio</li>
          <li href="/">Web Company Profile</li>
          <li href="/">Apps & Games</li>
          </ul>
          </div>
          <div class="w-[25%]">
          <h1 class="bg-gradient-to-t from-blues-300 to-blues-400 bg-clip-text text-transparent text-[30px] border-b-2">Contact</h1>
          <ul class="flex-col space-y-2 pt-2 cursor-pointer">
          <li href="/">Email</li>
          <li href="/">Linked</li>
          <li href="/">Instagram</li>
          <li href="/">Facebook</li>
          </ul>
          </div>
     </div>
     <div class="dark:bg-background-300 dark:text-slate-100 w-full px-[65px]">
     <div class="bg-blues-100 w-full h-[1px]"></div>
     <p class="text-center  pt-4">Copyright © 2023 Android Developer Community. All Rights Reserved</p>
     <p class="text-center">
      <a href="public/src/pages/credits.html" class="underline">See all credits for this website.</a>
     </p>
     </div>
     `;
};
footer.insertAdjacentHTML("afterbegin", Footer());
