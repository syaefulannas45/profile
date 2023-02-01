let mainHero = document.getElementById("hero");

const Hero = () => {
  return `
        <div class="lg:flex w-full items-center justify-center h-screen lg:px-[120px] px-4 pt-[100px] dark:bg-background-100">
          <div class="w-2/4">
            <h1 class="text-green-100 font-bold text-[48px] bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent w-[80%]">
              Nawasena Group
            </h1>
            <p class="text-[20px] leading-[30px] dark:text-slate-100">
             Kami adalah startup yang berfokus pada bidang pengembangan teknologi website dan android
            </p>
            <button class="text-white px-[25px] py-[10px] mt-[28px] rounded-[6px] bg-gradient-to-r from-blues-100 to-blues-200 bg">
              <a href="/">See More <i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
          <div class="w-2/4 relative flex justify-center">
            <img src="public/images/hero/hero.svg" alt="images" class="h-[600px]" />
            <img src="public/images/hero/elips-1.svg" alt="images" class="absolute lg:left-[1px] lg:top-[220px] animate-bounce" />
            <img src="public/images/hero/elips-2.svg" alt="images" class="absolute lg:left-[-15px] lg:bottom-[-10px]" />
            <img src="public/images/hero/elips-3.svg" alt="images" class="lg:relative" />
            <img src="public/images/hero/ilustrasi.svg" alt="images" class="lg:absolute left-[-50px] top-[50px]" />
          </div>
        </div>
        `;
};

mainHero.insertAdjacentHTML("afterbegin", Hero());
