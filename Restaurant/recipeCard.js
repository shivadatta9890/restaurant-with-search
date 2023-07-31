
const Recipecard = ({recipes})=>{
 
    return (
        <>
        <div className="container">
            {
           recipes ?  recipes.map((recipe)=>{
                return <div className='recipes'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <div className="names">
                        <span>{recipe.strMeal}</span>
                        <span>₹ {Math.floor(Math.random()*500)}</span>
                    </div>
                    <a href={recipe.strYoutube} target="_blank" className="link">watch video</a>
                </div>

                }) : <h1>sorry No items found 🤦‍♀️</h1>
            }
        </div>
        </>
    )
};
export default Recipecard;