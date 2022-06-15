import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( (cat) => [inputValue, ...cat]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }


  return (
    <>
        <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar gifs"
            onChange={onInputChange /*(e) => onInputChange(e)*/}
            value={inputValue}
            />
        </form>
    </>
  )
}
