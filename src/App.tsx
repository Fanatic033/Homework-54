import React, {useState} from 'react';
import createItems from './components/arrayFunction.ts';
import Board from './components/Board/Board.tsx';
import './App.css'
import './main.css'
import AttemptsCounter from './components/Attempts/Attempts.tsx';

const App: React.FC = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);
    const UserClick = (index: number) => {
      if (!items[index].clicked) {
        const newItems = items.map((item, i) =>
          i === index ? { ...item, clicked: true } : item
        );
        setItems(newItems);
        setAttempts(prevAttempts => prevAttempts + 1);
      }
    };
  return (
    <>
      <Board items={items} onCellClick={UserClick}/>
      <AttemptsCounter attempts={attempts} />
    </>
  );
};

export default App;
