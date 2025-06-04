import React, { useState } from 'react';
import './styles.css';

function CadastroDePrato() {
  const [form, setForm] = useState({
    nomePrato: '',
    descricao: '',
    preco: '',
    categoria: '',
    disponibilidade: '',
    urlImagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prato = { ...form };

    try {
      const response = await fetch("https://restaurante-q52p.onrender.com/pratos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(prato)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar prato");
      }

      alert("Prato cadastrado com sucesso!");

      // Limpar o formulário após sucesso
      setForm({
        nomePrato: '',
        descricao: '',
        preco: '',
        categoria: '',
        disponibilidade: '',
        urlImagem: ''
      });

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar prato");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Cadastrar Novo Prato</h2>
      <input name="nomePrato" placeholder="Nome" value={form.nomePrato} onChange={handleChange} required />
      <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
      <input name="preco" type="number" placeholder="Preço" value={form.preco} onChange={handleChange} required />
      <input name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} required /> 
      <input name="disponibilidade" placeholder="Disponibilidade" value={form.disponibilidade} onChange={handleChange} required />
      <input name="urlImagem" placeholder="URL da Imagem" value={form.urlImagem} onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default CadastroDePrato;
