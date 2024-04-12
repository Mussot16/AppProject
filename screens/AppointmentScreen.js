// screens/AppointmentScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import database from '@react-native-firebase/database';

const AppointmentScreen = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const snapshot = await database().ref('appointments').once('value');
      if (snapshot.exists()) {
        const appointmentsData = snapshot.val();
        const appointmentsArray = Object.values(appointmentsData);
        setAppointments(appointmentsArray);
      }
    };

    getAppointments();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ borderBottomWidth: 1, padding: 10 }}>
      <Text>Fecha: {item.date}</Text>
      <Text>Hora: {item.time}</Text>
      <Text>Paciente: {item.patient}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Agregar Cita" onPress={() => console.log('Agregar Cita')} />
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AppointmentScreen;
