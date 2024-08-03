import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const dummyChats = [
  { id: '1', user: 'John Doe', lastMessage: 'Hey, how are you?', profileImage: { uri: 'https://example.com/john.jpg' } },
  { id: '2', user: 'Jane Smith', lastMessage: 'Did you finish the project?', profileImage: { uri: 'https://example.com/jane.jpg' } },
  // Add more dummy chats as needed
];

const MessagesScreen = () => {
  const renderChatItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.profileImageContainer}>
        <Image source={item.profileImage} style={styles.profileImage} />
      </View>
      <View style={styles.chatContent}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderChatScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={dummyChats}
          renderItem={renderChatItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  return renderChatScreen();

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatContent: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
});

export default MessagesScreen;