import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  // other screen names and params
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

const userVideos = [
  { id: '1', thumbnail: 'https://static.zerochan.net/Makima.full.3404219.jpg' },
  { id: '2', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcLDwitcQzzsha-Vprw_Ko_HxE4xDPBBigA&s' },
  { id: '3', thumbnail: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/11/what-happened-to-makima.jpg' },
  // Add more video thumbnails
];

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

  const pickImage = async () => {
    // Ask for permission to access the gallery
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const renderVideoItem = ({ item }: { item: { id: string, thumbnail: string } }) => (
    <TouchableOpacity style={styles.videoItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.videoThumbnail} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: profileImage }} style={styles.profilePicture} />
        </TouchableOpacity>
        <Text style={styles.username}>PEEKAY</Text>
        <Text style={styles.bio}>This is A KNUST Social Media project undertaken by Peekay</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>200K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.5M</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={userVideos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.videoGrid}
      />
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;
const videoItemSize = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  header: {
    marginRight: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileInfo: {
    alignItems: 'center',
    padding: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontFamily: 'mon-b',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    fontFamily: 'mon',
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#666',
  },
  editProfileButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  editProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoGrid: {
    flex: 1,
  },
  videoItem: {
    width: videoItemSize,
    height: videoItemSize,
    margin: 1,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;
