const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Cambiar modo";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
});
