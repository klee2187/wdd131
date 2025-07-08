
import recipes from "./recipes.mjs";

function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function getRandomRecipe(array) {
    const arrayLen = array.length;
    const randomNumIndex = getRandomNumber(arrayLen);
    return array[randomNumIndex];
}

console.log(getRandomRecipe(recipes));

function tagsTemplate(tags) {
    if (!tags || tags.length === 0) {
        return '';
    }

    const tagRecipes = tags.map(tag => `<li>${tag}</li>`).join('');
    return `<ul class="recipe_tags">${tagRecipes}</ul>`;
}

function ratingTemplate(rating) {
    let html = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    return html;
}

const getRecipe = getRandomRecipe(recipes);
console.log(recipeTemplate(getRecipe));

function recipeTemplate(recipe) {
    if(!recipe) {
        return `<p>Recipe not found<p>`;
    }

    return `<figure class="recipeCard">
            <div>
                <img src=${recipe.image} 
                alt="${recipe.name}">
            </div>
            <figcaption class="cardText">
                ${tagsTemplate(recipe.tags)}
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe_ratings">
                    <span
                    	class="rating"
                    	role="img"
                    	aria-label="Rating: ${recipe.rating} out of 5 stars"
                    >
                        ${ratingTemplate(recipe.rating)}
                    </span>
                </p>
                <p class="recipe_description">
                    ${recipe.description}
                </p>
            </figcaption>
        </figure>`;
}

function renderRecipes(recipeList) {
    const displayRecipe = document.querySelector("main");

        if (!displayRecipe) {
            console.error("Main element not found.");
            return;
        }
        if (!Array.isArray(recipeList) || recipeList.length === 0) {
            displayRecipe.innerHTML = `<p class="text-gray-500 italic text-center w-full">No recipes to display matching your criteria.</p>`;
            return;
        }

    const recipeHTMLstr = recipeList.map(recipe => recipeTemplate(recipe));
    displayRecipe.innerHTML = recipeHTMLstr.join('');
}

function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = recipes.filter(recipe => {
        if (recipe.name.toLowerCase().includes(lowerCaseQuery)) {
            return true;
        }

        if (recipe.description && recipe.description.toLowerCase().includes(lowerCaseQuery)) {
            return true;
        }

        if (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) {
            return true;
        }

        if (recipe.recipeIngredient && recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))) {
            return true;
        }

        return false;
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
}

function searchHandler(event) {

    if (event && event.preventDefault) {
        event.preventDefault();
    }

    const searchInput = document.querySelector('#search-bar');

    const query = searchInput.value.trim();
    const filteredResults = filterRecipes(query);
    renderRecipes(filteredResults);
}

function init() {
    const recipe = getRandomRecipe(recipes);
    renderRecipes([recipe]);
}

    document.querySelector('#search-button')
            .addEventListener('click', searchHandler);

    init();

