import { useState } from 'react'

export default function FormularioCliente({ aoAdicionar }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const enviar = () => {
        aoAdicionar({ nome, email, telefone })
        setNome('')
        setEmail('')
        setTelefone('')
    }
 
    return (
        <div>
            <input placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

            <button onClick={enviar}>Adicionar Cliente</button>
        </div>
    )
}