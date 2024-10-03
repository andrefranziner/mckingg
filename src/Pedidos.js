import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native'; // Importando Button
import { estilos } from './Stylesheet/estilos';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Não esqueça de importar AsyncStorage
import supabase from '../database/supabaseClient'; // Certifique-se de ter a conexão com o Supabase

function Pedidos() {
    const nav = useNavigation();
    const [produtos, setProdutos] = useState([]);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('usuario');
        // Redirecionar para a tela de Login ou fazer outras ações necessárias
        nav.navigate('Login'); // Corrigido para usar nav
    };

    // Função para buscar os produtos do Supabase
    const fetchProdutos = async () => {
        try {
            const { data, error } = await supabase
                .from('produtos')
                .select('nome_produto, descricao, preco, imagem_url');

            if (error) {
                console.error('Erro ao buscar os produtos:', error.message);
            } else {
                setProdutos(data);
            }
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    return (
        <View style={estilos.fundo}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <Image source={require('./img/voltar.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <Image source={require('./img/logo.png')} style={estilos.imgPedidos} />
                <Image source={require('./img/menu.png')} style={{ width: 50, height: 50, marginLeft: 'auto' }} />
            </View>

            <Text style={{ borderColor: '#FF5C00', borderWidth: 1, marginTop: 5 }}></Text>

            <TextInput
                style={estilos.inputPesquisa}
                placeholder='Pesquisar'
                placeholderTextColor="#888"
            />

            <View style={estilos.containerPedidos}>
                <ScrollView>

                    {produtos.map((produto, index) => (
                        <View key={index} style={estilos.pedidos}>
                            <Image source={{ uri: produto.imagem_url }} style={{ width: 87, height: 87, marginLeft: 10, marginTop: 5 }} />
                            <View style={{ marginLeft: 110, marginTop: -70 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{produto.nome_produto}</Text>
                                <Text>{produto.descricao}</Text>
                                <Text style={{ color: '#FF5C00', fontWeight: 'bold' }}>R$ {produto.preco}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={estilos.barraInteracao}>
                <TouchableOpacity onPress={() => nav.navigate('Pedidos')}>
                    <Image source={require('./img/talher.png')} style={{ width: 30, height: 34, marginTop: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('TelaPesquisa')}>
                    <Image source={require('./img/pesquisa.png')} style={{ width: 50, height: 50, marginTop: 2 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Carrinho')}>
                    <Image source={require('./img/carrinho.png')} style={{ width: 45, height: 40, marginTop: 8 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout}>
                    <Image source={require('./img/perfil.png')} style={{ width: 50, height: 50, marginTop: 5 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Pedidos;
