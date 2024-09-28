import React from "react";
import styles from './TimerButton.module.css';

interface TimerButtonProps {
  id: number
}

const TimerButton: React.FC<TimerButtonProps> = ({ id }) => {
  return (
   <a href={"/timer/"+id}>Заварить!</a>
  );
};

export default TimerButton;
