// database.js
import supabase from './supabaseClient';
import { v4 as uuidv4 } from 'uuid'; // Para gerar nomes únicos para as imagens


// CADASTRO DE PRODUTOS

export const uploadImage = async (imagemUri) => {
    const imageName = `${uuidv4()}.png`;

    try {
        console.log('URI da imagem para upload:', imagemUri); // Log da URI

        const response = await fetch(imagemUri);
        if (!response.ok) {
            throw new Error('Falha ao buscar a imagem da URI fornecida.');
        }
        const blob = await response.blob();

        let { data, error } = await supabase.storage
            .from('produtos')
            .upload(imageName, blob);

        if (error) {
            console.error('Erro ao fazer upload da imagem:', error.message);
            throw error;
        }

        const { publicURL } = supabase.storage
            .from('produtos')
            .getPublicUrl(imageName);

        console.log('URL da imagem após upload:', publicURL); // Log da URL
        return publicURL; // Certifique-se de retornar a URL corretamente
    } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error.message);
        throw new Error('Erro ao fazer upload da imagem: ' + error.message);
    }
};

// Função para inserir um novo produto
export const insertProduto = async (nomeProduto, descricao, preco, imagem_url) => {
    console.log('Inserindo produto:', {
        nome_produto: nomeProduto,
        descricao: descricao,
        preco: preco,
        imagem_url: imagem_url
    });

    const { data, error } = await supabase
        .from('produtos')
        .insert([{ nome_produto: nomeProduto, descricao: descricao, preco: preco, imagem_url: imagem_url }]);

    if (error) {
        console.error('Erro ao inserir o produto:', error.message);
        throw error;
    }
    return data;
};

// CADASTRO DE USUÁRIOS

// Função para inserir um novo usuário
// Função para inserir um novo usuário
export const insertUsuario = async (email, senha) => {
    const { data, error } = await supabase
        .from('usuario') // nome da tabela em minúsculas
        .insert([{ email: email, senha: senha }]); // insira os dados corretamente

    if (error) {
        console.error('Erro ao inserir o usuário:', error.message);
        throw error; // lance o erro se houver
    }
    return data; // retorne os dados inseridos, se necessário
};

// Função para verificar se o usuário existe no banco de dados
// Função para verificar se o usuário existe no banco de dados
export const getUsuarioByEmail = async (email) => {
    const { data, error } = await supabase
        .from('usuario') // nome da tabela em minúsculas
        .select('*')
        .eq('email', email);

    // Se houver um erro, lançar uma exceção
    if (error) throw error;

    // Verifique se o usuário existe
    if (data.length === 0) {
        return null; // Nenhum usuário encontrado
    }

    return data[0]; // Retorna o primeiro usuário encontrado
};




// Outras funções...
