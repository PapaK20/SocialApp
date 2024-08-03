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

// dummy data
const trendingSearches = [
  'dance challenge',
  'funny cats',
  'cooking tips',
  'travel vlogs',
  'workout routine',
];

const suggestedAccounts = [
  { id: '1', username: 'dancer123', followers: '1.2M' },
  { id: '2', username: 'chef_master', followers: '500K' },
  { id: '3', username: 'travelbug', followers: '2.5M' },
];

const categories = [
  'Comedy', 'Dance', 'Sports', 'Food', 'Beauty', 'Fashion',
  'DIY', 'Animals', 'Music', 'Art', 'Education', 'Technology',
];

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  // other screen names and params
};

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

interface SearchScreenProps {
  navigation: SearchScreenNavigationProp;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderTrendingItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.trendingItem}>
      <Ionicons name="trending-up" size={20} color="#999" />
      <Text style={styles.trendingText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderAccountItem = ({ item }: { item: { id: string, username: string, followers: string } }) => (
    <TouchableOpacity style={styles.accountItem}>
      <View style={styles.accountAvatar}>
        <Text style={styles.avatarText}>{item.username[0].toUpperCase()}</Text>
      </View>
      <View>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.followers}>{item.followers} followers</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer} >
          <Ionicons name="search" size={23} color="#999" style={styles.searchIcon} />
          <TextInput //@ts-ignore
            onPress={() => navigation.navigate('Search1')}
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested accounts</Text>
          <FlatList
            data={suggestedAccounts}
            renderItem={renderAccountItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
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

export default SearchScreen;