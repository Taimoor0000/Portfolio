// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => obs.observe(el));

// Scroll progress + orb parallax
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (y / h) * 100;
  document.getElementById("scrollProgress").style.width = `${progress}%`;

  const o1 = document.querySelector('.orb1');
  const o2 = document.querySelector('.orb2');
  const o3 = document.querySelector('.orb3');
  if (o1) o1.style.transform = `translate(${y * 0.03}px, ${y * -0.02}px)`;
  if (o2) o2.style.transform = `translate(${y * -0.02}px, ${y * 0.02}px)`;
  if (o3) o3.style.transform = `translate(${y * 0.01}px, ${y * 0.01}px)`;
});

// Magnetic buttons
document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// Image fallback
const hydroImg = document.getElementById('hydroImg');
if (hydroImg) {
  const paths = [
    "assets/hydroelectric-project.jpg",
    "assets/hydroelectric-project.jpeg",
    "assets/hydroelectric-project.png",
    "assests/hydroelectric-project.jpg",
    "assests/hydroelectric-project.jpeg",
    "assests/hydroelectric-project.png"
  ];
  let idx = 0;
  hydroImg.onerror = () => {
    idx++;
    if (idx < paths.length) hydroImg.src = paths[idx];
  };
}

// Floating particles
const particlesWrap = document.getElementById("particles");
for (let i = 0; i < 35; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = (Math.random() * 100 + 20) + "vh";
  p.style.opacity = Math.random() * 0.7 + 0.2;
  p.style.animationDuration = (Math.random() * 8 + 6) + "s";
  p.style.animationDelay = (Math.random() * 5) + "s";
  particlesWrap.appendChild(p);
}