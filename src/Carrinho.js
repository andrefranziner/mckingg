import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { estilos } from './Stylesheet/estilos'; // Certifique-se que o estilo está correto
import { Picker } from '@react-native-picker/picker'; // Importação correta do Picker
 
function Carrinho() {
    const [itemSelecionado, setItemSelecionado] = useState("Verificar Status");
 
    function trocaItemSelecionado(itemIndex) {
        setItemSelecionado(itemIndex);
    }
 
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
 
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('./img/pix.png')} style={{ marginTop: 5 }} />
                    <Text style={estilos.botaoPedido}>Finalizar Pedido</Text>
                </View>
 
                <Picker
                style={{color: '#B50B0B', textAlign: 'center', marginTop: 5, border: 'none', marginHorizontal: 50, borderRadius: 15, height: 65, fontSize: 25, fontWeight: 'bold'}}
                    selectedValue={itemSelecionado}
                    onValueChange={trocaItemSelecionado}>
                    <Picker.Item label="Verificar Status" value="0" />
                    <Picker.Item label="Você pediu" value="1" />
                    <Picker.Item label="Nome:" value="2" />
                    <Picker.Item label="Forma de" value="3" />
                </Picker>
            </ScrollView>
        </View>
    );
}
 
export default Carrinho;