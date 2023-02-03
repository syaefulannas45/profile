let mainHero = document.getElementById("hero");

const Hero = () => {
  return `
        <div class="lg:flex w-full lg:items-center lg:justify-center h-screen lg:px-[120px] px-4 pt-[25%] lg:pt-[100px] dark:bg-background-100">
          <div class="lg:w-2/4">
            <h1 class="text-green-100 font-bold text-[35px] lg:text-[48px] bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent lg:w-[80%] pb-4 lg:pb-0">
              Nawasena Group
            </h1>
            <p class="
           text-[15px] lg:text-[20px] leading-[30px] dark:text-slate-100 text-slate-800">
             Kami adalah startup yang berfokus pada bidang pengembangan teknologi website dan android
            </p>
            <button class="text-white px-[20px] lg:px-[25px] py-[7px] lg:py-[10px] mt-[28px] rounded-[6px] bg-gradient-to-r from-blues-100 to-blues-200 bg">
              <a href="/">See More <i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
          <div class="lg:w-2/4 relative flex lg:justify-center pt-[50px] lg:pt-0">
            <img loading="lazy"  src="public/images/hero/hero.svg" alt="images" class="px-12 relative z-10 absolute" />
            <img loading="lazy"  src="public/images/hero/elips-1.svg" alt="images" class="absolute lg:left-[11%] lg:top-[35%] top-[35%] left-[3%] animate-bounce z-20" />
            <img loading="lazy"  src="public/images/hero/elips-2.svg" alt="images" class="absolute lg:left-[8%] lg:bottom-[6%] bottom-[-2%] lg:h-[110px] h-[70px] left-[5%] z-20" />
            <img loading="lazy"  src="public/images/hero/elips-3.svg" alt="images" class="absolute right-[-1%] top-[35%] lg:right-[2%] lg:top-[30%]" />
            <img loading="lazy"  src="public/images/hero/ilustrasi.svg" alt="images" class="absolute lg:left-[3%] lg:top-[12%] lg:h-[500px] lg:h-[500px] h-[300px] top-[18%] z-20 left-[1%]" />
          </div>
        </div>
        `;
};

mainHero.insertAdjacentHTML("afterbegin", Hero());
