"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    if (ingredient !== "") {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log(data);
      return data.meals;
    } else {
      console.log("Ingredient is empty. No API request made.");
    }
  } catch (error) {
    console.log("error : " + error);
  }
}

function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);
  async function loadMealIdea() {
    try {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
    console.log(meals);
  }
  useEffect(() => {
    loadMealIdea();
  }, [ingredient]);

  return (
    <>
      <div className="ml-7">
        <h1 className="text-4xl mb-3">Meal Idea</h1>
        {meals === undefined ? (
          <p>Select ingredient to view meal idea</p>
        ) : meals === null ? (
          <p>No meal ideas found for {ingredient}</p>
        ) : (
          <>
            <p>Here is meal idea with {ingredient}</p>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="p-2 m-3 max-w-sm bg-slate-800 hover:bg-orange-700"
              >
                <h1 className="text-base font-normal">{meal.strMeal}</h1>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default MealIdea;
