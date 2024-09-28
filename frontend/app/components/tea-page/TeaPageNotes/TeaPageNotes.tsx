import React from "react";
import styles from './TeaPageNotes.module.css';

interface TeaPageNotesProps {
  notes: string[]; // Массив заметок
}

const TeaPageNotes: React.FC<TeaPageNotesProps> = ({ notes }) => {
  return (
    <div className={styles.notes}>
      {notes.length === 0 ? (
        <div className={styles.noNotes}>
          <p>Вы еще не оставляли заметки к этому чаю.</p>
          <button className={styles.button}>Оставить заметку</button>
        </div>
      ) : (
        <ul className={styles.notesList}>
          {notes.map((note, index) => (
            <li key={index} className={styles.note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeaPageNotes;
