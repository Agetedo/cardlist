import React from "react";
import styles from "../styles/HeaderContainer.module.scss";

interface HeaderContainerProps {
  className: string;
  children: React.ReactNode;
}

export default function HeaderConteiner({ children, className }: HeaderContainerProps) {
  return (
    <header className={className}>
      <div className={styles.headerConteiner}>{children}</div>
    </header>
  );
}