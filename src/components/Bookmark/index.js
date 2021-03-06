import React from "react";
import { Card } from "@material-ui/core";
import { getLocalStorageData } from "../../utils/constants/helpers";

const Bookmark = () => {
  const bookmarks = getLocalStorageData("saved-items");

  return (
    <section className="related-gallery bookmarks">
      <fragment
        className={`related-gallery__container ${
          bookmarks && bookmarks.length ? "" : "not-found"
        }`}
      >
        {bookmarks && bookmarks.length ? (
          bookmarks.map((bookmark, index) => (
            <Card key={`bookmark-${index}`}>
              <figure>
                <img
                  alt={`Bookmarked item titled ${bookmark.title}`}
                  loading="lazy"
                  src={bookmark.thumbnail}
                />
                <figcaption className="related-gallery__caption">
                  {bookmark.title}
                </figcaption>
              </figure>
            </Card>
          ))
        ) : (
          <h1 className="not-found-bookmark">
            You don&apos;t have any saved bookmarks
          </h1>
        )}
      </fragment>
    </section>
  );
};

export default Bookmark;
