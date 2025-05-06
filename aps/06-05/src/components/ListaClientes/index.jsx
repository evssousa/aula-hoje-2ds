export default function ListaClientes({ clientes }) {
    return (
        <ul>
            {clientes.map((cliente, index) => {
                <li key={index}>
                    {cliente.nome} - {cliente.email} - {cliente.telefone}
                </li>
            })}
        </ul>
    )
}