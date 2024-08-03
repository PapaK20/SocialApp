import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

// dummy data
const trendingSearches = [
  'dance challenge',
  'funny cats',
  'cooking tips',
  'travel vlogs',
  'workout routine',
];


const SecSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderTrendingItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.trendingItem}>
      <Ionicons name="trending-up" size={20} color="#999" />
      <Text style={styles.trendingText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.header} entering={SlideInRight} 
      exiting={SlideOutLeft}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={23} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </Animated.View>
      
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending searches</Text>
          <FlatList
            data={trendingSearches}
            renderItem={renderTrendingItem}
            keyExtractor={(item) => item}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 45,
    width: '100%',
    fontSize: 16,
    alignItems: 'center',
    fontFamily: 'mon',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'mon-b',
    marginBottom: 10,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trendingText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'mon',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  accountAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 20,
    fontFamily: 'mon-sb',
  },
  username: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  followers: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'mon',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon',
  },
});

export default SecSearchScreen;