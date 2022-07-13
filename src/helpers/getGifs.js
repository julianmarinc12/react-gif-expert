
//coneccion con el api de gifExpres
export const getGifs = async (category) =>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Knbj4gAMc8LNYUVe26gJI5RWVBudwRSU&q=${category}&limit=20`
  const resp =await fetch(url);
  const {data} =await resp.json();
  const gifs =data.map(img =>({
    id :img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  

  return gifs

}