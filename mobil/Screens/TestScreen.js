import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { submitTest } from '../services/api';
import { getUsername } from '../utils/storage';

export default function TestScreen({ navigation }) {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const username = await getUsername();
    const res = await submitTest(username, result);
    setStatus(`Test gönderildi! Puan: ${res.data.score}`);
  };

  return (
    <View>
      <TextInput placeholder="Test cevabınızı girin..." value={result} onChangeText={setResult} multiline />
      <Button title="Testi Gönder" onPress={handleSubmit} />
      <Button title="Profilime Git" onPress={() => navigation.navigate('Profile')} />
      {status ? <Text>{status}</Text> : null}
    </View>
  );
}
