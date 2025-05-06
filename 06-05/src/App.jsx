import Botao from './components/Botao'
import BoxAlerta from './components/BoxAlerta'
import Card from './components/Card'

export default function App() {
  return (
    <div>
      <h1>Usando Props com Rest Params</h1>

      <Botao nome='John' idade='34' />

      {/* 
      // O componente Card funciona como uma "caixa"
      // Ele recebe qualquer conteúdo passado entre <Card> ... </Card> como filhos (children)
      
      <h1>Composição de Componentes</h1>

      <Card>
        <h2>Título 1</h2>
        <p>Conteúdo do primeiro card</p>
      </Card>

      <Card>
        <h2>Título 2</h2>
        <p>Outro conteúdo aqui dentro do segundo card</p>
      </Card>

      <BoxAlerta>
        Hoje iremos ter dois exercícios! Vamos praticar!
      </BoxAlerta> */}
    </div>
  )
}