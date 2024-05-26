import React  from 'react';
interface AttemptsProps {
  attempts: number;
}
const AttemptsCounter: React.FC<AttemptsProps> = ({attempts}) => {
  return (
    <div className="attempts-counter">
       Попытки : {attempts}
    </div>
  );
};

export default AttemptsCounter;