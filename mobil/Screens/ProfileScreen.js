// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, Alert } from 'react-native';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      setProfile({ name: data.name, email: data.email });
    } catch (error) {
      Alert.alert('Hata', 'Profil yüklenemedi.');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      await fetch('https://api.example.com/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      Alert.alert('Başarılı', 'Profil güncellendi!');
    } catch (error) {
      Alert.alert('Hata', 'Profil güncellenemedi.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={{ padding: 20 }}>
      <Text>Ad:</Text>
      <TextInput value={profile.name} onChangeText={(name) => setProfile({ ...profile, name })} />
      <Text>Email:</Text>
      <TextInput value={profile.email} onChangeText={(email) => setProfile({ ...profile, email })} />
      <Button title="Güncelle" onPress={updateProfile} />
    </View>
  );
};

export default ProfileScreen;
