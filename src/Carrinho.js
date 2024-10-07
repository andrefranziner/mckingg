import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { estilos } from './Stylesheet/estilos';
import { supabase } from '../database/database';  // Certifique-se de que o arquivo supabase.js esteja configurado

function Carrinho({ route, navigation }) {
    const { produtos: produtosIniciais, idUsuario } = route.params;  // Recebendo os produtos e ID do usuário
    const [produtos, setProdutos] = useState([]);
    const [quantidades, setQuantidades] = useState([]);

    useEffect(() => {
        // Inicializando o estado de produtos e quantidades com base nos produtos recebidos
        setProdutos(produtosIniciais);
        setQuantidades(produtosIniciais.map(() => 1)); // Inicializa todas as quantidades como 1
    }, [produtosIniciais]);

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
        const novosProdutos = produtos.filter((_, i) => i !== index);
        const novasQuantidades = quantidades.filter((_, i) => i !== index);
        setProdutos(novosProdutos);
        setQuantidades(novasQuantidades);
    };

    const calcularSubtotal = () => {
        return produtos.reduce((total, produto, index) => {
            return total + produto.preco * quantidades[index];
        }, 0).toFixed(2);
    };

    const finalizarPedido = async () => {
        const subtotal = calcularSubtotal();
    
        // Cria um objeto com as informações que serão enviadas para Confirma.js
        const produtosInfo = produtos.map((produto, index) => ({
            nome_produto: produto.nome_produto,
            quantidade: quantidades[index],
            preco: produto.preco,
        }));
    
        // Navega para a tela de confirmação, enviando os produtos e subtotal
        navigation.navigate('Confirma', {
            produtos: produtosInfo,
            valorSubtotal: subtotal,
            idUsuario: idUsuario // Enviando o ID do usuário, se necessário
        });
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

                {/* Resumo do pedido */}
                <View style={estilos.resumoPedido}>
                    <Text style={estilos.resumoTitulo}>Você pediu:</Text>
                    {produtos.map((produto, index) => (
                        <View key={index} style={estilos.resumoItem}>
                            <Text style={estilos.resumoNome}>Nome: {produto.nome_produto}</Text>
                            <Text style={estilos.resumoQuantidade}>Quantidade: {quantidades[index]}</Text>
                            <Text style={estilos.resumoPagamento}>Forma de pagamento: Pix</Text>
                        </View>
                    ))}
                    <Text style={estilos.total}>Subtotal: R$ {calcularSubtotal()}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={estilos.botaoFinalizar} onPress={finalizarPedido}>
                <Text style={estilos.textoBotaoFinalizar}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Carrinho;
