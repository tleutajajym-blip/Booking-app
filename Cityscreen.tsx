import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function CityScreen({ navigation }: any) {
  const [city, setCity] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Выберите город</Text>

      <Pressable
        style={styles.cityBox}
        onPress={() => setCity('Алматы')}
      >
        <Text style={styles.city}>
          {city || 'Выберите город'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
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
  title: {
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 30,
  },
  cityBox: {
    height: 62,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  city: {
    fontSize: 17,
    color: '#1B1923',
  },
  button: {
    height: 62,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});