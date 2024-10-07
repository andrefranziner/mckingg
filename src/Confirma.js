import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../database/database'; // Certifique-se de que o arquivo supabase.js está configurado

function Confirma({ route, navigation }) {
    const { produtos, valorSubtotal, idUsuario } = route.params; // Recebendo as informações do pedido

    const registrarPedido = async () => {
        try {
            // Inserir cada produto na tabela de pedidos
            const pedidosInsert = produtos.map(produto => ({
                nome_produto: produto.nome_produto,
                quantidade: produto.quantidade,
                valor_subtotal: parseFloat(produto.quantidade) * produto.preco, // Calcular subtotal por produto
                forma_pagamento: 'Pix',
                status: 'pendente',
                id_usuario: idUsuario // Adicionando o ID do usuário
            }));

            const { error } = await supabase
                .from('pedidos') // Altere para o nome correto da tabela se necessário
                .insert(pedidosInsert);

            if (error) throw error; // Lançar erro se houver

            Alert.alert('Sucesso', 'Pedido registrado com sucesso!');
            navigation.navigate('Home'); // Redirecionar para a tela inicial ou outra tela desejada
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao registrar o pedido: ' + error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Confirmação do Pedido</Text>
            <ScrollView>
                <Text style={{ fontSize: 18, marginVertical: 10 }}>Você pediu:</Text>
                {produtos.map((produto, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <Text>Nome do Produto: {produto.nome_produto}</Text>
                        <Text>Quantidade: {produto.quantidade}</Text>
                    </View>
                ))}
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Subtotal: R$ {valorSubtotal}</Text>
            </ScrollView>

            <TouchableOpacity 
                style={{ backgroundColor: 'blue', padding: 15, borderRadius: 5, marginTop: 20 }} 
                onPress={registrarPedido}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Confirmar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Confirma;
