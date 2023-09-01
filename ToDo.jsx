import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [idCount, setIdCount] = useState(1); // Estado para contar os ids

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id: idCount, // Atribuir o id atual
            atividade: atividade
        }]);
        setAtividade(""); // Limpar o campo de atividade
        setIdCount(idCount + 1); // Incrementar o contador de ids
    }

    return (
        <div>
            <Link to="/">home</Link>
            <h3>Lista de Atividades</h3>
               
            <form onSubmit={salvar}>
                <input
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}
                />
                <button>ADD</button>
            </form> 

            {lista.map((ativ) => (
                <p key={ativ.id}>{ativ.id}: {ativ.atividade}</p>
            ))}
        </div>
    );
}