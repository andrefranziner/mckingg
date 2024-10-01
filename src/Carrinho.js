import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { estilos } from './Stylesheet/estilos'; // Certifique-se que o estilo está correto
 
function Carrinho() {
    // Estado para controlar a quantidade dos itens
    const [quantidades, setQuantidades] = useState([0, 0, 0]); // Inicializando 3 produtos com 0
 
    // Função para adicionar um item
    const adicionarItem = (index) => {
        const novaQuantidade = [...quantidades];
        novaQuantidade[index]++;
        setQuantidades(novaQuantidade);
    };
 
    // Função para remover um item
    const removerItem = (index) => {
        const novaQuantidade = [...quantidades];
        if (novaQuantidade[index] > 0) {
            novaQuantidade[index]--;
            setQuantidades(novaQuantidade);
        }
    };
 
    // Função para excluir um item
    const excluirItem = (index) => {
        const novaQuantidade = [...quantidades];
        novaQuantidade[index] = 0; // Reseta a quantidade para 0
        setQuantidades(novaQuantidade);
    };
 
    return (
        <View style={estilos.fundo}>
            <View style={{ backgroundColor: 'white', shadowColor: 'gray', shadowOffset: { width: 0, height: 3 }, elevation: 5, shadowOpacity: 0.5, height: 70, borderRadius: 25, flexDirection: 'row' }}>
                <Image source={require('./img/carrinho.png')} style={{ width: 50, height: 50, alignSelf: 'center', marginLeft: 90 }} />
                <Text style={estilos.titulo}>Seu Carrinho</Text>
            </View>
 
            <ScrollView>
                {/* Item 1 */}
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>{quantidades[0]}x</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => excluirItem(0)}>
                            <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adicionarItem(0)}>
                            <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
 
                {/* Item 2 */}
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>{quantidades[1]}x</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => excluirItem(1)}>
                            <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adicionarItem(1)}>
                            <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
 
                {/* Item 3 */}
                <View style={estilos.caixaProduto}>
                    <Text style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>{quantidades[2]}x</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => excluirItem(2)}>
                            <Image source={require('./img/lixo.png')} style={{ height: 26, width: 26, marginLeft: 260, marginTop: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => adicionarItem(2)}>
                            <Image source={require('./img/plus.png')} style={{ height: 26, width: 26, marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
 
                <View style={{ backgroundColor: 'white', marginTop: 50, height: 100, shadowColor: 'gray', shadowOffset: { width: 3, height: 3 }, elevation: 7, shadowOpacity: 0.5, borderRadius: 25, marginHorizontal: 25, flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Confirmar Endereço: </Text>
                    <View style={{ backgroundColor: 'white', width: 20, height: 20, borderRadius: 25, borderColor: 'gray', borderWidth: 3, marginLeft: 120, marginTop: 4 }}>
                        <View style={{ backgroundColor: 'green', width: 10, height: 10, borderRadius: 25, marginLeft: 2, marginTop: 2 }}></View>
                    </View>
                </View>
 
                <View style={estilos.footer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={estilos.dadosProdutos}>Quantidade total: {quantidades.reduce((a, b) => a + b, 0)}</Text>
                        <Text style={estilos.botaoPedido}>Finalizar Pedido</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
 
export default Carrinho;