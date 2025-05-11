import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';

export default function RentalHistoryScreen() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetchRentals();
  }, []);

  const fetchRentals = async () => {
    const res = await fetch('http://localhost:5000/api/rentals');
    const data = await res.json();
    setRentals(data);
  };

  const cancelRental = async (id) => {
    const res = await fetch(`http://localhost:5000/api/rentals/${id}`, { method: 'DELETE' });
    if (res.ok) {
      Alert.alert('İptal Edildi');
      fetchRentals();
    }
  };

  return (
    <FlatList
      data={rentals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.softwareName}</Text>
          <Text>Durum: {item.status}</Text>
          {item.status === 'aktif' && (
            <Button title="İptal Et" onPress={() => cancelRental(item.id)} />
          )}
        </View>
      )}
    />
  );
}
