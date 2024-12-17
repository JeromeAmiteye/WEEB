// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Attach an event listener to the form
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        // Prevent the form from submitting traditionally
        event.preventDefault();

        // Retrieve the form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create an object to store the contact details
        const contactDetails = {
            name: name,
            email: email,
            message: message,
            submittedAt: new Date().toLocaleString() // Add timestamp
        };

        // Retrieve any existing contacts from localStorage or initialize an empty array
        const existingContacts = JSON.parse(localStorage.getItem("contactDetails")) || [];

        // Add the new contact details to the existing contacts array
        existingContacts.push(contactDetails);

        // Save the updated contacts back to localStorage
        localStorage.setItem("contactDetails", JSON.stringify(existingContacts));

        // Confirmation alert
        alert("Your message has been submitted successfully!");

        // Optional: Clear the form fields
        document.getElementById("contactForm").reset();
    });
});

console.log(localStorage.getItem("contactDetails"));