import { useState } from "react";
import deleteIcon from "/delete-icon.png";
import likeIcon from "/like-icon.png";
import "../styles/Card.scss";

interface CardPropsType {
  imageSrc: string;
  title: string;
  statusNow: string;
  imageAlt: string;
}

export default function Card({ imageSrc,imageAlt, title, statusNow }: CardPropsType) {
  const [deleteCard, setDeleteCard] = useState(true);
  const [likedCard, setLikedCard] = useState(false);

  return (
    <div className="delete__cards">
      {deleteCard && 
        <div className="card" >
          <button onClick={() => setLikedCard(!likedCard)} 
            className={likedCard ? "like__clicked" : "like__button"}>
            <LikeThisCard/>
          </button>
         
          <img className="card__image" src={imageSrc} alt={imageAlt} />
          <h3 className="card__title">{title}</h3>
          <p className="card__status">{statusNow}</p>
        </div>
      }
      <button onClick={() => setDeleteCard(!deleteCard)} className="delete__button">
        {deleteCard && <DeleteThisCard />} 
      </button>
    </div>
  )
}

function DeleteThisCard() {
  return (
    <>
      <img src={deleteIcon} alt="#" />
    </>
  )
}
function LikeThisCard() {
  return (
    <>
      <img src={likeIcon} alt="#" />
    </>
  )
}