const token = localStorage.getItem("jwt");
if (!token) {
  alert("You must be logged in!");
  window.location.href = "login.html";
}

fetch(`${API_BASE_URL}/secure/profile`, {
  method: "GET",
  headers: { Authorization: "Bearer " + token },
})
  .then((response) => response.text())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => console.error("Error:", error));

// ✅ Logout
function logout() {
  localStorage.removeItem("jwt");
  alert("Logged out successfully!");
  window.location.href = "login.html";
}
