import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) =>{ 
    event.preventDefault();
    //evita que se manden un unico caracter o string vacios
    if(inputValue.trim().length<=1) return;

    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    // se eliminaa el valor del input;
    setInputValue('')
  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
  )
}
