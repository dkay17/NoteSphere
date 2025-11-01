import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../utils/constants';

const RegisterScreen = ({ navigation }) => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    institution: '',
    level: '',
  });

  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password || !form.institution || !form.level) {
      Alert.alert('Missing Fields', 'Please fill in all required fields');
      return;
    }

    try {
      await register(form);
    } catch (error) {
      console.error('Registration error:', error);
      let errorMessage = 'Registration failed';
      
      if (error.message && error.message.includes('Network')) {
        errorMessage = 'Cannot connect to server. Please check:\n\n1. Backend is running\n2. Your IP address is correct\n3. Device is on same WiFi';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      Alert.alert('Registration Error', errorMessage);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create your account</Text>

      <TextInput style={styles.input} placeholder="Name" value={form.name} onChangeText={(v) => handleChange('name', v)} />
      <TextInput style={styles.input} placeholder="Email" value={form.email} onChangeText={(v) => handleChange('email', v)} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={form.password} onChangeText={(v) => handleChange('password', v)} secureTextEntry />
      <TextInput style={styles.input} placeholder="Institution" value={form.institution} onChangeText={(v) => handleChange('institution', v)} />
      <TextInput style={styles.input} placeholder="Level (e.g., 100, 200)" value={form.level} onChangeText={(v) => handleChange('level', v)} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: COLORS.bg },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: COLORS.text },
  input: { borderWidth: 1, borderColor: COLORS.border, padding: 15, marginBottom: 15, borderRadius: 8, backgroundColor: 'white' },
  button: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 8, marginBottom: 15 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  linkText: { textAlign: 'center', color: COLORS.primary },
});

export default RegisterScreen;
