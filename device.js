var a = document.querySelector("canvas"),
  l = a.getContext("2d"),
  w = document.querySelector(".𐚛"),
  A = document.getElementById("all"),
  m = document.querySelector("a"),
  e = 2048,
  c = 96;
a.width = e;
a.height = e;
var s = !0,
  i = !1,
  d = !1,
  h = !1,
  n,
  p = (t) => [t / 2, t / 2, 0, t / 2, t / 2, t / 2],
  g = l.createRadialGradient(...p(e)),
  M = ["394053", "4e4a59", "6e6362", "839073", "7cae7a"],
  L = ["ebd4cb", "da9f93", "b6465f", "890620", "2c0703"],
  v = ["e1ce7a", "fbffb9", "fdd692", "ec7357", "754f44"],
  x = ["e2c2c6", "b9929f", "9c528b", "610f7f", "2f0147"],
  I = ["e6e8e6", "ced0ce", "9fb8ad", "475841", "3f403f"],
  R = ["f5fdc6", "f5c396", "d0b17a", "a89f68", "41521f"],
  $ = ["8d5a97", "907f9f", "a4a5ae", "b0c7bd", "b8ebd0"],
  k = ["29bf12", "abff4f", "08bdbd", "f21b3f", "ff9914"],
  b = [M, L, v, x, I, R, $, k],
  q = () => {
    let t = Math.min(
      a.offsetHeight,
      window.outerHeight / 1.8,
      window.outerWidth / 1.5
    );
    (a.style.height = `${t}px`),
      (a.style.width = `${t}px`),
      (w.style.maxWidth = `${t}px`),
      document.body.classList.add("\u{106E0}");
  },
  C = () => {
    m.setAttribute("download", `${self.crypto.randomUUID()}.png`),
      m.setAttribute(
        "href",
        a.toDataURL("image/png").replace("image/png", "image/octet-stream")
      );
  },
  u = () =>
    d
      ? Math.floor(Math.random() * parseInt("ffffff", 16))
          .toString(16)
          .padStart(6, "0")
      : n[Math.floor(Math.random() * n.length)],
  r = () => {
    if (
      (l.clearRect(0, 0, a.width, a.height),
      (n = b[Math.floor(Math.random() * b.length)]),
      i)
    ) {
      if (i) {
        let t = Math.floor(s ? Math.acosh(e, c) : e / c);
        for (let o = 0; o < t; ++o) {
          let f = u(n);
          g.addColorStop((1 / t) * o, `#${f}`);
        }
        (l.fillStyle = g), l.fillRect(20, 20, e, e), h || ((h = !0), r());
      }
    } else {
      let t = s ? Math.floor(e / c) : e / c;
      for (let o = 0; o < t ** 2; ++o) {
        let f = Math.floor(o / t),
          y = o - f * t,
          S = u(n);
        (l.fillStyle = `#${S}`), l.fillRect(y * c, f * c, c, c);
      }
    }
    C();
  },
  G = () => {
    (h = !1), (g = l.createRadialGradient(...p(e)));
  };
document.querySelectorAll("button").forEach((t) => {
  t.addEventListener("click", () => {
    t.id === "𐜇" && ((s = !s), G()),
      t.id === "𐜁" && (i = !i),
      t.id === "𐜶" && (d = !d),
      t.id === "𐙻" && t.classList.add("active"),
      t.classList.toggle("active"),
      r();
  });
});
a.addEventListener("click", () => r());
q();
r();
