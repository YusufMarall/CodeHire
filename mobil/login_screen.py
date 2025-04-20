from kivy.uix.screenmanager import Screen
import requests

class LoginScreen(Screen):
    def login(self):
        username = self.ids.username_input.text
        password = self.ids.password_input.text

        response = requests.post("http://127.0.0.1:5000/api/login", json={
            "username": username,
            "password": password
        })

        if response.status_code == 200:
            self.manager.get_screen("test").username = username
            self.manager.current = "test"
        else:
            self.ids.login_status.text = "Giriş başarısız!"
