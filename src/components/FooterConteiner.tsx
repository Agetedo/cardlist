import styles from "../styles/FooterConteiner.module.scss";

interface FooterContainerProps {
  className: string;
  children: React.ReactNode;
}
export default function FooterConteiner({ children, className }: FooterContainerProps) {
  return (
    <footer className={className}>
      <div className={styles.footerConteiner}>{children}</div>
    </footer>
  );
}