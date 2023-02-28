const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => tab.addEventListener("click", function() {
  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(c => c.classList.remove("show-content"));

  const contentId = this.dataset.content;

  this.classList.add("active");

  document.querySelector(`.tab-content[data-content="${contentId}"]`).classList.add("show-content");
}));