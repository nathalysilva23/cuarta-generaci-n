import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'



const cards = [
  {
    id: 1,
    title: "Facebook",
    image: image1,
    url: "https://www.facebook.com/profile.php?id=100009360757339",
  },
  {
    id: 2,
    title: "Instagram",
    image: image2,
    url: "https://instagram.com/nathhhhhhhhh__?igshid=YmMyMTA2M2Y=",
  },
  {
    id: 3,
    title: "Youtube",
    image: image3,
    url: "https://www.youtube.com/channel/UChkADF5GHjiL-cYlGw8KVmA",
  },

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
        

        
      </div>
    </div>
  );
}

export default Cards;