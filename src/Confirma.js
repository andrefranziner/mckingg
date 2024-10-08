import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../database/database'; // Certifique-se de que o arquivo supabase.js está configurado
import { insertPedido } from '../database/database'; // Ajuste o caminho conforme necessário


function Confirma({ route, navigation }) {
    const { produtos, valorSubtotal } = route.params; // Recebendo as informações do pedido

    const registrarPedido = async () => {
        try {
            console.log("Iniciando o registro dos pedidos...");
    
            const data = await insertPedido(produtos); // Certifique-se de que produtos é o que você espera
            console.log("Pedidos registrados com sucesso:", data);
            Alert.alert('Sucesso', 'Todos os pedidos registrados com sucesso!');
            
            navigation.navigate('Pedidos');
        } catch (error) {
            console.error("Erro ao registrar pedido:", error);
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
                onPress={registrarPedido} // Certifique-se de que isso está chamando a função
            >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Confirmar Pedido</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Confirma;
