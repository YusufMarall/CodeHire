function submitTest() {
    const result = document.getElementById("resultInput").value;
    const username = localStorage.getItem("username");
  
    if (!username) {
      window.location.href = "login.html";
      return;
    }
  
    fetch("http://localhost:5000/api/submit_test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, result })
    })
    .then(res => res.json())
    .then(data => {
      alert(`Test gönderildi. Aldığınız puan: ${data.score}`);
      document.getElementById("resultInput").value = "";
    })
    .catch(() => alert("Test gönderilirken hata oluştu."));
  }
  