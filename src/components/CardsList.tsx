import { useState, useEffect } from "react";
import Conteiner from "../components/Conteiner";
import Card from "./Card";
import "../styles/CardsList.scss";

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

export default function CardsList() {
  const [character, setCharacter] = useState<Character[]>([]);
  const [cards, setCards] = useState("");
 
  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/")
      .then((res) => {
        return res.json();
      })
      .then((data: Character[]) => {
        setCharacter(data);
      });
  }, []);
  
  const filteredCards = cards === "" ? character :
    character.filter(person => person.status.includes(cards));
  const cardsList = filteredCards.map((mark: Character) => 
    <Card 
      key={mark.id}
      title={mark.name}
      imageSrc={mark.img_url}
      imageAlt={mark.name}
      statusNow={mark.status}  
    />
  )

  return (
    <Conteiner className={"cards__list"} >
      <ButtonsWrapper className={"buttons__items"}>
        <ButtonFilter
          onClick={() => setCards("")}
          buttonText={"All"}
          className={cards === "" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Alive")}
          buttonText={"Alive"}
          className={cards === "Alive" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Unknown")}
          buttonText={"Unknown"}
          className={cards === "Unknown" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Operational")}
          buttonText={"Operational"}
          className={cards === "Operational" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Deceased")}
          buttonText={"Deceased"}
          className={cards === "Deceased" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Imprisoned")}
          buttonText={"Imprisoned"}
          className={cards === "Imprisoned" ? "filter__active" : "button__filter"}
        />
        <ButtonFilter
          onClick={() => setCards("Destroyed")}
          buttonText={"Destroyed"}
          className={cards === "Destroyed" ? "filter__active" : "button__filter"}
        />
      </ButtonsWrapper>

      <CharactersCardsWrapper className={"characters__cards"}>
        {cardsList}
      </CharactersCardsWrapper>
    </Conteiner>
  )
}
interface WrapperProps {
  className: string;
  children?: React.ReactNode;
}
function ButtonsWrapper({ className, children }: WrapperProps) {
  return(
    <div className={className}>{children}</div>
  );
}
function CharactersCardsWrapper({ className, children }: WrapperProps) {
  return(
    <div className={className}>{children}</div>
  );
}

interface ButtonProps {
  className: string;
  onClick: () => void;
  buttonText: string;
}
function ButtonFilter ({ className, onClick, buttonText }: ButtonProps) {
  return(
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
}