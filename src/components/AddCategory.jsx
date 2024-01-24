import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
 
    if (inputValue.trim().length <= 1) return;
    
    setInputValue('');
    onNewCategory(inputValue.trim());

    
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        //tambien lo acepta asi onChange={(event)=>onInputChange(event)}
      />
    </form>
  )
}

//ejemplo de como funciona tambien
// export const AddCategory = ({ setCategories }) => {
//     const [inputValue, setInputValue] = useState("");
  
//     const onInputChange = ({ target }) => {
//       setInputValue(target.value);
//     };
    
//     const onSubmit = (event) => {
//       event.preventDefault();
      
//       if (inputValue.trim().length <= 1) return;
      
//       setCategories(categories => [...categories, inputValue]);
//       setInputValue("");
      
//     };
  
//     return (
//       <form onSubmit={(event) => onSubmit(event)}>
//         <input
//           type="text"
//           placeholder="Buscar gifs"
//           value={inputValue}
//           onChange={onInputChange}
//           //tambien lo acepta asi onChange={(event)=>onInputChange(event)}
//         />
//       </form>
//     );
//   };