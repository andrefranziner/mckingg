import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { estilos } from './Stylesheet/estilos';
import { Picker } from '@react-native-picker/picker'; 

function Carrinho({ route }) {
    const { produtos } = route.params; // Recebendo os produtos do carrinho
    const [quantidades, setQuantidades] = useState([]);

    useEffect(() => {
        // Inicializando o estado de quantidades com base nos produtos recebidos
        setQuantidades(produtos.map(() => 1)); // Inicializa todas as quantidades como 1
    }, [produtos]);

    const adicionarItem = (index) => {
        const novaQuantidade = [...quantidades];
        novaQuantidade[index]++;
        setQuantidades(novaQuantidade);
    };

    const removerItem = (index) => {
        const novaQuantidade = [...quantidades];
        if (novaQuantidade[index] > 1) {
            novaQuantidade[index]--;
            setQuantidades(novaQuantidade);
        }
    };

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
                {produtos.map((produto, index) => (
                    <View key={index} style={estilos.carrinhoItem}>
                        <Image source={{ uri: produto.imagem_url }} style={estilos.imagemProduto} />
                        <Text style={estilos.nomeProduto}>{produto.nome_produto}</Text>
                        <Text style={estilos.precoProduto}>R$ {produto.preco.toFixed(2)}</Text>
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => removerItem(index)} style={{ marginHorizontal: 5 }}>
                                <Text style={estilos.botaoQuantidade}>-</Text>
                            </TouchableOpacity>
                            <Text style={estilos.quantidade}>{quantidades[index]}</Text>
                            <TouchableOpacity onPress={() => adicionarItem(index)} style={{ marginHorizontal: 5 }}>
                                <Text style={estilos.botaoQuantidade}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => excluirItem(index)} style={{ marginLeft: 10 }}>
                                <Text style={estilos.botaoExcluir}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity style={estilos.botaoFinalizar}>
                <Text style={estilos.textoBotaoFinalizar}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Carrinho;
