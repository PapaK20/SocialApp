import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import StoriesHeader from '@/components/StoriesHeader';

const HomeScreen = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <React.Fragment>
        <StoriesHeader />

      </React.Fragment>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  post: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
 
});

export default HomeScreen;