from kivy.uix.screenmanager import Screen

class HomeScreen(Screen):
    def go_to_test(self):
        # Test ekranına geçiş
        self.manager.current = "test"
