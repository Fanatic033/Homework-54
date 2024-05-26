import React from 'react';
import Cell from '../Cell/Cell.tsx';



interface BoardProps {
  items: { hasItem: boolean; clicked: boolean }[];
  onCellClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({items, onCellClick}) => {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;