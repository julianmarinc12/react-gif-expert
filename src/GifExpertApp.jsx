
import {React, useState} from 'react'
import {AddCategory,GifGrid} from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch'])

  const onAddCategory = (NewCategory)=>{
    // evita que no se envien valores identicos
    if (categories.includes(NewCategory)) return;
    setCategories([ NewCategory ,...categories])
  }

  return (
    <>
       {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory = {(event) => onAddCategory(event)}
      />

      {/* listado de Gif */}
      
      {
        categories.map((category) =>(
            <GifGrid 
              key={category}
              category={category}/>
          ))
      }
      

        {/* Gif items */}
    
    </>
    
  )
}
