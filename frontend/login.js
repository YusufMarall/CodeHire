// frontend/login.js
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const result = await response.json();

        if (result.success) {
            alert("Giriş başarılı!");
            // Başarılı giriş sonrası yönlendirme
            window.location.href = "/dashboard";
        } else {
            alert(result.message || "Giriş başarısız!");
        }
    } else {
        alert("Kullanıcı adı ve şifre gerekli!");
    }
});
