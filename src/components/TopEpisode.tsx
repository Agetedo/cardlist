import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import { topEpisode } from "../dataBase/topEpisode";
import styles from "../styles/TopEpisode.module.scss";
const episodeTopText = "Created by Olan Rogers for TBS, Final Space is one among several sci-fi comedies flooding onto screens these past few years. This one, however, is a fun cocktail of the genre with the style of comedy best portrayed in shows like The Simpsons and Futurama.";

export default function TopEpisode() {
  const topList = topEpisode.map((episode) => 
    <div className={styles.episode} key={episode.id}>
      <Link to={episode.linkTo} className={styles.episodePageLink}>
        <h3 className={styles.name}>{episode.name}</h3>
        <img className={styles.image} src={episode.img_url} alt={episode.name} />
        <span className={styles.topPlace}>{episode.topPlace}</span>
      </Link>
      
      <p className={styles.airDate}>Release date {episode.air_date}</p>
      <div className={styles.episodePanel}>
        <span className={styles.director}>Director: {episode.director}</span>
        <span className={styles.writer}>Writer: {episode.writer}</span>
      </div>
    </div>
  )

  return (
    <Conteiner className={styles.topEpisode}>
      <TopEpisodeTitle 
        title={"Top 3 episodes"}
        text={episodeTopText}
      />
      <div className={styles.topEpisodeList}>{topList}</div>
    </Conteiner>
  )
}
function TopEpisodeTitle({ title, text }: { title: string, text: string }) {
  return(
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </>
  );
}