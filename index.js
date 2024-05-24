const form = document.querySelector('.contact form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting in the traditional way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});