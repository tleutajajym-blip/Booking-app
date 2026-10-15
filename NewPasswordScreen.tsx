import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function NewPasswordScreen({ navigation }: any) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Сбросить пароль</Text>

      <Text style={styles.subtitle}>
        Придумайте новый пароль для вашего аккаунта.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Новый пароль"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Повторите пароль"
        placeholderTextColor="#999"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
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
  back: {
    fontSize: 38,
    marginBottom: 24,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: '#666',
    marginBottom: 25,
  },
  input: {
    height: 62,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 17,
    marginBottom: 14,
  },
  button: {
    height: 62,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});