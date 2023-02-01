let mainHero = document.getElementById("hero");

const Hero = () => {
  return `
        <div class="lg:flex w-full lg:items-center lg:justify-center h-screen lg:px-[120px] px-4 pt-[150px] lg:pt-[100px] dark:bg-background-100">
          <div class="lg:w-2/4">
            <h1 class="text-green-100 font-bold text-[20px] lg:text-[48px] bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent lg:w-[80%]">
              Nawasena Group
            </h1>
            <p class="
           text-[12px] lg:text-[20px] leading-[30px] dark:text-slate-100">
             Kami adalah startup yang berfokus pada bidang pengembangan teknologi website dan android
            </p>
            <button class="text-white px-[20px] lg:px-[25px] py-[7px] lg:py-[10px] mt-[28px] rounded-[6px] bg-gradient-to-r from-blues-100 to-blues-200 bg">
              <a href="/">See More <i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
          <div class="lg:w-2/4 relative flex lg:justify-center pt-[50px] lg:pt-0">
            <img src="public/images/hero/hero.svg" alt="images" class="lg:h-[600px] px-12" />
            <img src="public/images/hero/elips-1.svg" alt="images" class="absolute lg:left-[1px] lg:top-[220px] top-[140px] left-[10px] animate-bounce" />
            <img src="public/images/hero/elips-2.svg" alt="images" class="absolute lg:left-[-15px] lg:bottom-[-10px] bottom-[-10px] h-[70px] left-[20px]" />
            <img src="public/images/hero/elips-3.svg" alt="images" class="lg:relative absolute right-0" />
            <img src="public/images/hero/ilustrasi.svg" alt="images" class="absolute lg:left-[-50px] lg:top-[50px] h-[300px] top-[70px]" />
          </div>
        </div>
        `;
};

mainHero.insertAdjacentHTML("afterbegin", Hero());
