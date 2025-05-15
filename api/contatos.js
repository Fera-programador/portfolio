import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db;

// Conexão com o banco SQLite (será feita a cada chamada da função)
const initDB = async () => {
  if (!db) {
    db = await open({
      filename: "./contatos.db",
      driver: sqlite3.Database,
    });

    await db.run(`
      CREATE TABLE IF NOT EXISTS contatos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        mensagem TEXT NOT NULL
      )
    `);
  }
  return db;
};

// Função handler para os endpoints da API
export default async function handler(req, res) {
  await initDB();

  if (req.method === "GET") {
    try {
      const contatos = await db.all("SELECT * FROM contatos");
      res.status(200).json({
        success: true,
        message: "✅📋 Lista de contatos carregada com sucesso!",
        data: contatos,
      });
    } catch (err) {
      console.error("Erro ao buscar contatos:", err);
      res.status(500).json({ success: false, error: "Erro ao buscar contatos" });
    }
  } else if (req.method === "POST") {
    const { Nome, Email, Mensagem } = req.body;

    if (!Nome || !Email || !Mensagem) {
      return res.status(400).json({ success: false, message: "Campos obrigatórios ausentes." });
    }

    try {
      await db.run(
        "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)",
        Nome,
        Email,
        Mensagem
      );

      res.status(200).json({
        success: true,
        message: "✅ Mensagem salva com sucesso!",
      });
    } catch (err) {
      console.error("Erro ao inserir no banco:", err);
      res.status(500).json({ success: false, message: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ success: false, error: "Método não permitido" });
  }
}
