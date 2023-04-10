import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PaywallScreen from './Screens/PaywallScreen';
import ComeingSoonScreen from './Screens/ComeingSoonScreen';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  ComeingSoon: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Paywall' component={PaywallScreen} options={{headerShown: false, presentation: 'modal'}} />
        <Stack.Screen name='ComeingSoon' component={ComeingSoonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
