let users = [];

  document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
  });

  document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
  });

  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    // Check if username already exists
    if (users.some(user => user.username === username)) {
      document.getElementById("signupError").innerText = "Username already exists.";
    } else {
      users.push({ username, email, password });
      document.getElementById("signupError").innerText = "";
      document.getElementById("signupContainer").style.display = "none";
      document.getElementById("loginContainer").style.display = "block";
      // Clear signup form
      document.getElementById("signupUsername").value = "";
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
    }
  });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    // Find user by username
    let user = users.find(user => user.username === username);

    if (user && user.password === password) {
      // Redirect to home or do something else on successful login
      window.location.href = "/index.html";
    } else {
      document.getElementById("loginError").innerText = "Invalid username or password.";
    }
  });