import React from "react";

const Loading = () => {
  return (
    <video className="loading-container" autoPlay loop muted playsInline>
      <source src="loading.webm" type="video/webm" />
    </video>
  );
};

export default Loading;
