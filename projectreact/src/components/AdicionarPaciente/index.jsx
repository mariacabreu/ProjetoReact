import './style.css';
import { useState } from 'react';

export default function AddPaciente() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horario, setHorario] = useState('');
  const [pacientes, setPacientes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !telefone || !horario) return;

    const novoPaciente = { id: Date.now(), nome, telefone, horario };
    setPacientes([...pacientes, novoPaciente]);

    // limpa o formulário
    setNome('');
    setTelefone('');
    setHorario('');
  };

  const removerPaciente = (id) => {
    setPacientes(pacientes.filter(p => p.id !== id));
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

      {/* Lista de pacientes */}
      <h3>Lista de Pacientes</h3>
      {pacientes.length === 0 ? (
        <p className="vazio">Nenhum paciente adicionado ainda.</p>
      ) : (
        <ul className="lista-pacientes">
          {pacientes.map((p) => (
            <li key={p.id}>
              <div>
                <strong>{p.nome}</strong> <br />
                Tel: {p.telefone} <br />
                Horário: {p.horario}
              </div>
              <button
                className="remover"
                onClick={() => removerPaciente(p.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
