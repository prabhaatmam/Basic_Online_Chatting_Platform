document.addEventListener('DOMContentLoaded', function() {
  const userForm = document.getElementById('container');
  const userList = document.getElementById('user-list');

  // Load existing users from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Display existing users
  users.forEach(function(user) {
    const li = document.createElement('li');
    li.textContent = `${user.username} - ${user.email}`;
    userList.appendChild(li);
  });

  // Form submission handler
  userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phhnum = document.getElementById('phnum').value;
    const chkkbox = document.getElementById('chkbox').value;

    // Create user object
    const user = {
      username: username,
      email: email,
      password: password,
      phhnum:phhnum,
      chkkbox:chkkbox
    };

    // Add user to the list
    const li = document.createElement('li');
    li.textContent = `${user.username} - ${user.email}-${user.password}-${user.phhnum}-${user.chkkbox}`;
    userList.appendChild(li);

    // Add user to local storage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form
    userForm.reset();

    // Hide the form after saving user
    userForm.style.display = 'none';
  });
});




document.addEventListener('DOMContentLoaded', function() {
  // Retrieve user data from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Display user data on profile page
  const userDetailsDiv = document.getElementById('user-details');
  userDetailsDiv.innerHTML = '<h2>Your Profile</h2>';

  if (users.length > 0) {
    const user = users[users.length - 1]; // Get the latest user
    const userHTML = `
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Password:</strong> ${user.password}</p>
      <p><strong>Phnum:</strong> ${user.phhnum}</p>
      <p><strong>chkbox:</strong> ${user.chkkbox}</p>
    `;
    userDetailsDiv.innerHTML += userHTML;
  } else {
    userDetailsDiv.innerHTML += '<p>No user data found.</p>';
  }
});



