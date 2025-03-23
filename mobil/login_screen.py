from kivy.uix.screenmanager import Screen

class LoginScreen(Screen):
    def login(self):
        # Kullanıcı giriş işlemleri (backend API'ye bağlan)
        username = self.ids.username.text
        password = self.ids.password.text
        if username == "admin" and password == "1234":  # Basit kontrol (backend'e bağlanabilir)
            self.manager.current = "home"  # Home ekranına geç
        else:
            self.ids.error.text = "Hatalı kullanıcı adı veya şifre"
