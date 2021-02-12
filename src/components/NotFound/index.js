import React from "react";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="related-gallery__title">Oops there&apos;s nothing here</h1>
      <video autoPlay loop muted playsInline>
        <source src="not-found.webm" type="video/webm" />
      </video>
    </section>
  );
};

export default NotFound;
