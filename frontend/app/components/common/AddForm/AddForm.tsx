import Link from "next/link";
import styles from "./AddForm.module.css";
import { useState } from "react";

interface TimeField {
  id: number;
  time: string;
}
const AddForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [timeFields, setTimeFields] = useState<TimeField[]>([
    { id: 1, time: "" },
  ]);

  const addTimeField = () => {
    setTimeFields([...timeFields, { id: timeFields.length + 1, time: "" }]);
  };

  const handleTimeChange = (id: number, time: string) => {
    setTimeFields(
      timeFields.map((field) => (field.id === id ? { ...field, time } : field))
    );
  };

  const removeTimeField = (id: number) => {
    setTimeFields(timeFields.filter((field) => field.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, description, temperature, timeFields });
  };

  return (
    <>
      <h3 className={styles.title}>Новый таймер</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.addImage}>
          {" "}
          <i className="fas fa-add"></i>
        </div>

        <div className={styles.textFields}>
          <input
            type="text"
            className={styles.modalInput}
            placeholder="Название чая"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className={styles.modalInput}
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className={styles.modalInput}
            placeholder="Температура воды"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>

        <div className={styles.timeFields}>
          <h4 className={styles.timeFieldsTitle}>Время пролива</h4>
          <div className={styles.timeFieldInputs}>
          {timeFields.map((field, index) => (
            <div key={field.id} className={styles.timeField}>
              <label className={styles.timeFieldLabel}>{field.id} пролив</label>
              <input
                type="text"
                className={styles.timeFieldInput}
                placeholder="00:15"
                value={field.time}
                onChange={(e) => handleTimeChange(field.id, e.target.value)}
              />
              <button
                type="button"
                className={
                  (index === 0 && timeFields.length === 1) ||
                  index === timeFields.length - 1
                    ? styles.addFieldButton
                    : styles.removeFieldButton
                }
                onClick={() =>
                  (index === 0 && timeFields.length === 1) ||
                  index === timeFields.length - 1
                    ? addTimeField
                    : removeTimeField(field.id)
                }
              >
                {(index === 0 && timeFields.length === 1) ||
                index === timeFields.length - 1 ? (
                  <div className={styles.addTime} onClick={addTimeField}>
                    <i className="fa-solid fa-add"></i>
                  </div>
                ) : (
                  <i className="fa-solid fa-xmark"></i>
                )}
              </button>
            </div>
          ))}
          </div>
        </div>

        <div className={styles.modalButtons}>
          <button
            type="button"
            className={`${styles.modalButton} ${styles.modalButtonCancel}`}
          >
            Сбросить
          </button>
          <button type="submit" className={styles.modalButton}>
            Сохранить
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
