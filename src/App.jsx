import { useState } from 'react';

import Header from './components/header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import TabButton from './components/TabButton';


function App() {

  const [selectedTopic, setSelectedTopic]= useState();

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>)
  }

  
  function clickHandler(selectedButton) {
    //selected button should be string => components, jsx, props, state
    setSelectedTopic(selectedButton);
  }

  return (
      <div>
        <Header/>
        <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept) => <li><CoreConcept key={concept.title} {...concept}/></li>)}
          </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton clickHandler={() => clickHandler('components')} isSelected={selectedTopic === 'components'} >Components</TabButton>
          <TabButton clickHandler={() => clickHandler('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
          <TabButton clickHandler={() => clickHandler('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
          <TabButton clickHandler={() => clickHandler('state')} isSelected={selectedTopic === 'state'}>state</TabButton>
          </menu>
          {tabContent}
        </section>
        </main>
      </div>
  )
}

// to ways of writing conditional statements
{/* {!selectedTopic && <p>Please select a topic</p>}  */}
          
          {/* {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}  */}

export default App;