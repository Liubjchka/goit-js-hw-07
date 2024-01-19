const categoriesList = document.querySelector('ul#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const headingText = item.querySelector("h2").textContent;
  const liItems = item.querySelectorAll("ul>li");
  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${liItems.length}`);
});