import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react'; // Importar useState
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import { estilos } from './Stylesheet/estilos';
import { getUsuarioByEmail } from '../database/database'; // Importa a função do banco de dados

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
        
        // Redireciona para a página de Pedidos
        navigation.navigate('Pedidos'); // Nome da tela de Pedidos no seu Navigator
      } else {
        Alert.alert("E-mail ou senha incorretos!");
      }
    } catch (error) {
      Alert.alert("Ocorreu um erro ao realizar o login. Tente novamente.");
      console.error(error);
    }
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
      </View>
    </View>
  );
}

export default Login;
