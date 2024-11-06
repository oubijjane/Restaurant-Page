export{loadPage};
import imgRest from "./rests.jpg";


function loadPage() {
    const div = document.querySelector(".content");

    const greeting = document.createElement("h1");
    greeting.textContent = "Welcome to our restaurant!";
    div.appendChild(greeting);

    const smallDescription = document.createElement("p");
    smallDescription.textContent = "The Finest Dining Experience in the city";
    div.appendChild(smallDescription);

    const picture = document.createElement("img");
    picture.src = imgRest;
    
    //Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
    picture.setAttribute("alt", "inside the restaurant");
    div.appendChild(picture);

    const Description = document.createElement("p");
    Description.textContent = `At our restaurant, we believe in crafting an unforgettable dining experience.
                            Our chefs bring creativity and passion to every dish, using only the freshest
                            ingredients to create flavors that delight and inspire. Whether you’re looking
                            for a cozy dinner for two or a celebration with friends and family, we’re here
                            to make your experience exceptional.`;
    div.appendChild(Description);

    const dishs = document.createElement("p");
    const b = document.createElement("b");
    b.textContent = "Our Specialties Include:";
    dishs.appendChild(b);
    div.appendChild(dishs);

    const bestDishs = document.createElement("ul");
    const bestDish1 = document.createElement("li");
    bestDish1.textContent = `Grilled Salmon with Asparagus - A savory masterpiece with flavors you won’t find anywhere else.`;
    bestDishs.appendChild(bestDish1);

    const bestDish2 = document.createElement("li");
    bestDish2.textContent = `Lemon Sorbet - Our chef’s favorite, blending traditional recipes with modern flair.`;
    bestDishs.appendChild(bestDish2);

    const bestDish3 = document.createElement("li");
    bestDish3.textContent = `Stuffed Mushrooms - A delightful dish that’s as beautiful as it is delicious.`;
    bestDishs.appendChild(bestDish3);

    div.appendChild(bestDishs);

    const secondeGreeting = document.createElement("p");
    secondeGreeting.textContent = `Come in and see why our guests keep coming back for more. We can't wait to welcome you!`;
    div.appendChild(secondeGreeting);

}