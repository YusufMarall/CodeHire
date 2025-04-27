import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUsername = async (username) => {
  await AsyncStorage.setItem('username', username);
};

export const getUsername = async () => {
  return await AsyncStorage.getItem('username');
};

export const clearUsername = async () => {
  await AsyncStorage.removeItem('username');
};
