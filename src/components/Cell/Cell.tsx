import React from 'react';


interface CellProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({hasItem, clicked, onClick}) => {
  return (
    <div
      className={`cell ${hasItem ? 'has-item' : ''} ${clicked ? 'clicked' : ''}`}
      onClick={onClick}
    ></div>
  );
};

export default Cell;
