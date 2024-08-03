import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from './hooks/ThemeContext';


const App = () => {
  const [loaded, error] = useFonts({
    'mon': require('./assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('./assets/fonts/Montserrat-SemiBold.ttf'), // Add other fonts if needed
    'mon-b': require('./assets/fonts/Montserrat-Bold.ttf'), // Add other fonts if needed
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;