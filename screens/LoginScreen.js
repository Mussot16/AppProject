// screens/LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';


const LoginScreen = ({ navigation }) => {
  const signInWithGoogle = async () => {
    try {
      const { idToken } = await auth().signInWithGoogle();
      // Guardar token y datos de usuario en la base de datos
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '500px', height: '1200px', backgroundColor: 'red'}}>
      <Text>Inicio de Sesión</Text>
      <Button title="Iniciar sesión con Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
