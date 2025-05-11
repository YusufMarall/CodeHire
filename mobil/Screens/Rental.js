// RentalsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const RentalsScreen = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRentals();
  }, []);

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/rentals');
      const data = await response.json();
      setRentals(data);
    } catch (error) {
      Alert.alert('Hata', 'Kiralamalar yüklenemedi.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <FlatList
      data={rentals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.softwareName}</Text>
          <Text>{item.startDate} → {item.endDate}</Text>
          <Text>Durum: {item.status}</Text>
        </View>
      )}
    />
  );
};

export default RentalsScreen;
