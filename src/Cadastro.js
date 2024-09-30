import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { estilos } from './Stylesheet/estilos';
import { useState } from 'react';
import { insertUsuario, getUsuarioByEmail } from '../database/database.js'; // Importa funções do banco de dados
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import Login from './Login.js';

function Cadastro() {
  const navigation = useNavigation(); // Obtém a instância de navegação
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSubmit = async () => {
    // Verifica se os campos estão preenchidos
    if (!email || !senha || !confirmSenha) {
      alert("Todos os campos devem ser preenchidos");
      return;
    }

    // Remove espaços em branco do e-mail
    const trimmedEmail = email.trim();

    // Verifica se a senha tem no mínimo 6 caracteres
    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    // Verifica se as senhas são iguais
    if (senha !== confirmSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      // Verifica se o usuário já existe
      const usuarioExistente = await getUsuarioByEmail(trimmedEmail);
      if (usuarioExistente) {
        alert("Usuário já existe com este e-mail");
        return;
      }

      // Insere o novo usuário no banco de dados
      await insertUsuario(trimmedEmail, senha);
      alert("Usuário cadastrado com sucesso!");

      // Redireciona automaticamente para a tela de Login após o cadastro
      navigation.navigate('Login');
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar. Tente novamente.");
      console.error(error);
    }
  };

  // Função para ir para a tela de login sem cadastrar
  const irParaLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('./img/logo.png')} style={estilos.img} />

        <Text style={estilos.titulo}>Cadastre-se</Text>

        <TextInput 
          style={estilos.input} 
          placeholder='Email' 
          value={email}
          onChangeText={setEmail} 
        />
        <TextInput 
          style={estilos.input} 
          placeholder='Senha' 
          secureTextEntry={true} 
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput 
          style={estilos.input} 
          placeholder='Digite a senha novamente' 
          secureTextEntry={true} 
          value={confirmSenha}
          onChangeText={setConfirmSenha}
        />

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={estilos.enviar}>ENVIAR</Text>
        </TouchableOpacity>

        {/* Adicionando a opção de entrar na tela de Login */}
        <TouchableOpacity onPress={irParaLogin}>
          <Text style={estilos.textoLogin}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cadastro;
