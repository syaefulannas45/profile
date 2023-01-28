function sayHello() {
  alert("Halo");
}

const data = [
  {
    nama: "Syaeful",
  },
  {
    nama: "Annas",
  },
  {
    nama: "Testing",
  },
];

const p = document.getElementById("1");
p.innerHTML = data.map((index) => {
  return `<td>${index.nama}</td>`;
});
