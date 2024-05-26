import React, {useState} from 'react';
import createItems from './components/arrayFunction.ts';
import Board from './components/Board/Board.tsx';
import './App.css'
import './main.css'

const App: React.FC = () => {
  const [items, setItems] = useState(createItems());
  const UserClick = (index: number) => {
    const newItems = [...items];
    newItems[index].clicked = true;
    setItems(newItems);
  };
  return (
    <>
      <Board items={items} onCellClick={UserClick}/>
    </>
  );
};

export default App;
