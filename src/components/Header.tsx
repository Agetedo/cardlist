import HeaderConteiner from "./HeaderContainer";
import styles from "../styles/Header.module.scss";

export default function Header({ title }: { title: string }) {
  return (
    <HeaderConteiner className={styles.header}>
      <h2 className={styles.headerTitle}>{title}</h2>
    </HeaderConteiner>
  );
}