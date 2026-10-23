const button = document.querySelector('.telegram-button');

button.addEventListener('pointermove', (event) => {
  const rect = button.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  button.style.transform = `perspective(500px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg) translateY(-3px)`;
});

button.addEventListener('pointerleave', () => {
  button.style.transform = '';
});
