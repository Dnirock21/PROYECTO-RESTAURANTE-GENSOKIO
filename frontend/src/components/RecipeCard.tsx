interface Recipe {
    title: string;
    category: string;
    instructions: string;
    image?: string; // Opcional en caso de que no siempre haya imagen
    ingredients: string[];
  }

  interface RecipeCardProps {
    recipe: Recipe;
  }
  
  const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { title, category, instructions, image, ingredients } = recipe;
  
    return (
      <div className="recipe-card">
        <img src={image || "default.jpg"} alt={title} />
        <h3>{title}</h3>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
      </div>
    );
  };
  
  export default RecipeCard;
  