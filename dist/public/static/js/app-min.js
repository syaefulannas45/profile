const darkModeToggle=document.querySelector("#lamp-toggle"),darkModeToggleMobile=document.querySelector("#lamp-toggle-mobile"),themes=localStorage.getItem("themes"),setDarkMode=e=>{document.body.className=e,darkModeToggle.checked="dark"===e,darkModeToggleMobile.checked="dark"===e};darkModeToggle.addEventListener("change",e=>{localStorage.setItem("themes",e.target.checked?"dark":"light"),setDarkMode(e.target.checked?"dark":"light")}),darkModeToggleMobile.addEventListener("change",e=>{localStorage.setItem("themes",e.target.checked?"dark":"light"),setDarkMode(e.target.checked?"dark":"light")});const activateToggle=()=>{"dark"==themes?(darkModeToggle.checked=!0,darkModeToggleMobile.checked=!0):(darkModeToggle.checked=!1,darkModeToggleMobile.checked=!1),document.body.classList.add(themes)};function alert(){swal("Succes","Thanks for sending the message","success")}function email(){swal({text:"Kirimkan sebuah pesan email ke : official.adcom@gmail.com"})}themes&&null!==themes?("dark"==themes?(darkModeToggle.checked=!0,darkModeToggleMobile.checked=!0):(darkModeToggle.checked=!1,darkModeToggleMobile.checked=!1),document.body.classList.add(themes)):document.body.classList.remove(themes),window.onscroll=function(){const e=document.querySelector("#fixed"),d=e.offsetTop;window.pageYOffset>d&&(e.classList.add("fixed"),e.classList.add("z-[9999]"),e.classList.add("bg-opacity-80"),e.classList.add("backdrop-blur-sm"),e.classList.add("shadow-navbar"))};