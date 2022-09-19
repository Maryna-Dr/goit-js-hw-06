const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let items = [];

ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  console.log(item);

  return items.push(item);
});

console.log(items);

  const list = document.querySelector('#ingredients');
list.append(...items);
console.log(list);

