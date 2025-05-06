import Card from './components/Card'

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