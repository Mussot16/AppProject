// Corregido el nombre del archivo
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AppointmentScreen from './screens/AppointmentScreen'; // Corregido el nombre del archivo

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  name="Login" component={LoginScreen} options={{ title: 'Login'}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Appointments" component={AppointmentScreen} /> {/* Corregido el nombre del componente */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
