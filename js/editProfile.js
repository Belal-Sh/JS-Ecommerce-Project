// // User data
let get_user = localStorage.getItem('username');
let get_email = localStorage.getItem('email');

// Variable
let userNewName = document.getElementById('userNewName');
let newUserEmail = document.getElementById('userNewEmail');
let editProfile = document.getElementById('edit-form')

// set values
userNewName.value = get_user;
userNewEmail.value = get_email;

// Events
editProfile.addEventListener('submit', editUserProfile);

function editUserProfile(e) {
  e.preventDefault();

  localStorage.setItem('username', userNewName.value);
  localStorage.setItem('email', userNewEmail.value);
  setTimeout(() => {
    window.location = 'profile.html';
  }, 500)


}
