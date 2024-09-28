import React from "react";
import styles from './TeaPageHeader.module.css';

interface Tea {
  id: number;
  name: string;
  variety: string;
}

interface TeaPageHeaderProps {
  tea: Tea;
}

const TeaPageHeader: React.FC<TeaPageHeaderProps> = ({ tea }) => {
  return (
    <div className={styles.header}>
      <div className={styles.variety}>{tea.variety}</div>
      <div className={styles.name}>{tea.name}</div>
    </div>
  );
};

export default TeaPageHeader;
