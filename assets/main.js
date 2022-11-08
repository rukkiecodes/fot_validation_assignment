const _email = document.querySelector('#email');
const _password = document.querySelector('#password');
const _register = document.querySelector('#register');
const _error = document.querySelector('.error');
const _response = document.querySelector('.response');

_register.addEventListener('click', () => {
  if (_email.value != '' && _password.value != '') {
    if (_password.value.length < 6) {
      _error.innerHTML = 'Password length should be 6 characters or more'
    } else {
      _error.innerHTML = ''
      _register.innerHTML = 'Loading...'
      _register.innerHTML = 'Registerd'
    }
  } else {
    _error.innerHTML = 'Please complete the form, then try again'
  }
})