import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import { StackNavigationProp } from '@react-navigation/stack';
import { defaultStyles } from '@/constants/Styles';

type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  // other screen names and params
};

type UploadScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Upload'>;

interface UploadScreenProps {
  navigation: UploadScreenNavigationProp;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ navigation }) => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    // Logic to handle post action
    console.log('Image URI:', image);
    console.log('Caption:', caption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Ionicons name="camera" size={40} color="#999" />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.captionInput}
          placeholder="Write a caption..."
          value={caption}
          onChangeText={setCaption}
          multiline
        />
        <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Upload</Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'mon-b'
  },
  postButton: {
    fontSize: 16,
    color: '#3493D9',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  imagePicker: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  captionInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    minHeight: 100,
  },
});

export default UploadScreen;
