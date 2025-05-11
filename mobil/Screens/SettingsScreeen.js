import React, { useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('tr');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Tema: {isDarkMode ? 'Koyu' : 'Açık'}</Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />

      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Dil: {language === 'tr' ? 'Türkçe' : 'English'}
      </Text>
      <Button title="Dili Değiştir" onPress={toggleLanguage} />
    </View>
  );
}
