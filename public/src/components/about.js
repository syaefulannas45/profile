let mainAbout = document.getElementById("about");


const About = () => {
  return `
  <div class="relative pt-[100px] dark:bg-background-100">
   <img src="public//images/about/vector-1.svg" alt="vector" class="absolute lg:top-8 lg:left-0 animate-up animate-pulse" />
   <h1 class="text-[48px] font-bold bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-center">Android Developer Community Cirebon</h1>
        <p class="text-[20px] text-center dark:text-slate-100">Internal organisation at STMIK IKMI Cirebon</p>
        <div class="w-full flex mt-[60px] px-[120px] items-center">
          <div data-aos="fade-right" class="w-2/4">
            <p class="text-[20px] leading-[30px] dark:text-slate-200">
              We are an organization that focuses on developing <br />
              the technology for websites and androids. <br />
              <br />

              We have been standing since October 25, 2019, <br />
              founded by Taufik Hidayat. Right now, we're the 3rd <br />
              year since the founding of Android Developer Community (ADCOM). <br />
              <br />

              The technology we're using is:
            </p>
            <div id="aboutleft" class="flex flex-wrap space-x-[40px]"></div>
            <img src="public/images/about/elips-1.svg" class="absolute right-10 bottom-0" />
            <img src="public/images/about/elips-2.svg" class="absolute right-[-15px] bottom-10" />
          </div>
          <div data-aos="fade-left" class="w-2/4 pb-[100px] flex justify-center relative">
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
