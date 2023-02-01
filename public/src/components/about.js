let mainAbout = document.getElementById("about");

const About = () => {
  return `
  <div class="relative pt-[200px] lg:pt-[100px] dark:bg-background-100  px-4 lg:px-[120px] w-full">
   <img src="public/images/about/vector-1.svg" alt="vector" class="absolute lg:top-8 lg:left-0 animate-up origin-top-left top-2" />
   <h1 class="lg:text-[48px] font-bold bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-center text-[35px]">Nawasena Group</h1>
        <p class="text-[15px] lg:text-[20px] text-center dark:text-slate-100">A Growing startup from STMIK IKMI CIrebon</p>
        <div class="w-full lg:flex pt-6 lg:pt-0 lg:mt-[80px] lg:items-center">
          <div data-aos="fade-right" class="lg:w-2/4 w-full">
            <p class="lg:text-[20px] leading-[30px] dark:text-slate-200 text-slate-800 text-[14px]">
              Kami adalah Startup yang berfokus pada bidang pengembangan teknologi website dan android.<br><br>

              Didukung oleh developer yang berpengalaman menjadikan kami dipercaya oleh berbagai client dari seluruh Indonesia.<br><br>

              Teknologi yang kami gunakan:
            </p>
            <div id="aboutleft" class="flex flex-wrap lg:space-x-[40px] px-[10px] lg:p-0 justify-evenly lg:justify-start"></div>
            <img src="public/images/about/elips-1.svg" class="absolute lg:right-10 lg:bottom-0 bottom-[350px] right-[50px]" />
            <img src="public/images/about/elips-2.svg" class="absolute lg:right-[-15px] lg:bottom-10 bottom-[380px] right-0" />
          </div>
          <div data-aos="fade-left" class="lg:w-2/4 lg:pb-[150px] flex justify-center relative w-full">
            <img src="public/images/about/about.svg" alt="bg" class="relative z-10" />
            <img src="public/images/about/vector-2.svg" alt="vector" class="absolute lg:bottom-0 lg:right-[-20px] animate-pulse" />
        </div>
  </div>
     `;
};
mainAbout.insertAdjacentHTML("afterbegin", About());

const imagesAbout = [
  {
    url: "public/images/about/ex.svg",
  },
  {
    url: "public/images/about/nodejs.svg",
  },
  {
    url: "public/images/about/mongodb.svg",
  },
  {
    url: "public/images/about/jquery.svg",
  },
  {
    url: "public/images/about/mysql.svg",
  },
  {
    url: "public/images/about/php.svg",
  },
  {
    url: "public/images/about/js.svg",
  },
  {
    url: "public/images/about/css.svg",
  },
  {
    url: "public/images/about/html.svg",
  },
];
let getAboutLeft = document.getElementById("aboutleft");
function loopImageAbout(url) {
  const image = `
  <div class="bg-white w-[85px] h-[85px] rounded-full shadow-custom mt-[40px] flex justify-center items-center ">
   <img src=${url} class="w-[45px] h-[45px]" />
  </div>
`;
  getAboutLeft.insertAdjacentHTML("afterbegin", image);
}

imagesAbout.forEach((image) => {
  loopImageAbout(image.url);
});
