    const input = document.getElementById("name-input");
    const inputOutput = document.getElementById("name-output");

    input.addEventListener("input", () => {
        const inputValue = input.value.trim();
        inputOutput.textContent = inputValue ? inputValue : "Anonymous";
    });