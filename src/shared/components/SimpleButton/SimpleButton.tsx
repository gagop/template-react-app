import { FC, ReactElement } from 'react';
import './SimpleButton.css';

const SimpleButton: FC<{ text: string }> = ({ text = 'Ok' }): ReactElement => {
  return (
    <div className="Button">
      <button>{text}</button>
    </div>
  );
};

export default SimpleButton;
