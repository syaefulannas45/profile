const darkModeToggle = document.querySelector("#lamp-toggle");
const darkModeToggleMobile = document.querySelector("#lamp-toggle-mobile");
const themes = localStorage.getItem("themes");

const setDarkMode = (state) => {
  document.body.className = state;
  darkModeToggle.checked = state === "dark";
  darkModeToggleMobile.checked = state === "dark";
};

darkModeToggle.addEventListener("change", (e) => {
  localStorage.setItem("themes", e.target.checked ? "dark" : "light");
  setDarkMode(e.target.checked ? "dark" : "light");
});
darkModeToggleMobile.addEventListener("change", (e) => {
  localStorage.setItem("themes", e.target.checked ? "dark" : "light");
  setDarkMode(e.target.checked ? "dark" : "light");
});

const activateToggle = () => {
  const activateAllToggle = () => {
    darkModeToggle.checked = true;
    darkModeToggleMobile.checked = true;
  };
  const unsetToggleActive = () => {
    darkModeToggle.checked = false;
    darkModeToggleMobile.checked = false;
  };
  themes == "dark" ? activateAllToggle() : unsetToggleActive();
  document.body.classList.add(themes);
};

themes && themes !== null ? activateToggle() : document.body.classList.remove(themes);

window.onscroll = function () {
  const header = document.querySelector("#fixed");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed");
    header.classList.add("z-[9999]");
    header.classList.add("bg-opacity-80");
    header.classList.add("backdrop-blur-sm");
    header.classList.add("shadow-navbar");
  }
};

function alert() {
  swal("Succes", "Thanks for sending the message", "success");
}
function email() {
  swal({
    text: "Kirimkan sebuah pesan email ke : official.adcom@gmail.com",
  });
}
