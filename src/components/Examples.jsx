import TabButton from "./TabButton";
import {EXAMPLES} from "../data"
import { useState } from 'react';

export default function CoreConcepts () {

    function clickHandler(selectedButton) {
        //selected button should be string => components, jsx, props, state
        setSelectedTopic(selectedButton);
    }

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
    

    return (
    <section id ="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton clickHandler={() => clickHandler('components')} isSelected={selectedTopic === 'components'} >Components</TabButton>
        <TabButton clickHandler={() => clickHandler('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
        <TabButton clickHandler={() => clickHandler('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
        <TabButton clickHandler={() => clickHandler('state')} isSelected={selectedTopic === 'state'}>state</TabButton>
        </menu>
        {tabContent}
    </section>);
}



// two ways of writing conditional statements
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