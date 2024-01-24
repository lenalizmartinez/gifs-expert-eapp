import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, [])

  return (
    <>
    {console.log(images)}
      <h3>{category}</h3>

      <div className="card-grid">
          {images.map((image) => {
            <GifItem key={image.id} {...image} />
          })}

      </div>
    </>
  )
}

//otra forma de hacerlo
//useEffect(()=>{
//     getGifs(category)
//     .then(newImages => setImages(newImages));
// }, [])
//algun proceso que necesitemos que se realice, es decir efectos secundarios
//cuando el componente se renderiza por primera vez quiero que se realice algo, para eos se usan los hook
