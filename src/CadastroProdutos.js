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
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFD700', // Fundo amarelo
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff', // Fundo branco para os inputs
    },
});

export default CadastroProdutos;
