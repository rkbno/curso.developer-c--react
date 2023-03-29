function newButton (text, callback) {
    const body = document.querySelector("body")
    const button = document.createElement("button")
    button.textContent = text

    callback(button)

    body.insertAdjacentElement("beforeend", button)

    return button
}

newButton("login", (button) => {
    button.style.cssText = `
        font-size: 40px;
        background-color: red;
        border: none;
        text-transform: uppercase;
        padding: 35px;
    `;
})

