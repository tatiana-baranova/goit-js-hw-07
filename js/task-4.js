const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    let formValid = true;
    for (let element of elements) {
        if (element.type !== "submit" && element.value.trim() === "") {
            alert("All form fields must be filled in" + element.name);
            formValid = false;
        }
    };
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }
    console.log(info);
    event.target.reset();
}