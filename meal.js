document.getElementById('search-meal').addEventListener('click',function(){
    getMealName();
    const inputMeal=document.getElementById('input-meal').value="";
})

const getMealName=mealName=>{
    const mealInputName=document.getElementById('input-meal').value;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInputName}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeal(data.meals));
    
}

const displayMeal=mealList=>{
    const mealsDiv=document.getElementById('meal-list');
    mealList.forEach(meal => {
        const mealDiv=document.createElement('div');
        mealDiv.className='meal';
        const mealInfo=`
        <img onclick="displayMealDetail('${meal.ingredient}')" src= "${meal.strMealThumb}" alt="meal-thumbnail"> 
        <h3 onclick="displayMealDetail('${meal.ingredient}')" class="meal-name"> ${meal.strMeal}</h3>
        `;
        mealDiv.innerHTML=mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

}

const displayMealDetail=ingredient=>{
    const url=`https://www.themealdb.com/api/json/v1/1/random.php`
    console.log(url);
    fetch(url)
    .then(response=> response.json())
    .then(data=> displayIngredientDetail(data.meals[0])); 
}

const displayIngredientDetail=meal=>{
    console.log(meal);
    const mealDiv=document.getElementById('ingredientDetail');
    mealDiv.innerHTML=`
        <img src="${meal.strMealThumb}" class="detail-image" alt="meal-thumbnail"> 
        <h3>Ingredient</h3> 
        <p>${meal.strIngredient1}</p>
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        <p>${meal.strIngredient6}</p>
        <p>${meal.strIngredient7}</p>
        <p>${meal.strIngredient8}</p>
        <p>${meal.strIngredient9}</p>
        <p>${meal.strIngredient10}</p>
    `;
}

