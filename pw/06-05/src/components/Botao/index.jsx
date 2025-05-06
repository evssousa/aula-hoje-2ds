import './style.css'

export default function Botao({ nome, idade, ...rest }) {
    return (
        // repassa os outras propriedade
        // onClick, id, type, etc.
        <button className="botao-container" {...rest}>
            {nome} {idade} 
        </button>
    )
}