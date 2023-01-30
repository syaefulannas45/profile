let mainContact = document.getElementById("contact");

const Contact = () => {
  return `
     <div class="bg-gradient-to-r from-blues-100 to-blues-200  relative px-[120px] relative h-[420px]">
          <div
            class="w-full flex justify-between bg-white py-[100px] px-[100px] border relative bottom-[320px] shadow-lg rounded-[8px] dark:bg-background-200 dark:border-0">
            <div class="w-2/4">
              <h1 class="text-[32px] font-bold bg-gradient-to-r from-blues-100 to-blues-200 bg-clip-text text-transparent">GET IN TOUCH</h1>
              <div class="flex-col space-y-[25px] text-[15px] mt-[35px]">
                <p>
                  <i class="fa-solid fa-location-dot text-[20px]"></i>
                  <span> &nbsp; Majasem, Kota Cirebon</span>
                </p>
                <p>
                  <i class="fa-solid fa-phone text-[20px]"></i>
                  <span> &nbsp; +62 123 4567 8910</span>
                </p>
                <p class="flex space-x-[40px] text-[20px]">
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-github"></i>
                  <i class="fa-brands fa-dribbble"></i>
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2731800839642!2d108.52486781471951!3d-6.736491095130134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1dfcef42566d%3A0x3e146375f0046403!2sSekolah%20Tinggi%20Manajemen%20Informatika%20dan%20Komputer%20IKMI!5e0!3m2!1sid!2sid!4v1674977787432!5m2!1sid!2sid"
                  width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade" class="w-[425px] h-[210px] rounded-[8px]"></iframe>
              </div>
            </div>
            <div class="w-2/4">
              <h1 class="font-medium text-[20px]">Leave us message</h1>
              <form class="mt-[20px] flex-col space-y-[25px]">
                <input type="text" placeholder="Name"
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] placeholder:text-input-200 outline-input-200" />
                <input type="text" placeholder="Email"
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] placeholder:text-input-200 outline-input-200" />
                <textarea
                  class="bg-input-100 py-[10px] w-full pl-[30px] rounded-[8px] text-input-200 outline-input-200 h-[200px]">Write your message here</textarea>
                <button type="button" onclick="alert()" class="bg-gradient-to-r from-blues-100 to-blues-200 text-center w-full py-[10px] text-white rounded-[6px]">Send</button>
              </form>
            </div>
          </div>
        </div>
     `;
};
mainContact.insertAdjacentHTML("afterbegin", Contact());
