import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import ConfirmCodeScreen from './screens/ConfirmCodeScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RegistrationFilledScreen from './screens/RegistrationFilledScreen';
import CityScreen from './screens/CityScreen';
import HomeScreen from './screens/HomeScreen';
import PlaceDetailsScreen from './screens/PlaceDetailsScreen';
import BookingScreen from './screens/BookingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen
          name="RegistrationFilled"
          component={RegistrationFilledScreen}
        />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
        />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
