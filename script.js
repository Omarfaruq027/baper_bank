// addEventListener in button
document.getElementById("submit-button").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "omar@bank.com" && userPassword == "joy") {
    window.location.href = "bank.html";
  }
});
