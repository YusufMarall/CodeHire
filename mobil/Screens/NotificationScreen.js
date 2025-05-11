import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notifications')
      .then((res) => res.json())
      .then(setNotifications);
  }, []);

  const deleteNotification = (id) => {
    Alert.alert('Bildirim silindi');
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const renderRightActions = (id) => (
    <View style={{ backgroundColor: 'red', justifyContent: 'center', padding: 20 }}>
      <Text style={{ color: 'white' }} onPress={() => deleteNotification(id)}>Sil</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {notifications.map((notif) => (
        <Swipeable
          key={notif.id}
          renderRightActions={() => renderRightActions(notif.id)}
        >
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{notif.message}</Text>
          </View>
        </Swipeable>
      ))}
    </GestureHandlerRootView>
  );
}
