import { createState, useState } from '@hookstate/core';
import './App.css';

const sharedIntState = createState(0);
const sharedListState = createState([{ name: 'admin', dt: new Date().getTime() }]);

export default function App() {

  return <>
    <div className="App">
      <DisplayIntPanel />
      <ControlIntPanel />
      <hr />
      <ControlListPanel />
      <DisplayListPanel />

    </div>
  </>;
}

const DisplayIntPanel = () => {
  const state = useState(sharedIntState);
  return <>
    <b>Counter value: {state.get()} </b>
  </>
}

function ControlIntPanel() {

  const state = useState(sharedIntState);

  const handerIncrement = () => {
    state.set(p => p + 1)
  }

  return <>
    <button onClick={handerIncrement}> Increment</button>
  </>;
}

function DisplayListPanel() {
  const listState = useState(sharedListState);

  return <div>
    <ul>
      {listState.map((entityState, idx) => {


        return <EntityViewer entityState={entityState} />
      })}
    </ul>
  </div>
}
function EntityViewer({ entityState }) {
  const entity = useState(entityState);

  const { name, dt } = entity.value;


  const str = `${name}, ${dt}`;
  return <li>{str}</li>
}

function ControlListPanel() {
  const listState = useState(sharedListState);
  const handerIncrement = () => {
    const name = "tester";
    const dt = new Date().getTime();
    const newItem = {
      name,
      dt
    }
    listState.set(nodes => (nodes || []).concat([newItem]));
    // listState.set(nodes => (nodes || []).push(newItem)); 안됨

  }

  return <>
    <button onClick={handerIncrement}>Increment</button>
  </>;
}