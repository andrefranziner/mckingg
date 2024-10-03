// CadastroProdutos.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { insertProduto } from '../database/database'; // Importa a função para inserir produtos

function CadastroProdutos() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagemUrl, setImagemUrl] = useState(''); // Estado para a URL da imagem

    // Função para tratar o envio do formulário
    const handleSubmit = async () => {
        try {
            // Chame a função para inserir o produto no banco de dados com imagem_url
            await insertProduto(nomeProduto, descricao, parseFloat(preco), imagemUrl);
            Alert.alert('Produto cadastrado com sucesso!');
            
            // Limpar os campos após o cadastro
            setNomeProduto('');
            setDescricao('');
            setPreco('');
            setImagemUrl('');
        } catch (error) {
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Produto:</Text>
            <TextInput
                style={styles.input}
                value={nomeProduto}
                onChangeText={setNomeProduto}
            />
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style={styles.input}
                value={descricao}
                onChangeText={setDescricao}
                multiline
                numberOfLines={4}
            />
            <Text style={styles.label}>Preço:</Text>
            <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
            />
            <Text style={styles.label}>URL da Imagem:</Text>
            <TextInput
                style={styles.input}
                value={imagemUrl}
                onChangeText={setImagemUrl}
            />

            <Button title="Cadastrar Produto" onPress={handleSubmit} color="#FF0000" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE600',
        alignItems: 'center',
        height: 500,
        marginTop: 120,
        marginHorizontal: 20,
        borderRadius: 40,
        borderColor: '#FF5C00',
        borderWidth: 2
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF5C00',
        marginTop: 15
 
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        margin: 12,
        borderColor: '#FF5C00',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        color: 'lightgray'
    },
    input1: {
        borderWidth: 1,
        borderColor: '#FF5C00',
        borderRadius: 15,
        width: 250,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff', // Fundo branco para os inputs
        marginHorizontal: 10,
        color: 'lightgray'
    },
});

export default CadastroProdutos;
