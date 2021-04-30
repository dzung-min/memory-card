import ImageContainer from "./components/GameBoard/ImageContainer";
import Image from "./components/GameBoard/Image";
import ImageTitle from "./components/GameBoard/ImageTitle";
import GameBoard from "./components/GameBoard/GameBoard";
import imagesPool from "./lib/imagesPool";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import suffingArray from "./lib/suffingArray";

const App = () => {
  const [highScore, setHighScore] = React.useState(0);
  const [clickedImages, setClickedImages] = React.useState([]);
  const [images, setImages] = React.useState(imagesPool);

  const onImageClickHanlder = (event) => {
    if (!clickedImages.includes(event.target.dataset.id)) {
      setClickedImages((prevClickedImages) =>
        prevClickedImages.concat(event.target.dataset.id)
      );
    } else {
      setClickedImages([]);
    }
    setImages((prevImages) => suffingArray(prevImages));
  };

  React.useEffect(() => {
    if (highScore < clickedImages.length) {
      setHighScore(clickedImages.length);
    }
  }, [clickedImages.length, highScore]);

  return (
    <>
      <NavBar score={clickedImages.length} highScore={highScore}></NavBar>
      <GameBoard>
        {images.map((image) => (
          <ImageContainer key={image.id}>
            <Image
              src={process.env.PUBLIC_URL + "images/" + image.src}
              onImageClickHanlder={onImageClickHanlder}
              imageID={image.id}
            />
            <ImageTitle>{image.name}</ImageTitle>
          </ImageContainer>
        ))}
      </GameBoard>
    </>
  );
};

export default App;
