import * as SQLite from 'expo-sqlite';

// Abre o banco de dados. Se não existir, ele será criado automaticamente.
const db = require('../database/database.db');

// Função para executar consultas SQL
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(query, params, (_, result) => resolve(result), (_, error) => reject(error));
    });
  });
};

// Função para criar a tabela, se necessário
const createTables = () => {
  executeQuery(`
    CREATE TABLE IF NOT EXISTS USUARIO (
      ID_USUARIO INTEGER PRIMARY KEY AUTOINCREMENT,
      EMAIL TEXT NOT NULL,
      SENHA TEXT NOT NULL
    );
  `)
  .then(() => console.log('Tabela criada com sucesso'))
  .catch(error => console.log('Erro ao criar tabela:', error));
};

// Função para inserir um usuário
const insertUser = (email, senha, callback) => {
  executeQuery(
    'INSERT INTO USUARIO (EMAIL, SENHA) VALUES (?, ?)', 
    [email, senha]
  )
  .then(result => callback(result.insertId))
  .catch(error => console.log('Erro ao inserir usuário:', error));
};

export { db, executeQuery, createTables, insertUser };
