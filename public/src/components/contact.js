let mainContact = document.getElementById("contact");

const Contact = () => {
  return `
     <div class="relative px-4 lg:px-[120px] lg:h-[420px] dark:bg-background-100 py-[80px] lg:py-10">
     <img loading="lazy" src="public/images/contact/elips.svg" class="absolute lg:top-[-320px] lg:left-10 hover:animate-pulse top-[16px] left-[20px]" />
     <img loading="lazy" src="public/images/contact/elips.svg" class="absolute lg:top-[250px] lg:right-[120px] hover:animate-pulse bottom-[20px] lg:bottom-0  right-[20px]" />
     <img loading="lazy" src="public/images/contact/vector-1.svg" class="absolute lg:top-[-230px] lg:right-8 hover:animate-pulse hidden lg:block" />
          <div
            class="w-full lg:flex lg:justify-between bg-white py-[50px] px-4 lg:px-[100px] lg:bottom-[300px] relative shadow-lg rounded-[8px] border dark:bg-background-200 dark:border-0">
            <div class="lg:w-2/4">
              <h1 class="text-[32px] font-bold bg-gradient-to-b from-blues-100 to-blues-200 bg-clip-text text-transparent">HUBUNGI KAMI</h1>
              <div class="flex-col space-y-[25px] text-[15px] mt-[35px] dark:text-slate-100">
                <div class="flex items-center">
                 <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px]  rounded-full flex justify-center items-center"><i class="fa-solid fa-location-dot text-[20px] px-4 py-4 text-slate-800 dark:text-white"></i></div>
                 <span class="text-slate-800 dark:text-white"> &nbsp; Majasem, Kota Cirebon</span>
                </div>
                <div class="flex items-center space-x-2">
                 <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px] rounded-full flex justify-center items-center px-4 py-4">
                 <i class="fa-brands fa-youtube text-[20px] text-slate-800 dark:text-white"></i>
                </div>
                 <span class="text-slate-800 dark:text-white "><a href="https://youtube.com/@adcomchannel_"> Adcom Channel</a></span>
                </div>
               
                <div class=" flex space-x-[20px] text-[20px]">
                <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px] rounded-full flex justify-center items-center px-4 py-4 lg:cursor-pointer">
                <i class="fa-solid fa-phone   text-slate-800 dark:text-slate-100"></i>
                </div>
                <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px] rounded-full flex justify-center items-center px-4 py-4 lg:cursor-pointer">
                <a href="https://instagram.com/adcom_official"><i class="fa-brands fa-instagram text-slate-800 dark:text-slate-100"></i></a>
                </div>
                <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px] rounded-full flex justify-center items-center px-4 py-4 lg:cursor-pointer">
                <a href="https://github.com/adcomofficial"><i class="fa-brands fa-github text-slate-800 dark:text-slate-100"></i></a>
                </div>
                <div class="bg-gradient-to-t from-blues-100 to-blues-200 w-[30px] h-[30px] rounded-full flex justify-center items-center px-4 py-4 lg:cursor-pointer">
                <i class="fa-brands fa-dribbble text-slate-800 dark:text-slate-100"></i>
                </div>
                  
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2731800839642!2d108.52486781471951!3d-6.736491095130134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1dfcef42566d%3A0x3e146375f0046403!2sSekolah%20Tinggi%20Manajemen%20Informatika%20dan%20Komputer%20IKMI!5e0!3m2!1sid!2sid!4v1674977787432!5m2!1sid!2sid"
                  width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" class="lg:w-[425px] lg:h-[210px] rounded-[8px] w-full h-[250px]"></iframe>
              </div>
            </div>
            <div class="lg:w-2/4 pt-[65px] lg:pt-0">
              <h1 class="font-medium text-[20px] text-slate-800 dark:text-slate-100">Kirimkan pesan email</h1>
              <form class="mt-[20px] flex-col space-y-[25px]">
                <input type="text" placeholder="Nama"
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] placeholder:text-input-200 outline-input-200" />
                <input type="text" placeholder="Email"
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] placeholder:text-input-200 outline-input-200" />
                <textarea
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] text-input-200 outline-input-200 h-[200px]" placeholder="Masukan teks pesan anda"></textarea>
                <button type="button" onclick="alert()" class="bg-gradient-to-r from-blues-100 to-blues-200 text-center w-full py-[10px] text-white rounded-[6px] font-bold">Kirim</button>
              </form>
            </div>
          </div>
        </div>
     `;
};
mainContact.insertAdjacentHTML("afterbegin", Contact());
