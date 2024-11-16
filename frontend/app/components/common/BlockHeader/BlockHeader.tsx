import React from "react";
import styles from "./BlockHeader.module.css";

// Типизация пропсов
type BlockHeaderProps = {
  title: string; // Заголовок
  icons?: { name: string; onClick: () => void }[];
  border?: boolean;
};

const BlockHeader: React.FC<BlockHeaderProps> = ({
  title,
  icons = [],
  border,
}) => {
  const renderIcon = (name: string) => {
    return <i className={`fas fa-${name} ${name}Icon`}></i>;
  };

  return (
    <div className={`${styles.innerHeader} ${border ? styles.border : ""}`}>
      <h1 className={styles.innerHeaderTitle}>{title}</h1>

      {icons.length > 0 && (
        <div className={styles.innerHeaderIcons}>
          {icons.map((icon, index) => (
            <button
              key={index}
              onClick={icon.onClick}
              className={styles.innerHeaderIconButton}
            >
              {renderIcon(icon.name)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlockHeader;
