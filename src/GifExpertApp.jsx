import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={value => onAddCategory(value)} 
            // el onNewCategory={} manda a llamar el valor en el componente
            // despues trae ese valor y lo mete en onAddCategory()
            // con setCategories{} pasaba lo mismo pero era mas directo
        />

        {
        categories.map((category) => ( 
            <GifGrid key={category} category={category} />
        ))
        }

    </>
  )
}
