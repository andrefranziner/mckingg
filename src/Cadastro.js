import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { estilos } from './Stylesheet/estilos';
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para cadastrar o usuário
    // Após o cadastro, navegue para a próxima tela
    navigation.navigate('ProximaPagina'); // Substitua 'ProximaPagina' pelo nome da sua tela
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('./img/logo.png')} style={estilos.img} />

        <Text style={estilos.titulo}>Cadastre-se</Text>

        <TextInput style={estilos.input} placeholder='Email' />
        <TextInput style={estilos.input} placeholder='Senha' secureTextEntry={true} />
        <TextInput style={estilos.input} placeholder='Digite a senha novamente' secureTextEntry={true} />

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={estilos.enviar}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;