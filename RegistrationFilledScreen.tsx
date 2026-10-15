import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

export default function RegistrationFilledScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Регистрация</Text>

      <Text style={styles.label}>Имя</Text>
      <Text style={styles.value}>Руслан</Text>

      <Text style={styles.label}>Номер телефона</Text>
      <Text style={styles.value}>+7 (700) 555 77 55</Text>

      <Text style={styles.label}>Пароль</Text>
      <Text style={styles.value}>••••••••</Text>

      <Text style={styles.checked}>☑ Условия использования приняты</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('City')}
      >
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    color: '#888',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 22,
  },
  checked: {
    color: '#A811DA',
    fontSize: 16,
    marginBottom: 25,
  },
  button: {
    height: 62,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});