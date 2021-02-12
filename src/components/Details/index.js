import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { getDetailsById } from "../../services/api/getDetailsById";
import Loading from "../Loading";

const Details = () => {
  const [details, setDetails] = useState([]);
  const { id, type } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const detailsInfo = await getDetailsById(id, type);
      setDetails(detailsInfo);
    };
    getDetails();
  }, []);

  return (
    <section className="details-container">
      {details.length ? (
        details.map((detail) => (
          <>
            <Paper key={`${type}-${id}`} className="details-card">
              <figure>
                <img
                  loading="lazy"
                  src={`${detail.thumbnail.path}/portrait_uncanny.${detail.thumbnail.extension}`}
                />
              </figure>
              <article className="details-info">
                <h1>{detail[`${type === "characters" ? "name" : "title"}`]}</h1>
                <p>{detail.description}</p>
              </article>
            </Paper>
          </>
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Details;
