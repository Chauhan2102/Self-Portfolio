document.addEventListener("DOMContentLoaded", function () {
    const greetings = ["Namaste", "Hi", "Hola", "Bonjour", "Ciao"]; // List of greetings
    let index = 0;
    const greetingElement = document.getElementById("greeting");

    function typeEffect(text, i = 0) {
        if (i < text.length) {
            greetingElement.textContent = text.substring(0, i + 1); // Typing effect
            setTimeout(() => typeEffect(text, i + 1), 300); // Slower typing (200ms per letter)
        } else {
            setTimeout(deleteEffect, 3500); // Pause before deleting (1.5s)
        }
    }

    function deleteEffect(i = greetings[index].length) {
        if (i > 0) {
            greetingElement.textContent = greetings[index].substring(0, i - 1); // Deleting effect
            setTimeout(() => deleteEffect(i - 1), 100); // Slower deleting (100ms per letter)
        } else {
            index = (index + 1) % greetings.length; // Move to next greeting
            setTimeout(() => typeEffect(greetings[index]), 700); // Pause before typing next greeting (0.7s)
        }
    }

    typeEffect(greetings[index]); // Start the animation
});
