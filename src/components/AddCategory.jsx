import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        // console.log(event.target.value);
        
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories =>  [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
                // onChange={(event) => onInputChange(event)} OTRA OPCIÖN DE MANDAR A LLAMAR A LA FUNCIÓN
            />
        </form>
    )
}
