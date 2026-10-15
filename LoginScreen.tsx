import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        {/* Телефон */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>📱</Text>

          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            placeholderTextColor="#999"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Пароль */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputIconText}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Забыли пароль */}
        <Pressable
          style={styles.forgetBtn}
          onPress={() => navigation.navigate('Recovery')}
        >
          <Text style={styles.forgetText}>
            Забыли пароль?
          </Text>
        </Pressable>

        {/* Войти */}
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginBtnText}>
            Войти
          </Text>
        </Pressable>

        {/* Регистрация */}
        <Pressable
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.registerText}>
            У вас нет аккаунта?{' '}
            <Text style={styles.registerLink}>
              Зарегистрироваться
            </Text>
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButtonText: {
    fontSize: 38,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1B1923',
    lineHeight: 34,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    color: '#555',
    lineHeight: 26,
    marginBottom: 29,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },

  forgetBtn: {
    alignSelf: 'flex-end',
    marginTop: 2,
  },

  forgetText: {
    color: '#A811DA',
    fontSize: 18,
    fontWeight: '600',
  },

  loginBtn: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
    marginTop: 16,
    marginBottom: 14,
  },

  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  registerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },

  registerLink: {
    color: '#A811DA',
    fontWeight: '600',
  },
});