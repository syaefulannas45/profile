window.onscroll = function () {
  const header = document.querySelector("#fixed");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const lampToggle = () => {
  const lampToggle = document.querySelector("#lamp-toggle");
  const html = document.querySelector("html");
  if (lampToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};

function alert() {
  swal("Succes", "Thanks for sending the message", "success");
}
