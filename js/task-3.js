    const input = document.querySelector("input#name-input");
    const inputOutput = document.querySelector("span#name-output");

    input.addEventListener("input", () => {
        const inputValue = input.value.trim();
        inputOutput.textContent = inputValue ? inputValue : "Anonymous";
    });