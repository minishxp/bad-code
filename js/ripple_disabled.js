/*
document.addEventListener('DOMContentLoaded', function (event) {
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    setTimeout(function() { ripple.remove(); }, 600)
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
  console.log(button)
  button.addEventListener('click', createRipple);
}
})
*/