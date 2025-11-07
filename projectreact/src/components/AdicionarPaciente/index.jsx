import React, { useState } from 'react';
import './style.css';

export default const AddPaciente = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica para salvar ou enviar os dados.
    console.log('Paciente Adicionado', { nome, telefone, horario });
  };

  return (
    <div className="add-paciente">
      <h2>Adicionar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <label>
          Horário de Atendimento:
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}
