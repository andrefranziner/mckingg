// database.js
import supabase from './supabaseClient';
import { v4 as uuidv4 } from 'uuid'; // Para gerar nomes únicos para as imagens

// Função para fazer upload da imagem
// Função para fazer upload da imagem
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





// Outras funções...
