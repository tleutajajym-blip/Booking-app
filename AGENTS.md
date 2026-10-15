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
import ForgetPassword from './ForgetPassword';

export default function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  
  const [page, setPage] = useState('login');
  // page = login


  const forgotPassword = () => { 
    setPage('forgot'); 
  };
  // page = forget 

  const handleBack = () => {
    setPage('login');
  };
  // pogin = login


  const loginPage = () =>{
    console.log("Войти батырмасы басылды!");
  };
  const handleLogin = () => {
    console.log('Зарегистрироваться бетіне өтті');
  };

  // Егер forgot беті ашық болса
  if (page === 'forgot') { 
    return ( <ForgetPassword onBack={handleBack} /> 
    ); }



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Кнопка "Назад" в виде стрелочки */}
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>
          {/* Иконка телефона в виде текстового символа 📞 */}
          <Text style={styles.inputIconText}>📞</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          {/* Иконка телефона в виде текстового символа 📞 */}
          <Text style={styles.inputIconText}>🔒</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пороль"
            placeholderTextColor="#AAA9B2"
          />
        </View>
        <Pressable 
         onPress={forgotPassword}>
          <Text style={styles.forgotPassword}>
            Забыль пороль?
          </Text>
        </Pressable>
        <Pressable style={styles.login}
          onPress={loginPage}
        >
          <Text style={styles.loginText}>Войти</Text>
        </Pressable>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTitle}>
            У вас нет аккаунта?
          </Text>
          <Pressable
            onPress={handleLogin}>
            <Text>
              Зарегистрироваться
            </Text>
          </Pressable>
        </View>
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

  /* Стили для текстовой стрелочки назад */
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
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
    marginBottom:26,
  },

  /* Стили для текстовой иконки телефона */
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
  forgotPassword:{
    marginLeft: 220,
    color:"#A811DA",
    marginBottom:26,
  },
  login:{
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#A811DA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 26,
  },
  loginText:{
    justifyContent:'center',
    color:"#FFFFFF",
    fontWeight:'700',
    fontSize: 18,
  },
  registerContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  registerTitle:{
    color:"#AAA9B2",
    marginBottom:6,
  }
});