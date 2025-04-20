from kivy.uix.screenmanager import Screen
import requests

class TestScreen(Screen):
    username = ""

    def submit_test(self):
        result = self.ids.test_input.text

        response = requests.post("http://127.0.0.1:5000/api/submit_test", json={
            "username": self.username,
            "result": result
        })

        if response.status_code == 200:
            self.ids.test_status.text = "Test sonucu gönderildi!"
        else:
            self.ids.test_status.text = "Gönderim hatası!"

    def load_history(self):
        res = requests.get(f"http://127.0.0.1:5000/api/tests/{self.username}")
        if res.status_code == 200:
            results = res.json()
            self.ids.history.text = "\n".join([r["result"] for r in results])
