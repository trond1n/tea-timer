import React, { useState, useEffect } from "react";
import styles from "./TimerBlock.module.css";

const TimerBlock: React.FC = () => {
  const initialTime = 300; // Начальное время (например, 5 минут = 300 секунд)
  const [time, setTime] = useState(initialTime); // Время в секундах
  const [isRunning, setIsRunning] = useState(false); // Статус таймера
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null); // Интервал таймера

  // Функция для старта/остановки таймера
  const toggleTimer = () => {
    if (isRunning) {
      // Остановить таймер
      if (timerInterval) {
        clearInterval(timerInterval);
      }
      setIsRunning(false);
    } else {
      // Запустить таймер
      const interval = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0)); // Уменьшаем время каждую секунду
      }, 1000);
      setTimerInterval(interval);
      setIsRunning(true);
    }
  };

  // Очистить таймер при размонтировании компонента
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]); // Зависимость от timerInterval, чтобы очищать таймер при его изменении

  // Форматирование времени в формате m:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Данные для анимации шарика (в зависимости от времени)
  const rotation = ((initialTime - time) / initialTime) * 360;

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <div className={styles.timerCircle}>
          <div
            className={styles.timerBall}
            style={{
              transform: `rotate(${rotation}deg) translateX(90px) rotate(-${rotation}deg)`, // Двигаем шарик по границе круга
            }}
          />
          <div className={styles.time}>{formatTime(time)}</div>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={toggleTimer} className={styles.toggleButton}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={() => setTime((prevTime) => Math.max(prevTime - 10, 0))} className={styles.adjustButton}>
          -10s
        </button>
        <button onClick={() => setTime((prevTime) => prevTime + 10)} className={styles.adjustButton}>
          +10s
        </button>
      </div>
    </div>
  );
};

export default TimerBlock;
