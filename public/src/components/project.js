let mainProject = document.getElementById("project");

const Project = () => {
  return `
 <div class="lg:pt-[120px] px-4 lg:px-[120px] relative dark:bg-background-100 pb-[500px]">
      <h1 class="bg-gradient-to-t from-blues-100 to-blues-200 bg-clip-text text-transparent lg:text-[48px] font-bold text-center relative z-10 text-[38px]">Our Project</h1>
     <p class="text-[16px] lg:text-[20px] text-center dark:text-slate-100 relative z-10 text-slate-800">Next this not shut rethoric best had well of was on facility of the present.</p>
     <div class="flex flex-wrap justify-evenly mt-[30px] relative" id="images-project"></div>
     <img loading="lazy" src="public/images/project/vector-1.svg" class="absolute lg:top-0 left-[-30px] animate-ping mobile:h-[100px] top-[100px] "/>
     <img loading="lazy" src="public/images/project/vector-2.svg" class="absolute bottom-[400px] left-4 animate-pulse"/>
     <img loading="lazy" src="public/images/project/vector-3.svg" class="absolute bottom-[450px] left-10 animate-pulse"/>
     <img loading="lazy" src="public/images/project/vector-4.svg" class="absolute top-4 left-[32%] lg:top-[140px] lg:left-[38%] animate-bounce"/>
     <img loading="lazy" src="public/images/project/vector-5.svg" class="absolute lg:top-[500px] top-[200px] mobile:h-[100px] hover:animate-pulse left-[32%]"/>
     <img loading="lazy" src="public/images/project/vector-6.svg" class="absolute mobile:h-[70px] top-[310px] left-[71%] lg:top-[150px] lg:left-[61%]"/>
     <img loading="lazy" src="public/images/project/vector-7.svg" class="absolute bottom-[300px] left-[70%] hidden lg:block"/>
     <img loading="lazy" src="public/images/project/vector-8.svg hidden lg:block" class="absolute top-[500px] left-[88%] animate-pulse hidden lg:block"/>
 </div>
     `;
};

mainProject.insertAdjacentHTML("afterbegin", Project());

const imagesProject = [
  {
    url: "img-6",
    id: "id_6",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
  {
    url: "img-5",
    id: "id_5",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
  {
    url: "img-4",
    id: "id_4",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
  {
    url: "img-3",
    id: "id_3",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
  {
    url: "img-2",
    id: "id_2",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
  {
    url: "img-1",
    id: "id_1",
    title: "Our Project",
    desc: "Lorem ipsum",
  },
];

let getProjectImg = document.getElementById("images-project");

function loopImageProject(url, id, title, desc) {
  const image = `

        <div
          class="cursor-pointer"
        >
          <img loading="lazy"
            src="./public/images/project/${url}.svg"
            alt="img"
            class="lg:w-[400px] lg:h-[300px] w-[170px] h-[100px] my-[10px]  relative z-10"
            data-bs-toggle="modal"
            data-bs-target="#${id}"
          />
          <div class="relative">
          <p class="absolute border lg:text-[17px] text-[10px] text-slate-100 backdrop-blur-sm  to-blues-200 px-[10px] py-[5px] lg:py-[10px] lg:px-[30px] rounded-full lg:top-[-180px] top-[-70px] left-[32%] lg:left-[35%] z-20 hover:scale-150 hover:duration-200" data-bs-toggle="modal"
            data-bs-target="#${id}">See More</p>
          </div>
          <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="${id}"
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div
            class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none modal-lg"
          >
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            >
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
              >
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                ${title}
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <div class="flex w-full space-x-6 items-center">
                  <div class="w-2/4">
                    <img loading="lazy" src="./public/images/project/${url}.svg" class="w-[240px] h-[240px] lg:w-[370px] lg:h-[265px]" />
                  </div>
                  <div class="w-2/4">
                    <p>
                   ${desc}
                    </p>
                  </div>
                </div>
                <div
                  class="flex mx-[300px] items-center bg-blues-300 rounded-md"
                ></div>
              </div>
              <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
              >
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
`;

  getProjectImg.insertAdjacentHTML("afterbegin", image);
}

imagesProject.forEach((image) => {
  const { url, id, title, desc } = image;
  loopImageProject(url, id, title, desc);
});
