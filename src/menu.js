export { createMenu,loadMenuPage };
function categories() {
    const categoriesList = [];
    const addCategorie = (categorie) => {
        categoriesList.push(categorie);
    }
    return { categoriesList, addCategorie };
}
function meals() {
    const mealsList = [];

    return { mealsList };
}

function meal(name, Description) {

    return { name, Description };
}

function course(categorie) {
    const meals = []
    const addMeal = (meal) => {
        meals.push(meal);
    }
    return { categorie, meals, addMeal };
}

function createMenu() {
    let Bruschetta = meal('Bruschetta with Tomato and Basil', "Toasted bread topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.");
    let Mushrooms = meal("Stuffed Mushrooms", "Oven-baked mushrooms filled with a creamy garlic and herb stuffing.");

    let appetizers = course("Appetizers");
    appetizers.addMeal(Bruschetta);
    appetizers.addMeal(Mushrooms);

    let menu = categories();
    menu.addCategorie(appetizers);

    let salmon = meal('Grilled Salmon with Asparagus', "Freshly grilled salmon served with lemon butter sauce and a side of tender asparagus.");
    let pizza = meal("Classic Margherita Pizza", "A stone-baked pizza with fresh mozzarella, basil, and tomato sauce.");

    let mainCourses = course("Main Courses");
    mainCourses.addMeal(salmon);
    mainCourses.addMeal(pizza);

    menu.addCategorie(mainCourses);

    let cake = meal('Molten Chocolate Lava Cake', "Warm chocolate cake with a gooey center, served with a scoop of vanilla ice cream.");
    let Sorbet = meal("Lemon Sorbet", "A refreshing scoop of lemon sorbet, perfect for cleansing the palate.");

    let desserts = course("Desserts");
    desserts.addMeal(cake);
    desserts.addMeal(Sorbet);

    menu.addCategorie(desserts);

    return menu;

}

function loadMenuPage() {
    const div = document.querySelector(".content");
    createMenu().categoriesList.forEach(categorieElemenet => {
      const cell = document.createElement("div");
      cell.className = "cell";
      const categorieTitle = document.createElement("h2");
      categorieTitle.textContent = categorieElemenet.categorie;
      cell.appendChild(categorieTitle);
      categorieElemenet.meals.forEach(meal => {
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const content1 = document.createElement("div");
        content1.className = "content1";
        p.className = "mealName";
        p2.className = "description";
        p.textContent = `${meal.name}: `;
        p2.textContent = `${meal.Description}`;
        content1.appendChild(p);
        content1.appendChild(p2);
        cell.appendChild(content1);
      });
      div.appendChild(cell);
    });
}

