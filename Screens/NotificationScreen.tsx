import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

// Mock data for notifications
const notificationData = [
  {
    id: '1',
    type: 'like',
    username: 'Akwasi',
    content: 'Akwasi and 200 others liked your video',
    time: '2h',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    type: 'comment',
    username: 'PEEKAY',
    content: 'commented: Great video!',
    time: '4h',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    type: 'follow',
    username: 'PEEKAY',
    content: 'started following you',
    time: '1d',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  // Add more mock notifications as needed
];

const NotificationItem = ({ item }: { item: any }) => (
  <TouchableOpacity style={styles.notificationItem}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.notificationContent}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
    {item.type === 'follow' && (
      <TouchableOpacity style={[defaultStyles.Followbtn, { paddingRight: 20, paddingLeft: 20 }]}>
        <Text style={defaultStyles.btnText}>Follow</Text>
      </TouchableOpacity>
    )}
  </TouchableOpacity>
);

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <Animated.View 
      style={styles.container} 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
    >
      <Animated.View style={styles.header} entering={SlideInRight} 
      exiting={SlideOutLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </Animated.View>
      <FlatList
        data={notificationData}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'mon-b'
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  username: {
    fontFamily: 'mon-sb',
    marginBottom: 2,
  },
  content: {
    color: '#666',
    marginBottom: 2,
    fontFamily: 'mon',
  },
  time: {
    color: '#999',
    fontSize: 12,
    fontFamily: 'mon',
  },
  followButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  followButtonText: {
    color: 'white',
    fontFamily: 'mon-sb',
  },
});

export default NotificationScreen;