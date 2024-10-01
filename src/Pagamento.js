import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { estilos } from './Stylesheet/estilos';


function Pagamento() {
    return (
        <View style={estilos.fundo}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./img/voltar.png')} style={{width: 50, height: 50}} />
                <Image source={require('./img/logo.png')} style={estilos.imgPedidos} />
                <Image source={require('./img/menu.png')} style={{width: 50, height: 50, marginLeft: 65,}}/>
            </View>
            <Text style={{borderColor: '#FF5C00', borderWidth: 1, marginTop: 5}}></Text>
               
               <View>
                <Text style={{color: '#B50B0B', fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 7}}>MÉTODOS DE PAGAMENTO</Text>
                <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20}}>Selecione sua forma de pagamento: </Text>
               </View>

               <View style={{backgroundColor: '#D9D9D9', borderRadius: 15, padding: 15, marginHorizontal: 15, borderColor: 'black', borderWidth: 1, marginTop: 12}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./img/pix.png')} style={{width: 35, height:35,  marginVertical: 5}}/>
                    <Text style={{marginTop: 15, fontWeight: 'bold', marginLeft: 5}}>Pix</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./img/card.png')} style={{width: 35, height:35, marginVertical: 5}}/>
                    <Text style={{marginTop: 15, fontWeight: 'bold', marginLeft: 5}}>Débito/Crédito</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./img/ref.png')} style={{width: 35, height:35,  marginVertical: 5}}/>
                    <Text style={{marginTop: 15, fontWeight: 'bold', marginLeft: 5}}>Vale Refeição</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./img/money.png')} style={{width: 35, height:35,  marginVertical: 5}}/>
                    <Text style={{marginTop: 15, fontWeight: 'bold', marginLeft: 5}}>Dinheiro</Text>
                </View>
               </View>

               <View style={{backgroundColor: 'white', marginTop: 250, height: 100, borderRadius: 25,  shadowColor: 'gray',shadowOffset: { width: 0, height: -3 },elevation: 5, shadowOpacity: 0.5,}}>
                <Text style={{backgroundColor: '#B50B0B', marginTop: 20, textAlign: 'center', borderRadius: 25, marginHorizontal: 100, height: 25, color: 'white', fontWeight: 'bold', borderColor: 'red', borderWidth: 1}}>Finalizar pedido</Text>
               </View>
        </View>
    );
}

export default Pagamento;