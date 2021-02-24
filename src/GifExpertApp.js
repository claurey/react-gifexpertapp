import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Dragon Ball", "Samurai X"];

  const [categories, setCategories] = useState([
    "One Punch"
  ]);


  return (
    <>
      <h2>GifExpertApp</h2>
      <h3 style={{color:"gray"}}>Buscar GIF:</h3>
      <AddCategory setCategories={setCategories}/>
      <hr />
      
      <ol>
        {categories.map((category) =>
            <GifGrid 
                key={category}
                category={category}
            />
            )
          }
      </ol>
    </>
  );
};

export default GifExpertApp;
