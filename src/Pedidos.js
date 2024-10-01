import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { estilos } from './Stylesheet/estilos';


function Pedidos() {
    return (
        <View style={estilos.fundo}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./img/voltar.png')} style={{width: 50, height: 50}} />
                <Image source={require('./img/logo.png')} style={estilos.imgPedidos} />
                <Image source={require('./img/menu.png')} style={{width: 50, height: 50, marginLeft: 65,}}/>
            </View>
            <Text style={{borderColor: '#FF5C00', borderWidth: 1, marginTop: 5}}></Text>
                <TextInput style={estilos.inputPesquisa} value='Pesquisar'/>
            <View style={estilos.containerPedidos}>
                <ScrollView>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/hamb.png')} style={{width: 87, height: 87, marginLeft: 10, marginTop: 5}}/>
                    </View>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/hamb1.png')} style={{width: 70, height: 70, marginLeft: 15, marginTop: 10}}/>
                    </View>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/hamb3.png')} style={{width: 85, height: 85, marginLeft: 10, marginTop: 5}}/>
                    </View>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/padoca.png')} style={{width: 72, height: 72, marginLeft: 15, marginTop: 12}}/>
                    </View>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/hamburgao.png')} style={{width: 80, height: 80, marginLeft: 12, marginTop: 10}}/>
                    </View>
                    <View style={estilos.pedidos}>
                        <Image source={require('./img/hamb2.png')} style={{width: 80, height: 80, marginLeft: 12, marginTop: 10}}/></View> 
                </ScrollView>
            </View>
            <View style={estilos.barraInteracao}>
                <Image source={require('./img/talher.png')} style={{width: 30, height: 34, marginTop: 10}}/>
                <Image source={require('./img/pesquisa.png')} style={{width: 50, height: 50, marginTop: 2}}/>
                <Image source={require('./img/carrinho.png')} style={{width: 45, height: 40, marginTop: 8}}/>
                <Image source={require('./img/perfil.png')} style={{width: 50, height: 50, marginTop: 5}}/>
            </View>
        </View>
    );
}

export default Pedidos;