import FooterConteiner from "./FooterConteiner";
import styles from "../styles/Footer.module.scss";
const reminderText = "Final Space is an American adult animated space opera comedy-drama television series created by Olan Rogers for TBS.";
const rightsText = " Cards List. All rights reserved.";

export default function Footer() {
  return (
    <FooterConteiner className={styles.footer}>
      <FooterReminder 
        text={reminderText}
      />
      <FooterRights rightsText={rightsText} />
    </FooterConteiner>  
  );
}

function FooterReminder({ text }: { text: string } ) {
  return (
    <div className={styles.footerReminder}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function FooterRights({ rightsText }: { rightsText: string }) {
  return ( 
    <p className={styles.footerText}>{new Date().getFullYear()} &copy;{rightsText}</p>
  );
}