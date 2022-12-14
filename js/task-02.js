// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
console.log(listRef);
const listItem = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");
  return itemEl;
});
listRef.append(...listItem);
