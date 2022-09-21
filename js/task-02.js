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

  return items.push(item);
});

  const list = document.querySelector('#ingredients');
list.append(...items);

