import './App.css'
import { Counter } from './components/Counter/Counter'
import { Form } from './components/Form/Form'
import { Skills } from './components/Skills/Skills'

function App() {
  const skills = ['html', 'css', 'js']
  return (
    <div className="App">
      <Form />
      <br />
      <hr />
      <br />
      <Skills skills={skills} />
      <br />
      <hr />
      <br />
      <Counter />
    </div>
  )
}

export default App
