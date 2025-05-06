import Card from './components/Card'

// O componente Card funciona como uma "caixa"
// Ele recebe qualquer conteúdo passado entre <Card> ... </Card> como filhos (children)


export default function App() {
  return (
    <div>
      <h1>Composição de Componentes</h1>

      <Card>
        <h2>Título 1</h2>
        <p>Conteúdo do primeiro card</p>
      </Card>

      <Card>
        <h2>Título 2</h2>
        <p>Outro conteúdo aqui dentro do segundo card</p>
      </Card>
    </div>
  )
}