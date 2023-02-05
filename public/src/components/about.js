let mainAbout = document.getElementById("about");

const About = () => {
  return `
  <div class="pt-[1%] lg:pt-[100px] dark:bg-background-100 px-4 lg:px-[120px] w-full overflow-hidden pb-[100px] lg:pb-10">
        <div class="relative">
        <img loading="lazy" src="public/images/about/vector-1.svg" alt="vector" class="absolute lg:top-[0%] lg:left-[-9%] top-[9%] left-0 z-40 lg:block hidden" />
        <img loading="lazy" src="public/images/about/vector-3.svg" alt="vector" class="absolute lg:top-[0%] lg:left-[-9%] top-[6%] left-[-4%] z-40 lg:hidden block" />
        <h1 class="lg:text-[48px] font-bold bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-center text-[35px]">Nawasena Group</h1>
        <p class="text-slate-800 text-[15px] lg:text-[20px] text-center dark:text-slate-100">A Growing startup from STMIK IKMI Cirebon</p>
        <div class="w-full lg:flex pt-6 lg:pt-0 lg:mt-[80px] lg:items-center">
          <div data-aos="fade-right" class="lg:w-2/4 w-full">
            <p class="lg:text-[20px] leading-[30px] dark:text-slate-200 text-[14px] relative z-40 text-slate-800 pt-[70px] lg:pt-0 px-6">
              Nawasena sendiri berasal dari bahasa sansekerta yang berarti masa depan yang cerah <br><br>
              Kami mempunyai visi yaitu selalu memberikan yang terbaik kepada client, sehingga perusahaan mereka dapat berkembang dan bermanfaat bagi konsumen<br><br>
              Didukung dengan developer berpengalaman menjadikan kami dipercaya oleh berbagai client dari seluruh Indonesia.<br><br>
              Teknologi yang kami gunakan:
            </p>
            <div id="aboutleft" class="flex lg:space-x-[7%] px-[10%] lg:p-0 justify-evenly lg:justify-start flex-wrap w-full"></div>
            <img loading="lazy" src="public/images/about/elips-1.svg" class="absolute lg:right-[8%] lg:bottom-[0%] hidden lg:block" />
            <img loading="lazy" src="public/images/about/elips-2.svg" class="absolute lg:right-[0%] lg:bottom-[6%] hidden lg:block" />
          </div>
          <div data-aos="fade-left" class="lg:w-2/4 lg:pb-[150px] flex justify-center w-full pl-0 lg:pl-20 pt-20 lg:pt-0">
            <img loading="lazy" src="public/images/about/about.svg" alt="bg" class="lg:h-[400px]" />
                  </div>
        </div>
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
   <img loading="lazy" src=${url} class="w-[45px] h-[45px]" />
  </div>
`;
  getAboutLeft.insertAdjacentHTML("afterbegin", image);
}

imagesAbout.forEach((image) => {
  loopImageAbout(image.url);
});
