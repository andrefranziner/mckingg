import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { estilos } from './Stylesheet/estilos';
import { insertEndereco } from '../database/database'; // Importa a função de inserção de endereço

function Endereco({ idUsuario }) { // Recebe o ID do usuário como prop
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');

  const buscarEndereco = async (cep) => {
    const cepNumerico = cep.replace(/\D/g, ''); // Remove o traço e outros caracteres não numéricos

    if (cepNumerico.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cepNumerico}/json/`);
        if (response.data.erro) {
          Alert.alert('CEP inválido!');
          return;
        }
        setRua(response.data.logradouro);
        setCidade(response.data.localidade);
        setBairro(response.data.bairro);
        setEstado(response.data.uf);
      } catch (error) {
        Alert.alert('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
      }
    } else {
      Alert.alert('CEP inválido! Insira um CEP com 8 dígitos.');
    }
  };

  const handleCepChange = (text) => {
    setCep(text);
    if (text.length >= 8) {
      buscarEndereco(text);
    }
  };

  const salvarEndereco = async () => {
    if (!cep || !rua || !cidade || !bairro || !estado) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await insertEndereco(idUsuario, rua, cep, cidade, bairro, estado); // Chama a função de inserção no banco
      Alert.alert('Endereço salvo com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao salvar o endereço. Tente novamente.');
    }
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.containerEndereco}>
        <Text style={estilos.titulo}>Endereço</Text>

        <TextInput
          style={estilos.input}
          placeholder="CEP:"
          value={cep}
          onChangeText={handleCepChange}
          keyboardType="numeric"
          maxLength={9}
        />
        <TextInput
          style={estilos.input}
          placeholder="Rua:"
          value={rua}
          editable={false} // Preenchido automaticamente
        />
        <TextInput
          style={estilos.input}
          placeholder="Cidade:"
          value={cidade}
          editable={false}
        />
        <TextInput
          style={estilos.input}
          placeholder="Bairro:"
          value={bairro}
          editable={false}
        />
        <TextInput
          style={estilos.input}
          placeholder="Estado:"
          value={estado}
          editable={false}
        />

        <TouchableOpacity onPress={salvarEndereco}>
          <Text style={estilos.enviar}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Endereco;
