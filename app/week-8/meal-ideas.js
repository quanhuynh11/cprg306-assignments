"use client"

import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}) {

    const [mealList, setMealList] = useState([]);

    async function getListOfMeals(ingredient) {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if (!response.ok) console.log(response.status);

            const data = await response.json();
            
            if(data.meals != null) {

                let mealArray = [...data.meals];
                setMealList(mealArray);
            }
            else {
                setMealList([]);
            };

        }  
        catch (error) {
            console.log(`An error has occurred: ${error.message}`);
        };
    };

    async function getMealDetails(mealID) {

        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
            );
            if (!response.ok) console.log(response.status);

            const data = await response.json();

            let meal = data.meals[0];

            let ingredients = [];

            // console.dir(meal);

            if(mealID != null) {

                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];

                    ingredients.push(`${measure} ${ingredient}`.trim(""));
                }

            };
            // console.log(ingredients);

        } 
        catch (error) {
            console.log(`An error has occurred: ${error.message}`);
        };
    };

    useEffect( () => {
        getListOfMeals(ingredient);
    }, [ingredient]);

    // useEffect(() => {
    //     console.dir(mealList);
    // }, [mealList]);

    return (
        <section>
            <h3 className="text-3xl text-center p-5">Meal Ideas</h3>
            <ul>
                {
                    mealList.map( (meal) => (
                        <li 
                            className="m-2 p-5 bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-600" 
                            key={meal.idMeal}
                            onClick={() => getMealDetails(meal.idMeal)}
                        >
                            {meal.strMeal}
                        </li>
                    ) )
                }
            </ul>
        </section>
    );
};