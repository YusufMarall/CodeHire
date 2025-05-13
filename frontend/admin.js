function fetchUserTests() {
  const username = document.getElementById("searchUser").value;
  if (!username) return alert("Kullanıcı adı giriniz");

  fetch(`http://localhost:5000/api/tests/${username}`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("testList");
      list.innerHTML = "";

      data.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.result} — ${item.score} puan`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Sil";
        delBtn.onclick = () => deleteTest(username, index);

        li.appendChild(delBtn);
        list.appendChild(li);
      });
    });
}

function deleteTest(username, index) {
  fetch(`http://localhost:5000/api/tests/${username}/${index}`, {
    method: "DELETE"
  })
    .then(res => {
      if (res.ok) {
        alert("Silindi");
        fetchUserTests();
      } else {
        alert("Silinemedi");
      }
    });
}
