const categoriesListEl = document.querySelector("ul#categories");
const categoriesItemsEl = categoriesListEl.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((item) => {
  const headingText = item.querySelector("h2").textContent;
  const liItems = item.querySelectorAll("ul>li");
  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${liItems.length}`);
});
