import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const stored = await AsyncStorage.getItem('userProfile');
      if (stored) setUser(JSON.parse(stored));
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Settings</Text>
      <View style={styles.profileCard}>
        <Text style={styles.name}>{user?.name || 'Guest'}</Text>
        <Text style={styles.status}>{user?.status || 'No status'}</Text>
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', paddingHorizontal: 20 },
  profileCard: { backgroundColor: '#fff', margin: 20, padding: 30, borderRadius: 15, alignItems: 'center' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  status: { fontSize: 16, color: '#666', marginTop: 5 },
  logoutBtn: { marginHorizontal: 20, padding: 15, backgroundColor: '#ff4444', borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});