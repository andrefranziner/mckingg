import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { estilos } from './Stylesheet/estilos';




function Login() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('./img/logo.png')} style={estilos.img} />

        <Text style={estilos.titulo}>Login</Text>

      <TextInput style={estilos.input} value='email'/>
      <TextInput style={estilos.input} value='senha'/>

      <Text style={estilos.enviarLogin}>ENVIAR</Text>
      </View>
    </View>
  ); 
}

export default Login;