import React, { useEffect } from 'react';
import { View } from 'react-native';
import CadastroScreen from './src/CadastroScreen'; // Ajuste o caminho conforme necessário
import { createTables } from './services/databaseService.js'; // Ajuste o caminho conforme necessário

export default function App() {
  useEffect(() => {
    createTables();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CadastroScreen />
    </View>
  );
}
