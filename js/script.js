const nameText = "Chinmoy Phukon";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeName() {
    if (index < nameText.length) {
        typingElement.textContent += nameText.charAt(index);
        index++;

        setTimeout(typeName, 120);
    }
}

typeName();