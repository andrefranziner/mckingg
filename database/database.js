// database.js
import supabase from './supabaseClient';

// Função para inserir um novo usuário
// Função para inserir um novo usuário
export const insertUsuario = async (email, senha) => {
    const { data, error } = await supabase
        .from('usuario') // nome da tabela em minúsculas
        .insert([{ email: email, senha: senha }]); // Corrigir 'email: senha' para 'senha: senha'
    
    if (error) throw error;
    return data;
};

// Função para inserir um novo endereço
export const insertEndereco = async (idUsuario, rua, cep, cidade, bairro, estado) => {
  const { data, error } = await supabase
    .from('endereco') // Nome da tabela em minúsculas
    .insert([
      {
        id_usuario: idUsuario, // Chave estrangeira para o usuário
        rua: rua,
        cep: cep,
        cidade: cidade,
        bairro: bairro,
        estado: estado
      }
    ]);

  if (error) {
    throw error;
  }

  return data;
};

// Função para verificar se o usuário existe no banco de dados
// Função para verificar se o usuário existe no banco de dados
export const getUsuarioByEmail = async (email) => {
    const { data, error } = await supabase
        .from('usuario') // nome da tabela em minúsculas
        .select('*')
        .eq('email', email);

    if (error) throw error;

    if (data.length === 0) {
        return null; // Nenhum usuário encontrado
    }

    return data[0]; // Retorna o primeiro usuário encontrado
};
