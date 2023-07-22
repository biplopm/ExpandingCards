const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.onclick = () => {
    removeClases();
    panel.classList.add("active");
  };
});

function removeClases(panel) {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
