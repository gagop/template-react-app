import { FC, ReactElement } from 'react';
import styles from './SimpleButton.module.scss';

const SimpleButton: FC<{ text: string }> = ({ text = 'Ok' }): ReactElement => {
  return (
    <div className={styles.btn}>
      <button>{text}</button>
    </div>
  );
};

export default SimpleButton;
