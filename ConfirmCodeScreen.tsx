import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function ConfirmCodeScreen({ navigation }: any) {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Подтвердите номер</Text>

      <Text style={styles.subtitle}>
        Введите код, который мы отправили на номер
      </Text>

      <Text style={styles.phone}>+7 (700) 555 77 55</Text>

      <TextInput
        style={styles.codeInput}
        placeholder="Введите код"
        keyboardType="number-pad"
        maxLength={4}
        value={code}
        onChangeText={setCode}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NewPassword')}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </Pressable>

      <Pressable>
        <Text style={styles.resend}>Отправить код повторно</Text>
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
    color: '#1B1923',
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
    lineHeight: 25,
  },
  phone: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 25,
  },
  codeInput: {
    height: 62,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 20,
    fontSize: 20,
    marginBottom: 16,
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
    fontSize: 18,
    fontWeight: '600',
  },
  resend: {
    color: '#A811DA',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});