import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import CadastroScreen from './src/CadastroScreen';
import LoginScreen from './src/LoginScreen';

export default function App() {
  const [isCadastro, setIsCadastro] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {isCadastro ? (
        <CadastroScreen />
      ) : (
        <LoginScreen />
      )}
      <Button
        title={isCadastro ? "Ir para Login" : "Ir para Cadastro"}
        onPress={() => setIsCadastro(!isCadastro)}
      />
    </View>
  );
}
