var e = document.querySelector("canvas"),
  o = e.getContext("2d"),
  p = document.querySelector(".𐚛"),
  q = document.getElementById("all"),
  g = document.querySelector("a"),
  a = 2048,
  n = 96;
e.width = a;
e.height = a;
var l = !0,
  f = !1,
  r = !1,
  m = (t) => [t / 2, t / 2, 0, t / 2, t / 2, t / 2],
  d = o.createRadialGradient(...m(a)),
  M = ["394053", "4e4a59", "6e6362", "839073", "7cae7a"],
  w = ["ebd4cb", "da9f93", "b6465f", "890620", "2c0703"],
  S = ["e1ce7a", "fbffb9", "fdd692", "ec7357", "754f44"],
  x = ["e2c2c6", "b9929f", "9c528b", "610f7f", "2f0147"],
  L = ["e6e8e6", "ced0ce", "9fb8ad", "475841", "3f403f"],
  v = ["f5fdc6", "f5c396", "d0b17a", "a89f68", "41521f"],
  R = ["8d5a97", "907f9f", "a4a5ae", "b0c7bd", "b8ebd0"],
  $ = ["29bf12", "abff4f", "08bdbd", "f21b3f", "ff9914"],
  b = [M, w, S, x, L, v, R, $],
  C = () => {
    let t = Math.min(
      e.offsetHeight,
      window.outerHeight / 1.8,
      window.outerWidth / 1.5
    );
    (e.style.height = `${t}px`),
      (e.style.width = `${t}px`),
      (p.style.maxWidth = `${t}px`),
      document.body.classList.add("𐛠");
  },
  I = () => {
    g.setAttribute("download", `${self.crypto.randomUUID()}.png`),
      g.setAttribute(
        "href",
        e.toDataURL("image/png").replace("image/png", "image/octet-stream")
      );
  },
  k = (t) =>
    r
      ? Math.floor(Math.random() * parseInt("ffffff", 16))
          .toString(16)
          .padStart(6, "0")
      : t[Math.floor(Math.random() * t.length)],
  s = () => {
    o.clearRect(0, 0, e.width, e.height),
      !l && f && (d = o.createRadialGradient(...m(a)));
    let t = l ? Math.floor(a / n) : a / n,
      y = b[Math.floor(Math.random() * b.length)];
    for (let c = 0; c < t ** 2; ++c) {
      let i = Math.floor(c / t),
        u = c - i * t,
        h = k(y);
      f
        ? ((l || c % Math.floor(t ** 2 / Math.PI) === 0) &&
            d.addColorStop((1 / t ** 2) * c, `#${h}`),
          (o.fillStyle = d),
          o.fillRect(20, 20, a, a))
        : ((o.fillStyle = `#${h}`), o.fillRect(u * n, i * n, n, n));
    }
    I();
  };
document.querySelectorAll("button").forEach((t) => {
  t.addEventListener("click", () => {
    t.id === "\u{10707}" && (l = !l),
      t.id === "\u{10701}" && (f = !f),
      t.id === "\u{10736}" && (r = !r),
      t.classList.toggle("active"),
      s();
  });
});
e.addEventListener("click", () => s());
C();
s();
