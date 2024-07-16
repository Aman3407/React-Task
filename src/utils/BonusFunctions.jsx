const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

const validateEmail2 = (email) => {
  if (!email.includes('@') || !email.includes('.')) return false;
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
};

const validatePassword2= (password) => {
  if (password.length < 8) return false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (let char of password) {
    if (char >= 'A' && char <= 'Z') hasUpperCase = true;
    if (char >= '0' && char <= '9') hasNumber = true;
    if (hasUpperCase && hasNumber) return true;
  }
  return false;
};

const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};