// Add an event listener to the form for 'submit'
document.getElementById("userForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting traditionally
    event.preventDefault();

    // Retrieve form input values
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const countrycode = document.getElementById("countrycode").value;
    const contact = document.getElementById("contact").value;
    const nationality = document.getElementById("nationality").value;
    const country = document.getElementById("country").value;
    const appointment = document.getElementById("appointment").value;
    const email = document.getElementById("email").value;

    // Check if all fields are filled
    if (!name || !dob || !gender || !contact || !nationality || !country || !appointment || !email) {
        alert("Please fill in all fields before submitting.");
        return; // Stop execution if any field is empty
    }

    // Create an object to hold the form data
    const userDetails = {
        name: name,
        dateOfBirth: dob,
        gender: gender,
        countrycode:countrycode,
        contactNumber: contact,
        nationality: nationality,
        country: country,
        appointment: appointment,
        email: email
    };

    // Convert the data to JSON format
    const userData = JSON.stringify(userDetails);

    // Store the JSON string in localStorage
    localStorage.setItem("userDetails", userData);

    // Confirmation alert
    alert("Form details have been stored successfully!");

    // Optional: Clear the form fields after submission
    document.getElementById("userForm").reset();
});


console.log(localStorage.getItem("userDetails"));