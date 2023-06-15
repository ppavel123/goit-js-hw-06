const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const element = category.querySelectorAll('li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${element.length}`);
});