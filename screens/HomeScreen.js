// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'TU_CLIENT_ID_DE_WEB',
    });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>Bienvenido, {user.displayName}!</Text>
          <Button title="Cerrar sesión" onPress={signOut} />
        </>
      ) : (
        <Text>No has iniciado sesión.</Text>
      )}
    </View>
  );
};

export default HomeScreen;
