import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { login } from '../services/api';
import { saveUsername } from '../utils/storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      await saveUsername(username);
      navigation.navigate('Test');
    } catch (e) {
      setError('Giriş başarısız.');
    }
  };

  return (
    <View>
      <TextInput placeholder="Kullanıcı Adı" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Şifre" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Giriş Yap" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
