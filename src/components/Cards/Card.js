import React from "react";
import { Button, Card as CardUI } from "@material-ui/core";

const Card = ({ characterName, thumbnail }) => {
  return (
    <CardUI className="card-container">
      <figure>
        <div className="card-buttons">
          <Button className="card-button">Details</Button>
          <Button className="card-button">Comics</Button>
          <Button className="card-button">Stories</Button>
        </div>
        <img src={thumbnail} />
        <figcaption className="card-caption">{characterName}</figcaption>
      </figure>
    </CardUI>
  );
};

export default Card;
