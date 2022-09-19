const list = document.querySelector("#categories");
const items = list.children;
const itemCount = items.length;
console.log('Number of categories: ', itemCount);

for (const item of items) {
    // console.log(item);
    const itemTitle = item.firstElementChild.textContent;
    console.log('Category: ', itemTitle);
    const itemCount = item.querySelectorAll('li');
    console.log('Elements: ', itemCount.length);
};
