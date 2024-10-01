import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { estilos } from './Stylesheet/estilos';


function Produto() {
    return (
        <View style={estilos.fundo}>
            <View style={estilos.header}>
                <Image source={require('./img/voltar.png')} style={estilos.imgEstilos} />
                <Image source={require('./img/menu.png')} style={estilos.imgEstilos} />
            </View>

            <View>
                <Image source={require('./img/hamburger.png')} style={estilos.imgProduto} />
                <View style={estilos.alteraQuantidade}>
                    <Image source={require('./img/menos.png')} style={estilos.quantidade} />
                    <Text style={{ color: 'gray', fontWeight: 'bold', marginTop: 7 }}>1</Text>
                    <Image source={require('./img/mais.png')} style={estilos.quantidade} />
                </View>

                <View>
                    <Text style={estilos.nomeProduto}>MC King Onions</Text>
                    <Text>akdsjhfafd asdhfjsahf mjlksadhkjsad shdflkjsahf jsadhfkjsaf</Text>
                    <View style={estilos.itensEstilo}>
                        <Text style={estilos.itens}></Text>
                        <Text> </Text>
                        <Text style={{ backgroundColor: '#FFE600', width: 14, height: 14, borderRadius: 25, }}></Text>
                        <Text> </Text>
                        <Text style={estilos.itens}></Text>
                        <Text> </Text>
                        <Text style={estilos.itens}></Text>
                    </View>
                </View>

                <View>
                    <View style={{backgroundColor: 'lightgray', width: 320, height: 50, alignSelf: 'center', marginTop: 130, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

                    </View>
                    <View style={{backgroundColor: 'lightgray', width: 320, height: 120, alignSelf: 'center', marginTop: 2, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                        <Text style={{backgroundColor: '#B50B0B', alignSelf: 'center', borderRadius: 25, color: 'white', fontWeight: 'bold', marginTop: 90, width: 75, height: 23, textAlign: 'center'}}>Carrinho</Text>
                    </View>
                </View>

            </View>
        </View>
    );
} 

export default Produto; 