
const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsTextarea = document.getElementById('comments');
const submitButton = document.getElementById('submit');

form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const comments = commentsTextarea.value.trim();

  
  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (email === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (comments === '') {
    alert('Please enter your comments.');
    commentsTextarea.focus();
    return;
  }

  
  alert(`Thank you for your feedback, ${name}!`);
  form.reset();
});
