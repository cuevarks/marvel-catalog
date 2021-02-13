import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card as CardUI } from "@material-ui/core";
import {
  addLocalStorageData,
  getLocalStorageData,
  removeLocalStorageData,
} from "../../utils/constants/helpers";
const bookmarkedItem = (bookmarks, title) => {
  let isBookmarked = false;
  if (bookmarks) {
    isBookmarked = bookmarks.find((element) => element.title === title);
    return isBookmarked;
  }
  return isBookmarked;
};
const Card = ({ id, thumbnail, title, type }) => {
  const bookmarks = getLocalStorageData("saved-items");
  const isBookmarked = bookmarkedItem(bookmarks, title);
  const [bookmark, setBookmark] = useState(!isBookmarked);
  const handleBookmark = () => {
    setBookmark(!bookmark);
    bookmark
      ? addLocalStorageData("saved-items", { title, thumbnail })
      : removeLocalStorageData("saved-items", title);
  };

  return (
    <CardUI className="card-container">
      <figure>
        <div className="card-buttons">
          <Button
            aria-label="Bookmark"
            className="bookmark-button"
            onClick={handleBookmark}
          >
            {bookmark ? "Bookmark" : "Remove"}
          </Button>
          {type === "characters" ? (
            <span>
              <Link to={`/${type}/details/${id}`}>
                <Button aria-label="Details" className="card-button">
                  Details
                </Button>
              </Link>
              <Link to={`/${type}/${id}/comics`}>
                <Button aria-label="Comics" className="card-button">
                  Comics
                </Button>
              </Link>
              <Link to={`/${type}/${id}/stories`}>
                <Button aria-label="Stories" className="card-button">
                  Stories
                </Button>
              </Link>
            </span>
          ) : type === "comics" ? (
            <span>
              <Link to={`/${type}/details/${id}`}>
                <Button aria-label="Details" className="card-button">
                  Details
                </Button>
              </Link>
              <Link to={`/${type}/${id}/characters`}>
                <Button aria-label="Characters" className="card-button">
                  Characters
                </Button>
              </Link>
              <Link to={`/${type}/${id}/stories`}>
                <Button aria-label="Stories" className="card-button">
                  Stories
                </Button>
              </Link>
            </span>
          ) : (
            <span>
              <Link to={`/${type}/${id}/characters`}>
                <Button className="card-button">Characters</Button>
              </Link>
              <Link to={`/${type}/${id}/comics`}>
                <Button className="card-button">Comics</Button>
              </Link>
            </span>
          )}
        </div>
        <img alt={`${type} title ${title}`} loading="lazy" src={thumbnail} />
        <figcaption className="card-caption">{title}</figcaption>
      </figure>
    </CardUI>
  );
};

export default Card;
