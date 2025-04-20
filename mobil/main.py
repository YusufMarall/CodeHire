from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from screens.login_screen import LoginScreen
from screens.home_screen import HomeScreen
from screens.test_screen import TestScreen

class MainApp(App):
    def build(self):
        # Ekran yönetimini tanımla
        sm = ScreenManager()
        sm.add_widget(LoginScreen(name="login"))
        sm.add_widget(HomeScreen(name="home"))
        sm.add_widget(TestScreen(name="test"))
        return sm

if __name__ == "__main__":
    MainApp().run()
