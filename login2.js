function togglePassword(element) {
  const passwordInput = element.previousElementSibling;
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      element.classList.remove('fa-eye');
      element.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      element.classList.remove('fa-eye-slash');
      element.classList.add('fa-eye');
  }
}
