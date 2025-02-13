import Header from './components/header/Header'
import CoreConcept from './components/CoreConcept'
import { CORE_CONCEPTS } from './data.js'

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
        </main>
      </div>
  )
}

export default App
