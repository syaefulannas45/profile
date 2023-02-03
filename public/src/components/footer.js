let footer = document.getElementById("footer");

const Footer = () => {
  return `
     <div class="lg:flex lg:px-[120px] py-[35px] dark:bg-background-300  w-full lg:space-x-10 bg-background-400 mt-[250px] lg:mt-0 px-4 space-y-4 lg:space-y-0">
        <div class="lg:w-[25%]">
          <img loading="lazy" src="public/images/logo1.svg" class="dark:hidden block h-[40px] lg:h-[50px]" />
          <img loading="lazy" src="public/images/logo2.svg" class="hidden dark:block h-[40px] lg:h-[50px]" />
          <p class="text-[17px] lg:text-[20px] text-slate-700 dark:text-slate-100">Seinjak sejejak setujuan</p>
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">About Us</h1>
          <ul class="flex-col space-y-2  pt-2">
            <li class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://portfolio-v1-tau-three.vercel.app/">Syaeful Annas</a></li>
            <li class="text-slate-800 cursor-pointer  dark:text-slate-100"><a href="https://www.instagram.com/ajmarwa_/">Apriliana Janatu Marwa</a></li>
            <li class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://shousyadev.vercel.app">Muhammad Fitrian Shousyade Almadina</a></li>
          </ul>
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">Project</h1>
          <ul class="flex-col space-y-2  pt-2">
            <li href="/" class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://simple-qrcode.onrender.com/">Simple QRCode Generator</a></li>
            <li href="/" class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://www.instagram.com/p/CoKyFvwPt_e/?igshid=OGQ2MjdiOTE%3D" target="blank">UI Design Woodland</a></li>
            <li href="/" class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://www.instagram.com/p/CoKy8oivTVb/?igshid=OGQ2MjdiOTE%3D">UI Design Pricing Cards</a></li>
            <li href="/" class="text-slate-800 cursor-pointer dark:text-slate-100"><a href="https://company-profile-snowy.vercel.app/" target="blank">Web Company Profile</a></li>
          </ul> 
        </div>
        <div class="lg:w-[25%]">
          <h1 class="bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-[30px] border-b-2 font-semibold border-blues-100">Contact</h1>
          <ul class="flex-col space-y-2 pt-2 ">
            <li class="text-slate-800 cursor-pointer dark:text-slate-100" onclick="email()">Email</li>
            <li class="text-slate-800 cursor-pointer dark:text-slate-100" oncli><a href="https://www.instagram.com/adcom_official/">Instagram</a></li>
            <li class="text-slate-800 cursor-pointer dark:text-slate-100" onclick="sosmed()">LinkedIn</li>
            <li class="text-slate-800 cursor-pointer dark:text-slate-100" onclick="sosmed()">Facebook</li>
          </ul>
        </div>
      </div>
      <div class="dark:bg-background-300 w-full px-4 lg:px-[65px] bg-background-400">
        <div class="bg-blues-100 w-full h-[1px]"></div>
        <p class="text-slate-800 text-center pt-4 dark:text-slate-100">Copyright © 2023 Nawasena Group. All Rights Reserved</p>
        <p class="text-center pb-4 text-slate-800 dark:text-slate-100">
          <a href="public/src/pages/credits.html" class="underline">See all credits for this website.</a>
        </p>
      </div>
     `;
};
footer.insertAdjacentHTML("afterbegin", Footer());
