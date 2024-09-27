import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { insertUsuario, getUsuarioByEmail } from '../database/database.js';

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const user = await getUsuarioByEmail(email);
      if (user) {
        Alert.alert('Erro', 'Email já cadastrado.');
      } else {
        await insertUsuario(email, senha);
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setEmail('');
        setSenha('');
      }
    } catch (error) {
      Alert.alert('Erro', error.message || 'Falha ao cadastrar usuário.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CadastroScreen;
