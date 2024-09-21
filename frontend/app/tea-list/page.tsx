import React from "react";
import styles from "./TeaList.module.css";

const TeaList = () => {
  const products = [
    { id: 1, name: 'Чай черный', variety: 'Ассам' },
    { id: 2, name: 'Чай зеленый', variety: 'Сенча' },
    { id: 3, name: 'Чай улун', variety: 'Те Гуань Инь' },
];

return (
    <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
            
            <div>Название</div>
            <div>Сорт</div>
            <div>О чае</div>
            <div></div>
        </div>
        <div className={styles.tableBody}>
            {products.map(product => (
                <div className={styles.tableRow} key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.variety}</div>
                    <div><a href={`tea-list/${product.id}`}>Подробнее</a></div>
                    <div><a href={`timer/${product.id}`}>Заварить</a></div>
                </div>
            ))}
        </div>
    </div>
);
};

export default TeaList;
