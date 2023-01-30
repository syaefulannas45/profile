let footer = document.getElementById("footer");

const Footer = () => {
  return `
     <div class="flex justify-between px-[120px] py-[35px] items-center dark:bg-background-100 dark:text-slate-100">
          <p>Copyright © 2023</p>
          <p>Android Developer Community</p>
     </div>
     `;
};
footer.insertAdjacentHTML("afterbegin", Footer());
