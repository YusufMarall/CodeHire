document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    if (!username) {
      window.location.href = "login.html";
      return;
    }
  
    document.getElementById("username").innerText = username;
  
    fetch(`http://localhost:5000/api/tests/${username}`)
      .then(res => res.json())
      .then(data => {
        const list = document.getElementById("historyList");
        data.forEach(entry => {
          const li = document.createElement("li");
          li.textContent = `Sonuç: ${entry.result} — Puan: ${entry.score}`;
          list.appendChild(li);
        });
      });
  });
  
  function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
  