import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@material-ui/core";
import NotFound from "../NotFound";
import { getAttributeByType } from "../../services/api/index";
import { getTitle } from "../../utils/constants/helpers";

const RelatedGallery = () => {
  const { id, type, attribute } = useParams();
  const [relatedGallery, setRelatedGallery] = useState([]);
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    const updateRelatedGallery = async () => {
      const newRelatedGallery = await getAttributeByType(attribute, id, type);
      setRelatedGallery(newRelatedGallery.results);
      setHasItems(newRelatedGallery.count ? true : false);
    };
    updateRelatedGallery();
  }, []);

  return (
    <>
      <section className={`related-gallery ${type}-related-gallery`}>
        <h1 className="related-gallery__title">{`${attribute
          .charAt(0)
          .toUpperCase()}${attribute.slice(1)}`}</h1>
        <div className="related-gallery__container">
          {hasItems &&
            relatedGallery.map((item, index) => (
              <Card key={`${type}-${index}`}>
                <figure>
                  <img
                    loading="lazy"
                    src={
                      item.thumbnail
                        ? `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`
                        : "/img-not-found.jpeg"
                    }
                  />
                  <figcaption className="related-gallery__caption">
                    {item[getTitle(attribute)]}
                  </figcaption>
                </figure>
              </Card>
            ))}
        </div>
      </section>
      {!hasItems && <NotFound />}
    </>
  );
};

export default RelatedGallery;
