import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Места</Text>
      <Text style={styles.subtitle}>Выберите место для бронирования</Text>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('PlaceDetails')}
      >
        <Text style={styles.cardTitle}>Grand Hotel</Text>
        <Text style={styles.cardText}>⭐ 4.8</Text>
        <Text style={styles.cardText}>Алматы</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>Royal Restaurant</Text>
        <Text style={styles.cardText}>⭐ 4.6</Text>
        <Text style={styles.cardText}>Алматы</Text>
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
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 17,
    color: '#777',
    marginTop: 5,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#F8F8FA',
    borderRadius: 20,
    padding: 22,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});