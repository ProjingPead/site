document.addEventListener("mousemove", parallax);
let spherical1 = document.querySelector("#elipse1");
let spherical2 = document.querySelector("#elipse2");

function parallax(e) {
  const x = window.innerHeight - e.pageX;
  const y = window.innerWidth - e.pageY;

  const x1 = (x * 15) / 100;
  const y1 = (y * -2) / 100;
  const x2 = (x * -9) / 100;
  const y2 = (y * 7) / 100;

  spherical1.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
  spherical2.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
}
