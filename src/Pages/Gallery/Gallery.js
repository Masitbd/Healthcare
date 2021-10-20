import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://as2.ftcdn.net/v2/jpg/01/72/74/51/500_F_172745118_kfspuHw9aNALulN1yZI5VKWPQ6VqJVEt.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 2,
      src: "https://as1.ftcdn.net/v2/jpg/00/45/20/70/500_F_45207005_oWfbp8uUsuEV74nNLbGS4HyrybFXQek4.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 3,
      src: "https://as2.ftcdn.net/v2/jpg/01/18/99/37/500_F_118993701_9u7WzLQKflgKqxm43qNJSc11fEzRBCiA.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 4,
      src: "https://image.freepik.com/free-vector/hospital-facade-street-view-flat-style-ambulance-car-entrance_1268-11787.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 5,
      src: "https://image.freepik.com/free-vector/medical-icons-collection_1172-48.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 1,
      src: "https://as2.ftcdn.net/v2/jpg/01/72/74/51/500_F_172745118_kfspuHw9aNALulN1yZI5VKWPQ6VqJVEt.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 2,
      src: "https://as1.ftcdn.net/v2/jpg/00/45/20/70/500_F_45207005_oWfbp8uUsuEV74nNLbGS4HyrybFXQek4.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 3,
      src: "https://as2.ftcdn.net/v2/jpg/01/18/99/37/500_F_118993701_9u7WzLQKflgKqxm43qNJSc11fEzRBCiA.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 4,
      src: "https://image.freepik.com/free-vector/hospital-facade-street-view-flat-style-ambulance-car-entrance_1268-11787.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 5,
      src: "https://image.freepik.com/free-vector/medical-icons-collection_1172-48.jpg",
      title: "foo",
      description: "bar",
    },
  ];
  return (
    <div className="information-containe pt-3 pb-3">
      <div>
        <h2 className="text-center text-success">Image gallery</h2>
        {images.map(({ id, src }) => (
          <img key={id} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
