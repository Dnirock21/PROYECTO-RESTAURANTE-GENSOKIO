import { useState, useEffect} from 'react';
import apiClient from '../utils/api';


interface Recipe {
    _id: string;
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    image?: string;
}

const useFetchRecipes = () =>{
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setIsLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchRecipes = async () => {
            try {
                const response = await apiClient.get('api/recipes');
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes',error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return{recipes, loading};
};

export default useFetchRecipes;