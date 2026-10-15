import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function BookingScreen({ navigation }: any) {
  const [selectedTime, setSelectedTime] = useState('');

  const times = ['12:00', '15:00', '18:00'];

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Бронирование</Text>

      <Text style={styles.subtitle}>
        Выберите удобное время
      </Text>

      <View style={styles.times}>
        {times.map((time) => (
          <Pressable
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.selectedTime,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.selectedText,
              ]}
            >
              {time}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Забронировать</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 28,
  },
  back: {
    fontSize: 38,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 17,
    color: '#666',
    marginTop: 8,
    marginBottom: 25,
  },
  times: {
    gap: 12,
  },
  timeButton: {
    height: 55,
    backgroundColor: '#F8F8FA',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTime: {
    backgroundColor: '#A811DA',
  },
  timeText: {
    fontSize: 17,
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    height: 62,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});