import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { estilos } from './Stylesheet/estilos';


function Login() {
    return (
        <View style={estilos.fundo}>
            <View style={{ backgroundColor: 'white', shadowColor: 'gray', shadowOffset: { width: 0, height: 3 }, elevation: 5, shadowOpacity: 0.5, height: 70, borderRadius: 25, flexDirection: 'row' }}>
                <Image source={require('./img/carrinho.png')} style={{ width: 50, height: 50, alignSelf: 'center', marginLeft: 90 }} />
                <Text style={estilos.titulo}>Seu Carrinho</Text>
            </View>


            <View>
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>0x</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        <Text>  </Text>
                        <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                    </View>
                </View>
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>0x</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        <Text>  </Text>
                        <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                    </View>
                </View>
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>0x</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        <Text>  </Text>
                        <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                    </View>
                </View>

                <View style={{backgroundColor: 'white', marginTop: 50, height: 100, shadowColor: 'gray', shadowOffset: { width: 3, height: 3}, elevation: 7, shadowOpacity: 0.5, borderRadius: 25, marginHorizontal: 25, flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', marginLeft: 10}}>Confirmar Endereço: </Text>
                    <View style={{backgroundColor: 'white', width: 20, height: 20, borderRadius: 25, borderColor: 'gray', borderWidth: 3, marginLeft: 120, marginTop: 4}}>
                        <View style={{backgroundColor: 'green', width: 10, height: 10, borderRadius: 25, marginLeft: 2, marginTop: 2}}></View>
                    </View>
                </View>

                <View style={estilos.footer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                        </View>
                        <View>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                            <Text style={estilos.dadosProdutos}>teste</Text>
                        </View>
                    </View>
                    <Text style={estilos.botaoPedido}>Finalizar Pedido</Text>
                </View>

            </View>
        </View>
    );
}

export default Login; 