import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";

export default function CoreConcepts() {
  function clickHandler(selectedButton) {
    //selected button should be string => components, jsx, props, state
    setSelectedTopic(selectedButton);
  }

  const [selectedTopic, setSelectedTopic] = useState();

  //one way of writing conditional statement
  // {selectedTopic && <p>Please select a topic</p>}

  //another way is to use conditional statment
  // { !selectedTopic ? <p>Please select a topic</p> : null}

  // we can variable instead to store the value of the content
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              onClick={() => clickHandler("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => clickHandler("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => clickHandler("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => clickHandler("state")}
              isSelected={selectedTopic === "state"}
            >
              state
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
      {tabContent}
    </Section>
  );
}

// two ways of writing conditional statements
{
  /* {!selectedTopic && <p>Please select a topic</p>}  */
}

{
  /* {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}  */
}
