import { useState, useEffect } from "react";
import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import styles from "../styles/CardContent.module.scss";

interface Character {
  id: number;
  name: string;
  status: string;
  species?: string | null;
  gender: string;
  hair: string;
  alias?: (string | null)[] | null;
  origin: string;
  abilities?: (string | null)[] | null;
  img_url: string;
}

export default function CardContent() {
  const [content, setContent] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=3")
      .then((res) => {
        return res.json();
      })
      .then((data: Character[]) => {
        setContent(data)
      });
  }, []);

  const cardContent = content.map( (card: Character) => 
    <div className={styles.cardContentItems} key={card.id}>
      <section className={styles.character}>
        <div className={styles.image}>
          <img src={card.img_url} alt={card.name} />
        </div>
        <ul className={styles.characterList}>
          <li className={styles.title}>{card.name}</li>
          <li className={styles.status}>status: {card.status}</li>
          <li className={styles.origin}>origin: {card.origin}</li>
        </ul>
      </section>
      <p className={styles.alias}>{card.alias}</p>
      <p className={styles.abilities}>{card.abilities}</p>
    </div>
  )

  return (
    <Conteiner className={styles.cardContent}>
      <div className={styles.cardContentList}>{cardContent}</div>
      <div className={styles.returnLink}>
        <Link to={PathConstants.HOMEPAGE}>{"See all Characters"}</Link>
      </div>
    </Conteiner>
  )
}