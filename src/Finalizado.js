import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { estilos } from './Stylesheet/estilos';


function Login() {
    return (
        <View style={estilos.fundo}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./img/voltar.png')} style={{width: 50, height: 50}} />
                <Image source={require('./img/logo.png')} style={estilos.imgPedidos} />
                <Image source={require('./img/menu.png')} style={{width: 50, height: 50, marginLeft: 65,}}/>
            </View>
            <Text style={{borderColor: '#FF5C00', borderWidth: 1, marginTop: 5}}></Text>
               
               <View style={{backgroundColor: 'white', height: 100, shadowColor: 'gray', shadowOffset: { width: 0, height: 3 }, elevation: 5, shadowOpacity: 0.5, marginHorizontal: 30, borderRadius: 15, borderColor: 'black', borderWidth: 1, marginTop: 10, }}>
                <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 15}}>Estimativa de Entrega</Text>
                <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 15}}>18:30 - 19:00</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
                        <Text style={{backgroundColor: 'green', height: 5, width: 90, borderRadius: 25, marginTop: 35}}></Text>
                        <Text style={{backgroundColor: 'green', height: 5, width: 90, borderRadius: 25, marginTop: 35}}></Text>
                        <Text style={{backgroundColor: 'gray', height: 5, width: 90, borderRadius: 25, marginTop: 35}}></Text>
                    </View>
                

                <View style={{backgroundColor: 'white', borderColor: 'black', borderWidth: 1, marginTop: 380, height: 130, justifyContent: 'space-between', borderRadius: 15, shadowColor: 'gray', shadowOffset: { width: 0, height: 3 }, elevation: 5, shadowOpacity: 0.52, padding: 5}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{backgroundColor: 'green', height: 20, width: 20 , marginTop: 1, borderRadius: 25, marginLeft: 5}}></Text>
                        <Text style={{fontWeight: 'bold', marginLeft: 3}}>Alguma coisa</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{backgroundColor: 'green',  height: 20, width: 20, marginTop: 1, borderRadius: 25, marginLeft: 5}}></Text>
                        <Text style={{fontWeight: 'bold', marginLeft: 3}}>Alguma coisa</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{backgroundColor: 'green',  height: 20, width: 20, marginTop: 1, borderRadius: 25, marginLeft: 5}}></Text>
                        <Text style={{fontWeight: 'bold', marginLeft: 3}}>Alguma coisa</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{backgroundColor: 'gray', height: 20, width: 20 , marginTop: 1, borderRadius: 25, marginLeft: 5}}></Text>
                        <Text style={{fontWeight: 'bold', marginLeft: 3}}>Alguma coisa</Text>
                    </View>
                </View>
               </View>
        </View>
    );
}

export default Login;