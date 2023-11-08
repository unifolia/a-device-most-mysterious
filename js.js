const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const controls = document.querySelector(".controls");
const allButton = document.getElementById("all");
const downloadLink = document.querySelector("a");

const xy = 2048;
let b = 96; // box size
canvas.width = xy;
canvas.height = xy;

let fitToCanvas = true;
let isGradient = false;
let randomColors = false;

const gradientShape = (d) => [d / 2, d / 2, 0, d / 2, d / 2, d / 2];
let radialGradient = ctx.createRadialGradient(...gradientShape(xy));

const a1 = ["394053", "4e4a59", "6e6362", "839073", "7cae7a"];
const a2 = ["ebd4cb", "da9f93", "b6465f", "890620", "2c0703"];
const a3 = ["e1ce7a", "fbffb9", "fdd692", "ec7357", "754f44"];
const a4 = ["e2c2c6", "b9929f", "9c528b", "610f7f", "2f0147"];
const a5 = ["e6e8e6", "ced0ce", "9fb8ad", "475841", "3f403f"];
const a6 = ["f5fdc6", "f5c396", "d0b17a", "a89f68", "41521f"];
const a7 = ["8d5a97", "907f9f", "a4a5ae", "b0c7bd", "b8ebd0"];
const a8 = ["29bf12", "abff4f", "08bdbd", "f21b3f", "ff9914"];
const cps = [a1, a2, a3, a4, a5, a6, a7, a8];

const resizeImg = () => {
  let i = Math.min(
    canvas.offsetHeight,
    window.outerHeight / 1.8,
    window.outerWidth / 1.5
  );

  canvas.style.height = `${i}px`;
  canvas.style.width = `${i}px`;
  controls.style.maxWidth = `${i}px`;
  document.body.classList.add("ready");
};

const setDownloadLink = () => {
  downloadLink.setAttribute("download", `${self.crypto.randomUUID()}.png`);
  downloadLink.setAttribute(
    "href",
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
};

const createColor = (p) => {
  return randomColors
    ? Math.floor(Math.random() * parseInt("ffffff", 16))
        .toString(16)
        .padStart(6, "0")
    : p[Math.floor(Math.random() * p.length)];
};

const generate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!fitToCanvas && isGradient) {
    radialGradient = ctx.createRadialGradient(...gradientShape(xy));
  }

  const l = fitToCanvas ? Math.floor(xy / b) : xy / b;
  const palette = cps[Math.floor(Math.random() * cps.length)];

  for (let i = 0; i < l ** 2; ++i) {
    const y = Math.floor(i / l);
    const x = i - y * l;
    const color = createColor(palette);

    if (isGradient) {
      if (fitToCanvas || i % Math.floor(l ** 2 / Math.PI) === 0) {
        radialGradient.addColorStop((1 / l ** 2) * i, `#${color}`);
      }

      ctx.fillStyle = radialGradient;
      ctx.fillRect(20, 20, xy, xy);
    } else {
      ctx.fillStyle = `#${color}`;
      ctx.fillRect(x * b, y * b, b, b);
    }
  }

  setDownloadLink();
};

// const showAll = () => {
//   canvas.height = 4096;
//   canvas.width = 4096;

//   const black = parseInt("000000", 16);
//   const white = parseInt("ffffff", 16);
//   for (let color = black; color < white; ++color) {
//     const column = Math.floor(color / 4096);

//     ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
//     ctx.fillRect(color - column * 4096, column, 1, 1);
//   }

//   setDownloadLink();
// };

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "𐜇") fitToCanvas = !fitToCanvas;
    if (button.id === "𐜁") isGradient = !isGradient;
    if (button.id === "𐜶") randomColors = !randomColors;
    button.classList.toggle("active");
    generate();
  });
});

canvas.addEventListener("click", () => generate());

resizeImg();
generate();
