import { useState } from 'react'
import FormularioCliente from './components/FormularioCliente'
import ListaCliente from './components/ListaClientes'

export default function App() {
  const [clientes, setClientes] = useState([])

  const adicionarCliente = (cliente) => {
    if (!cliente.nome || !cliente.email || !cliente.telefone) return
    
    const emailJaExiste = cliente.some((c) => c.email === cliente.email)

    if(emailJaExiste) {
      alert('Email já cadastrado!')
      return
    }
    setClientes([...clientes, cliente])

  }
  return (
    <div style={{ padding: '20px' }}>
      <h2>📇 Cadastro de Clientes</h2>
      <FormularioCliente aoAdicionar={adicionarCliente} />
      <ListaCliente clientes={clientes} />
    </div>
  )
}