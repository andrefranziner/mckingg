import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { estilos } from './Stylesheet/estilos';
import { useNavigation } from "@react-navigation/native";
import supabase from '../database/supabaseClient';

function Pedidos() {
    const nav = useNavigation();
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [pesquisa, setPesquisa] = useState(''); // Estado para armazenar a pesquisa

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

    // Função para adicionar produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setCarrinho((prevCarrinho) => {
            const novoCarrinho = [...prevCarrinho, produto];
            Alert.alert('Sucesso', `${produto.nome_produto} foi adicionado ao carrinho!`);
            return novoCarrinho;
        });
    };

    // Função para remover produto do carrinho
    const removerDoCarrinho = (index) => {
        setCarrinho((prevCarrinho) => {
            const novoCarrinho = prevCarrinho.filter((_, i) => i !== index);
            return novoCarrinho;
        });
    };

    // Função para filtrar produtos com base na pesquisa
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome_produto.toLowerCase().includes(pesquisa.toLowerCase())
    );

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
                value={pesquisa} // Bind o valor do input ao estado de pesquisa
                onChangeText={setPesquisa} // Atualiza o estado de pesquisa
            />

            <View style={estilos.containerPedidos}>
                <ScrollView>
                    {produtosFiltrados.map((produto, index) => (
                        <View key={index} style={[estilos.pedidos, { flexDirection: 'row', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }]}>
                            <Image source={{ uri: produto.imagem_url }} style={{ width: 80, height: 80, borderRadius: 10, marginRight: 15 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5, flexWrap: 'wrap' }}>{produto.nome_produto}</Text>
                                <Text style={{ fontSize: 14, color: '#666', marginBottom: 5, flexWrap: 'wrap' }}>{produto.descricao}</Text>
                                <Text style={{ color: '#FF5C00', fontWeight: 'bold', fontSize: 16 }}>R$ {produto.preco.toFixed(2)}</Text>
                            </View>
                            <TouchableOpacity onPress={() => adicionarAoCarrinho(produto)}>
                                <Image source={require('./img/compracar.png')} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>


            <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: '#FF5C00', borderRadius: 50, padding: 10 }}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Ver Carrinho</Text>
            </TouchableOpacity>

            {/* Modal do Carrinho */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: '80%', backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Carrinho</Text>
                        {carrinho.length === 0 ? (
                            <Text style={{ textAlign: 'center' }}>Seu carrinho está vazio.</Text>
                        ) : (
                            carrinho.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <Text>{item.nome_produto}</Text>
                                    <Text>R$ {item.preco.toFixed(2)}</Text>
                                    <TouchableOpacity onPress={() => removerDoCarrinho(index)}>
                                        <Text style={{ color: 'red' }}>Remover</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}
                        <TouchableOpacity
                            style={{ backgroundColor: '#FF5C00', padding: 10, borderRadius: 5, marginTop: 10 }}
                            onPress={() => {
                                setModalVisible(false);
                                nav.navigate('Carrinho', { produtos: carrinho }); // Passando o estado do carrinho para a tela Carrinho
                            }}
                        >
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Ir para Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#FF5C00', padding: 10, borderRadius: 5, marginTop: 10 }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Pedidos;
