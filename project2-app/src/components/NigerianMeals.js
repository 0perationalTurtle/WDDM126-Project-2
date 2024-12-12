import React from 'react';

const meals = [
  {
    name: "Jollof Rice",
    image: "images/Jollof-rice.jpg",
    description: "A popular West African dish made with rice, tomatoes, and a blend of spices, often served with chicken, fish, or plantains.",
  },
  {
    name: "Pounded Yam and Egusi Soup",
    image: "/images/Pounded yam and egusi.jpeg",
    description: "Pounded Yam with Egusi Soup is a classic Nigerian meal, where yam is boiled and pounded into a smooth, stretchy dough served with a rich, melon seed-based stew.",
  },
];

function NigerianMeals() {
  return (
    <section id="nigerian-meals">
      <h2>Popular Nigerian Meals and Their Recipes</h2>
      <p>Eventhough we come from different tribes, we are all Nigerians and as such we share some dishes in common. Nigerian cuisine is known for its rich flavors and hearty ingredients. Here are two popular Nigerian dishes.</p>

      <section className="meal-container">
        {meals.map((meal, index) => (
          <section className="meal" key={index}>
            <h3>{meal.name}</h3>
            <img src={meal.image} alt={meal.name} className="meal-image" />
            <p>{meal.description}</p>
          </section>
        ))}
      </section>
    </section>
  );
}

export default NigerianMeals;