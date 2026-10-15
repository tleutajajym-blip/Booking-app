import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

export default function PlaceDetailsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Grand Hotel</Text>

      <Text style={styles.rating}>⭐ 4.8</Text>

      <Text style={styles.address}>
        📍 Алматы, проспект Достык
      </Text>

      <Text style={styles.description}>
        Grand Hotel — комфортное место для отдыха,
        встреч и приятного времяпровождения.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Booking')}
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
    marginBottom: 12,
  },
  rating: {
    fontSize: 18,
    marginBottom: 15,
  },
  address: {
    fontSize: 17,
    color: '#555',
    marginBottom: 25,
  },
  description: {
    fontSize: 17,
    lineHeight: 26,
    color: '#555',
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