/**
 * contact.js
 * Handles form validation and email sending logic.
 */

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value, // Fixed referencing "name" multiple times error
    subject: document.getElementById("subject") ? document.getElementById("subject").value : "Message from Portfolio",
    message: document.getElementById("message").value,
  };

  const serviceID = "service_y1vf749"; // Your EmailJS Service ID
  const templateID = "template_18elw9n"; // Your EmailJS Template ID

  emailjs.send(serviceID, templateID, params) // Note: fixed "email.js" reference to typically "emailjs.send" 
    .then(
      res => {
        // Clear inputs after success
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        if(document.getElementById("subject")) document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log("Success!", res.status, res.text);
        alert("Your message sent successfully");
      }
    )
    .catch((err) => {
      console.log("Failed...", err);
      alert("Failed to send message. Please try again later.");
    });
}
