import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getTestHistory } from '../services/api';
import { getUsername, clearUsername } from '../utils/storage';

export default function ProfileScreen({ navigation }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const username = await getUsername();
      const res = await getTestHistory(username);
      setHistory(res.data);
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    await clearUsername();
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Test Geçmişi:</Text>
      {history.map((entry, idx) => (
        <Text key={idx}>{entry.result} - {entry.score} puan</Text>
      ))}
      <Button title="Çıkış Yap" onPress={handleLogout} />
    </View>
  );
}
