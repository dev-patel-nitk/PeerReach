import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const DUMMY_MESSAGES = [
  { id: '4', text: 'That sounds awesome. React Native?', isMe: true },
];

export default function ChatScreen({ route, navigation }) {
  const { userName } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: userName });
  }, [navigation, userName]);

  const renderMessage = ({ item }) => (
    <View style={[styles.bubble, item.isMe ? styles.bubbleRight : styles.bubbleLeft]}>
      <Text style={[styles.text, item.isMe ? styles.textRight : styles.textLeft]}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <FlatList 
        data={DUMMY_MESSAGES} 
        keyExtractor={item => item.id} 
        renderItem={renderMessage} 
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message..." />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  listContent: { padding: 15 },
  bubble: { maxWidth: '80%', padding: 12, borderRadius: 20, marginBottom: 10 },
  bubbleLeft: { alignSelf: 'flex-start', backgroundColor: '#fff', borderBottomLeftRadius: 5 },
  bubbleRight: { alignSelf: 'flex-end', backgroundColor: '#6200EE', borderBottomRightRadius: 5 },
  text: { fontSize: 16 },
  textLeft: { color: '#333' },
  textRight: { color: '#fff' },
  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: '#fff', alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#f0f0f0', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10, fontSize: 16 },
});