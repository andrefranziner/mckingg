// CadastroProdutos.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { insertProduto } from '../database/database'; // Importe a função que você criará para inserir produtos

function CadastroProdutos() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = async () => {
        try {
            // Chame a função para inserir o produto no banco de dados
            await insertProduto(nomeProduto, descricao, parseFloat(preco));
            Alert.alert('Produto cadastrado com sucesso!');
            // Limpar os campos após o cadastro
            setNomeProduto('');
            setDescricao('');
            setPreco('');
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
            <Button title="Cadastrar Produto" onPress={handleSubmit} color="#B50B0B" border/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
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
    },
});

export default CadastroProdutos;
