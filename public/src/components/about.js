let mainAbout = document.getElementById("about");

const About = () => {
  return `
  <div class="relative pt-[100px] lg:pt-[100px] dark:bg-background-100 px-4 lg:px-[120px] w-full overflow-hidden pb-[340px] lg:pb-10">
        <img loading="lazy" src="public/images/about/vector-1.svg" alt="vector" class="absolute lg:top-8 lg:left-0 animate-up origin-top-left top-[60px] left-0 z-40 mobile:h-[300px] hidden lg:block" />
        <img loading="lazy" src="public/images/about/vector-3.svg" alt="vector" class="absolute lg:top-8 lg:left-0 origin-top-left top-[180px] left-0  mobile:h-[100px] block lg:hidden" />
        <h1 class="lg:text-[48px] font-bold bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent text-center text-[35px]">Nawasena Group</h1>
        <p class="text-slate-800 text-[15px] lg:text-[20px] text-center dark:text-slate-100">A Growing startup from STMIK IKMI Cirebon</p>
        <div class="w-full lg:flex pt-6 lg:pt-0 lg:mt-[80px] lg:items-center">
          <div data-aos="fade-right" class="lg:w-2/4 w-full">
            <p class="lg:text-[20px] leading-[30px] dark:text-slate-200 text-[14px] relative z-40 text-slate-800 pt-[80px] lg:pt-0">
              Nawasena sendiri berasal dari bahasa sansekerta yang berarti masa depan yang cerah <br><br>

              Kami mempunyai visi yaitu selalu memberikan yang terbaik kepada client, sehingga perusahaan mereka dapat berkembang dan bermanfaat bagi konsumen<br><br>

              Didukung dengan developer berpengalaman menjadikan kami dipercaya oleh berbagai client dari seluruh Indonesia.<br><br>

              Teknologi yang kami gunakan:
            </p>
            <div id="aboutleft" class="flex lg:space-x-[40px] px-[30px] lg:p-0 justify-evenly lg:justify-start flex-wrap w-full"></div>
            <img loading="lazy" src="public/images/about/elips-1.svg" class="absolute lg:right-10 lg:bottom-0 bottom-[350px] right-[50px] hidden lg:block" />
            <img loading="lazy" src="public/images/about/elips-2.svg" class="absolute lg:right-[-15px] lg:bottom-10 bottom-[380px] right-0 hidden lg:block" />
            <img loading="lazy" src="public/images/about/elips-3.svg" class="lg:hidden absolute left-[-20px] top-[400px] hidden" />
          </div>
          <div data-aos="fade-left" class="lg:w-2/4 lg:pb-[150px] flex justify-center relative w-full">
            <img loading="lazy" src="public/images/about/about.svg" alt="bg" class="z-10 absolute h-[270px] lg:top-[-200px] lg:left-[100px]" />

            <img loading="lazy" src="public/images/about/vector-2.svg" alt="vector" class="absolute lg:bottom-[-50px] lg:right-[-20px] animate-pulse bottom-[-290px] right-0 mobile:h-[200px]" />
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
