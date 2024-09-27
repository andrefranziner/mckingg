import { StyleSheet, Text, View, Image } from 'react-native';
import { estilos } from './Stylesheet/estilos';



function App() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.container}>
        <Image source={require('./img/logo.png')} style={estilos.img} />
        <View style={estilos.fontes}>
            <View>
              <Text style={estilos.texto1}>Já possui cadastro?</Text>
              <Text style={estilos.botaoCadastro}>Cadastre-se</Text>
            </View>
            <View style={estilos.linha}></View>
            <View>
              <Text style={estilos.texto2}>Faça seu Login</Text>
              <Text style={estilos.botaoLogin}>Login</Text>
            </View>
        </View>
        <View style={estilos.facebook}>
          <Image source={require('./img/facebook.png')} style={{width: 30, height: 30, marginRight: 10}}/>
          <Text style={estilos.TextoBotao}>Continue com Facebook</Text>
        </View>
        <View style={estilos.google}>
          <Image source={require('./img/google.png')} style={{width: 30, height: 30, marginRight: 10, backgroundColor: '#4384ed'}}/>
          <Text style={estilos.TextoBotao}>Continue com Google</Text>
        </View>
      </View>
    </View>
  );
}

export default App;