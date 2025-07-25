// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Form Validation for Login
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      e.preventDefault();
      return;
    }

    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      usernameInput.focus();
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      passwordInput.focus();
      e.preventDefault();
      return;
    }

    // All validation passed
    e.preventDefault(); // Stop form from actually submitting
    alert(`Login successful!\nUsername: ${username}`);
    window.location.href = "index.html"; // Redirect to homepage
  });

  // Google login button handler
  const googleButton = document.querySelector(".google-login-button");
  if (googleButton) {
    googleButton.addEventListener("click", () => {
      alert("Google login not yet implemented.");
    });
  }
});
