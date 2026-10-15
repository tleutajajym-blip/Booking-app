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

export default function RecoveryScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

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
          Восстановление пароля
        </Text>

        <Text style={styles.subtitle}>
          Введите номер телефона, чтобы восстановить пароль.
        </Text>

        {/* Номер телефона */}
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

        {/* Продолжить */}
        <Pressable
          style={styles.continueBtn}
          onPress={() => navigation.navigate('ConfirmCode')}
        >
          <Text style={styles.continueBtnText}>
            Продолжить
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

  continueBtn: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
    marginTop: 16,
  },

  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});