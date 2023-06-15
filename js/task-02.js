const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul#ingredients");

const makeIngredients = ingredients => {
  return ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });
};

const liElements = makeIngredients(ingredients);
ul.append(...liElements);

console.log(ul);




