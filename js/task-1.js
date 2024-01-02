const categories = document.querySelector("ul#categories");
const items = categories.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});