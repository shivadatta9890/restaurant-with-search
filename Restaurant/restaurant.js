import { useState,useEffect } from 'react';
import './styles.css';
import './header.css'
import Header from './header';
import Recipecard from './recipeCard';
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const Restaurant = ()=>{
    const [query,setQuery] = useState("");
    const [recipes,setRecipes] = useState([]);
    

    const fetchData = async()=>{
        const api = apiUrl+query;
        const res = await fetch(api);
        const data = await res.json();
        console.log(data.meals);
        setRecipes(data.meals);

    }
   
    useEffect(()=>{
        fetchData();
    },[]);
    const submitHandler = (e)=>{
        e.preventDefault();
        fetchData();
        setQuery("");
    }
    
    return (
        <>
        <Header />
        <div className="header">
            <h1>search your <span className='text'>food here</span></h1>
            <form onSubmit={submitHandler}>
            <input type="text" autoComplete='off' placeholder="search here" name="query" onChange={(e)=> setQuery(e.target.value)} required/>
            <input type="submit" value="search"/>
            </form>
        </div>
        <Recipecard recipes={recipes}/>
        
        </>
    )
};
export default Restaurant;