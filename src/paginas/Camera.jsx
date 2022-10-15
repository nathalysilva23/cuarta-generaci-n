import React, { useEffect, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let videoRef = useRef(null);

  let photoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current

    let photo = photoRef.current

    photo.width = width

    photo.height = height

    let ctx = photo.getContext('2d')

    ctx.drawImage(video, 0, 0, width, height)
    
  }

  const clearImage = () => {
    let photo = photoRef.current

    let ctx = photo.getContext('2d')

    ctx.clearRect(0,0,photo.width,photo.height)
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="container">


      <video ref={videoRef} className="container"></video>

      <button onClick={takePicture} className="btn btn-danger container">TOMA UNA FOTO</button>

      <canvas className="container" ref={photoRef}></canvas>

      <button onClick={clearImage} className="btn btn-primary container">ELIMINAR FOTO</button>

      <br/><br/>
    </div>
  );
}

export default App;
