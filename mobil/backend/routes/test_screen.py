import requests
from kivy.uix.screenmanager import Screen

class TestScreen(Screen):
    def submit_test(self):
        user_id = 1  # Giriş yapan kullanıcıdan alınmalı
        test_result = "Başarıyla Tamamlandı"
        response = requests.post("http://127.0.0.1:5000/api/test", json={
            "user_id": user_id,
            "result": test_result
        })
        if response.json().get("success"):
            self.ids.result_label.text = "Test başarıyla kaydedildi!"
        else:
            self.ids.result_label.text = "Hata oluştu."
