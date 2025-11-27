import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NEARBY_USERS = [
  { id: '1', name: 'Modiji', status: 'Doing Great' },
];

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}><Text style={styles.headerTitle}>Nearby Users</Text></View>
      <FlatList
        data={NEARBY_USERS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
             <View style={styles.avatar}><Text style={styles.avatarText}>{item.name[0]}</Text></View>
             <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.status}>{item.status}</Text>
             </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: { paddingTop: 60, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  userItem: { flexDirection: 'row', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f9f9f9' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#e1bee7', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: '#4a148c' },
  name: { fontSize: 16, fontWeight: 'bold' },
  status: { fontSize: 14, color: '#666', marginTop: 2 },
});