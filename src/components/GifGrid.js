import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

  const {data:images,loading} = useFetchGifs(category);


  return (
    <>
    <h3>{category}</h3>
    <hr/>
    <div className="card-wrapper">

     {loading && <p>Loading...</p>}
      
   
        {
          images.map(img=>
          (
           <GifGridItem key={img.id} {...img}/>))
          }
        
          
        
    </div>
    </>
  );
};

export default GifGrid;
