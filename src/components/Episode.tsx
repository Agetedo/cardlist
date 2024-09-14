import Conteiner from "./Conteiner";
import { episodes } from "../dataBase/episodes";
import styles from "../styles/Episode.module.scss";

export default function Episode({ topPlace }: { topPlace: number}) {
  const episodeTopFiltered = episodes.filter( episode =>
    episode.topPlace === topPlace
  );

  const episodeList = episodeTopFiltered.map( episode =>
    <section key={episode.id} className={styles.description}>
      <h2 className={styles.title}>
        <span>{episode.name}</span> 
        <span>{episode.air_date}</span>
      </h2>
      <img src={episode.img_url} alt={episode.name} className={styles.image}/>
      <p className={styles.text}>{episode.description}</p>
    </section>
  );
  
  return (
    <Conteiner className={styles.edisodeList}>
      {episodeList}
    </Conteiner>
  );
}