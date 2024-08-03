import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons
import { useNavigation } from '@react-navigation/native';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useTheme } from '@/hooks/ThemeContext';

const dummyStories = [
  { id: 'your_story', user: 'Your Story', imageUrl: 'https://via.placeholder.com/100' },
  { id: '1', user: 'User1', imageUrl: 'https://via.placeholder.com/100' },
  { id: '2', user: 'User2', imageUrl: 'https://via.placeholder.com/100' },
  { id: '3', user: 'User3', imageUrl: 'https://via.placeholder.com/100' },
  { id: '4', user: 'User4', imageUrl: 'https://via.placeholder.com/100' },
  { id: '5', user: 'User5', imageUrl: 'https://via.placeholder.com/100' },
  { id: '6', user: 'User6', imageUrl: 'https://via.placeholder.com/100' },
  { id: '7', user: 'User7', imageUrl: 'https://via.placeholder.com/100' },
];

const StoriesHeader = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  const isDarkMode = theme === 'dark';

  // Define dynamic styles based on the theme
  const dynamicStyles = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };


  return (
    <SafeAreaView style={[styles.safeArea, dynamicStyles]}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <View style={[styles.header, { borderBottomColor: isDarkMode ? '#333' : '#DBDBDB' }]}>
        <Text style={[styles.logoText, { color: dynamicStyles.color }]}>Social App</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity 
            style={styles.iconButton} //@ts-ignore
             onPress={() => navigation.navigate('Notification')}
          >
            <Ionicons name="notifications-outline" size={24} color={dynamicStyles.color} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={toggleTheme}>
            <MaterialCommunityIcons 
              name={isDarkMode ? "toggle-switch" : "toggle-switch-off-outline"} 
              size={30} 
              color={dynamicStyles.color} 
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        {dummyStories.map((story, index) => (
          <TouchableOpacity key={story.id} style={styles.storyItem}>
            <View style={[styles.storyRing, index === 0 && styles.yourStoryRing]}>
              <Image source={{ uri: story.imageUrl }} style={styles.storyImage} />
            </View>
            <Text style={[styles.storyUsername, { color: dynamicStyles.color }]}>{story.user}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  logoText: {
    fontFamily: 'mon-sb',  // You might need to import this font
    fontSize: 24,
  },
  headerIcons: {
    flexDirection: 'row',
    textAlignVertical: 'auto',
    alignItems: 'center'
  },
  iconButton: {
    marginLeft: 20,
  },
  storiesContainer: {
    paddingVertical: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginLeft: 15,
    width: 70,
  },
  storyRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourStoryRing: {
    borderColor: '#DBDBDB',
  },
  storyImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'mon',
  },
});

export default StoriesHeader;