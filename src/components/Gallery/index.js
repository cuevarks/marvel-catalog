import React, { useContext } from "react";
import Card from "../Cards";
import Loading from "../Loading";
import { getTitle } from "../../utils/constants/helpers";
import GlobalContext from "../../contexts/GlobalContext";

const Gallery = ({ type }) => {
  const { state } = useContext(GlobalContext);
  return (
    <section className={`gallery ${type}-gallery`}>
      <div
        className={`gallery-container ${state[type].length ? "" : "loading"} `}
      >
        {state[type].length ? (
          state[type].map((item, index) => (
            <Card
              key={`${index}-char`}
              id={item.id}
              title={item[getTitle(type)]}
              type={type}
              thumbnail={
                item.thumbnail
                  ? `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`
                  : "img-not-found.jpeg"
              }
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default Gallery;
