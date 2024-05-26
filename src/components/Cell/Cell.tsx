import React from 'react';


interface CellProps {
  hasItem: boolean;
  clicked: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({hasItem, clicked, onClick}) => {
  let className = 'cell';
  if (clicked) {
    className += ' clicked';
  }
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {hasItem && clicked ? '🐶' : ''}
    </div>
  );
};

export default Cell;
