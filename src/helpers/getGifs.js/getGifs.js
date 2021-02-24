//Trae imagenes
export const getGifs = async(category) => {
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=2nJuzvi2p6kRAxrr8yqM77ejiNgcIx4g`
    );
    const {data}= await respuesta.json();

    const gifs = data.map((images)=>{
      return{
        id: images.id,
        title: images.title,
        url: images.images.downsized_medium.url
      }
        
    })
    return gifs;    
  };