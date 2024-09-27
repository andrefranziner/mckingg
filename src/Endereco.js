import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { estilos } from './Stylesheet/estilos';

function Login() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.containerEndereco}>
        <Text style={estilos.titulo}>Endereço</Text>

      <TextInput style={estilos.input} value='Rua:'/>
      <TextInput style={estilos.input} value='CEP:'/>
      <TextInput style={estilos.input} value='Cidade:'/>
      <TextInput style={estilos.input} value='Bairro:'/>
      <TextInput style={estilos.input} value='Estado:'/>

      <Text style={estilos.enviar}>SALVAR</Text>
      </View>
    </View>
  ); 
}

export default Login;