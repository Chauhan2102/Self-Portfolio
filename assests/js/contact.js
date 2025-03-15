document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let isValid = true;
    const formFields = document.querySelectorAll(".input-group input");
    
    formFields.forEach(field => {
        const errorMessage = field.nextElementSibling;
        if (!field.value.trim()) {
            errorMessage.textContent = "This field is required.";
            isValid = false;
        } else if (field.id === "phone" && !/^\d{10}$/.test(field.value)) {
            errorMessage.textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else if (field.id === "email" && !/^\S+@\S+\.\S+$/.test(field.value)) {
            errorMessage.textContent = "Enter a valid email.";
            isValid = false;
        } else {
            errorMessage.textContent = ""; // Clear error if valid
        }
    });

    if (isValid) {
        sendEmail();
    }
});

function sendEmail() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const business = document.getElementById("business").value;

    const subject = `Contact Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0A
                  Phone: ${phone}%0D%0A
                  Email: ${email}%0D%0A
                  Business: ${business}`;

    const recipientEmail = "your-email@example.com"; // Replace with your email
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
