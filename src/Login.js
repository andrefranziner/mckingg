import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react'; // Importar useState
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import { estilos } from './Stylesheet/estilos';
import { getUsuarioByEmail } from '../database/database'; // Importa a função do banco de dados
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cadastro from './Cadastro';

function Login() {
  const [email, setEmail] = useState(''); // Definindo o estado para o email
  const [senha, setSenha] = useState(''); // Definindo o estado para a senha
  const navigation = useNavigation(); // Obtém a instância de navegação

  const handleLogin = async () => {
    try {
        const usuario = await getUsuarioByEmail(email);

        // Verifica se o usuário foi encontrado e se a senha está correta
        if (usuario && usuario.senha === senha) {
            Alert.alert("Login realizado com sucesso!");

            // Armazenar informações do usuário (como ID ou email)
            await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

            // Redireciona para a página de Pedidos
            navigation.navigate('Pedidos');
        } else {
            Alert.alert("E-mail ou senha incorretos!");
        }
    } catch (error) {
        Alert.alert("Ocorreu um erro ao realizar o login. Tente novamente.");
        console.error(error);
    }
};

  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('./img/logo.png')} style={estilos.img} />

        <Text style={estilos.titulo}>Login</Text>

        <TextInput 
          style={estilos.input} 
          placeholder="Email" // Adiciona um placeholder
          value={email} 
          onChangeText={setEmail} // Atualiza o estado do email
        />
        <TextInput 
          style={estilos.input} 
          placeholder="Senha" // Adiciona um placeholder
          secureTextEntry // Para ocultar a senha
          value={senha} 
          onChangeText={setSenha} // Atualiza o estado da senha
        />

        <TouchableOpacity onPress={handleLogin}>
          <Text style={estilos.enviarLogin}>ENVIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={irParaCadastro}>
          <Text style={estilos.textoLogin}>Ainda não tem uma conta? Realize o cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
