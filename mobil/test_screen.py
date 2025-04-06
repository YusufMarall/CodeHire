from kivy.uix.screenmanager import Screen

class TestScreen(Screen):
    def submit_test(self):
        # Kullanıcının testi gönderdiğini simüle eden fonksiyon
        # Burada backend ile entegrasyon yapılabilir.
        test_result = "Test başarıyla gönderildi!"
        self.ids.result_label.text = test_result
