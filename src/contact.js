export default loadContactPage

function loadContactPage() {
    const div = document.querySelector(".content");
    const addressHeading = document.createElement("p");
    addressHeading.textContent = "Adress:";
    addressHeading.className = "bold";
    const address = document.createElement("p");
    address.textContent = " 123 Elmwood Avenue,Springfield, IL 62701,United State";
    const phoneHeading = document.createElement("p")
    phoneHeading.className = "bold";
    phoneHeading.textContent = "Phone number:";
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "555-555-5555";
    const emailHeading = document.createElement("p");
    emailHeading.textContent = "Email:";
    emailHeading.className = "bold";
    const email = document.createElement("p");
    email.textContent = " fakeEmail@email.com";
    div.appendChild(addressHeading);
    div.appendChild(address);
    div.appendChild(phoneHeading);
    div.appendChild(phoneNumber);
    div.appendChild(emailHeading);
    div.appendChild(email);
}