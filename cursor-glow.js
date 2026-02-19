document.addEventListener("DOMContentLoaded", () => {
  const glow = document.createElement("div");
  glow.classList.add("cursor-glow");
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.setProperty("--glow-x", e.clientX + "px");
    glow.style.setProperty("--glow-y", e.clientY + "px");
  });
});
