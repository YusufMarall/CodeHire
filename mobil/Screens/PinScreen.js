import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function PinScreen({ navigation }) {
  const [pin, setPin] = useState('');

  const checkPin = () => {
    if (pin === '1234') {
      navigation.replace('Home'); // örnek ana ekran
    } else {
      Alert.alert('Hatalı PIN', 'Tekrar deneyin.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="PIN"
        keyboardType="numeric"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Giriş Yap" onPress={checkPin} />
    </View>
  );
}
