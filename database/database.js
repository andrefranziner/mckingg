// database.js
import supabase from './supabaseClient';

// Função para inserir um novo usuário
export const insertUsuario = async (email, senha) => {
    const { data, error } = await supabase
        .from('usuario') // nome da tabela em minúsculas
        .insert([{ email: email, email: senha }]);
    
    if (error) throw error;
    return data;
};

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
