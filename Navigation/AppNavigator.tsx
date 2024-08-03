import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, SimpleLineIcons  } from '@expo/vector-icons'; // Import the Ionicons library
import Colors from '@/constants/Colors';
import WelcomeScreen from '@/Screens/WelcomeScreen';
import SignupScreen from '@/Screens/SignupScreen';
import HomeScreen from '@/Screens/HomeScreen';
import ProfileScreen from '@/Screens/ProfileScreen';
import UploadScreen from '@/Screens/UploadScreen';
import MessagesScreen from '@/Screens/MessagesScreen';
import SearchScreen from '@/Screens/SearchScreen';
import { View, Platform } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import NotificationScreen from '@/Screens/NotificationScreen';
import SecSearchScreen from '@/Screens/SecSearchScreen';
import SettingsScreen from '@/Screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainTabs = () => (
  <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    tabBarLabelStyle: {
      fontFamily: 'mon-sb',
    }
  }}>
    
    <Tab.Screen
      name="HOME"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} /> // Example icon from Ionicons
        ),
      }}
    />

<Tab.Screen
      name="SEARCH"
      component={SearchScreen}
      options={{ headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" size={size} color={color} /> // Example icon from Ionicons
        ),
      }}
    />
    
    <Tab.Screen
      name="UPLOAD"
      component={UploadScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <View style={{
            position: 'absolute',
            bottom: 20, // Adjust this value to move the icon up or down
            height: 58,
            width: 58,
            borderRadius: 29,
            backgroundColor: Colors.primary, // Use your app's primary color
            justifyContent: 'center',
            alignItems: 'center',
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              },
              android: {
                elevation: 5,
              },
            }),
          }}>
            <Ionicons name="add-sharp" size={35} color="white" />
          </View>
        ),
        tabBarLabel: () => null, // Remove the label for this tab
      }}
    />
    <Tab.Screen
      name="MESSAGES" 
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" size={size} color={color} /> // Example icon from Ionicons
        ),
      }}
    />
    <Tab.Screen
      name="PROFILE"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} /> // Example icon from Ionicons
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: true, headerTransparent: true, title: '' }}
    />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
    <Stack.Screen name="Notification" component={NotificationScreen} options={{headerShown: false }}/>
    <Stack.Screen name="Search1" component={SecSearchScreen} options={{headerShown: false }}/>
    <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: true, headerTransparent: true, title: '' }}/>
  </Stack.Navigator>
);

export default AppNavigator;