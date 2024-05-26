import React from "react";

const ImageCard = ({ name, message, image, left = true }) => {
  return (
    <div className="row align-items-start big-container">
      {left ? (
        <>
          <div className="col-md-8 d-flex align-items-center content-container">
            <div className="col-md-4">
              <img
                className="img-fluid rounded-circle"
                src={image}
                alt="Image"
              />
            </div>
            <div className="text-container">
              <p>{message}</p>
              <span className="author">{name}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-md-8 d-flex align-items-center content-container">
            <div className="text-container">
              <p>{message}</p>
              <span className="author">{name}</span>
            </div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid rounded-circle" src={image} alt="Image" />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCard;
