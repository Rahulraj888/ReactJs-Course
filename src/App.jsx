import Header from './components/header/Header'
import CoreConcept from './components/CoreConcept'
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton'

function App() {
  return (
      <div>
        <Header/>
        <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept) => <li><CoreConcept {...concept}/></li>)}
          </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>state</TabButton>
          </menu>
        </section>
        </main>
      </div>
  )
}

export default App
