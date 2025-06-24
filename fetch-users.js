// fetch-users.js
// Fetches sample user data from JSONPlaceholder and displays it in the "about.html" page

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("user-data");

  if (container) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        container.innerHTML = users
          .map(
            (user) => `
            <div class="user-card">
              <h3>${user.name}</h3>
              <p>Email: ${user.email}</p>
              <p>Company: ${user.company.name}</p>
            </div>`
          )
          .join("");
      })
      .catch((error) => {
        container.innerHTML = "<p>Failed to load user data.</p>";
        console.error("Error fetching users:", error);
      });
  }
});
