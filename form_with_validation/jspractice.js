function newjsfunc() {
  // alert('Hello World');
  document.getElementById('submitted').innerHTML = 'Form Submitted';
}

let password;

function validatejsfunc() {
  //var rt = /a+b/;
  password = document.getElementById('validate').value;
  if (emptypassword(password) !== true) {
    alert('Wrong. Enter password in correct format');
  }
}
function confirmedpasswordjsfunc() {
  let cpassword = document.getElementById('confirm').value;
  if (emptypassword(password) && emptypassword(cpassword)) {
    if (cpassword !== password) {
      // alert('password does not match');
      document.getElementById('float2').innerHTML = 'password does not match';
    } else if (cpassword === password) {
      document.getElementById('float2').innerHTML = '✅';
    }
  }
}

function emptypassword(currentPassword) {
  if (
    currentPassword !== undefined ||
    currentPassword !== null ||
    currentPassword !== ''
  ) {
    return true;
  } else {
    document.getElementById('float1').innerHTML = 'Should not be empty';
    return false;
    // console.log(`Please enter a password`);
  }
}
