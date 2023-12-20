let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');

password1.addEventListener('input', validatePasswords);
password2.addEventListener('input', validatePasswords);

function validatePasswords() {
  if (password1.value !== password2.value) {
    password2.setCustomValidity('Las contraseñas no coinciden');
  } else {
    password2.setCustomValidity('');
  }
}