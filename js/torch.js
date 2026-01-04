const btn = document.getElementById("torchBtn");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.add("light");


  document.querySelector(".scene-center").style.opacity = "0";

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    body.style.setProperty("--tx", x + "%");
    body.style.setProperty("--ty", y + "%");
  });


  setTimeout(() => {
    location.href = "figure.html";
  }, 3000);
});
