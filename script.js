document.getElementById("resume").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./public/Mitu_kr__Rabha_-_Full_Stack_Developer (1).pdf";
  link.download = "Mitu_kr_Rabha_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
(function () {
  emailjs.init("mT4sEmKo3xQDYEkfU"); // ✅ Your EmailJS Public Key
})();

// ✅ Select form elements
const useremail = document.getElementById("email");
const usermessage = document.getElementById("message");
const usersend = document.getElementById("email-send");
const username = document.getElementById("name");
const statusMsg = document.getElementById("status-msg");

// ✅ Add event listener for button click
usersend.addEventListener("click", () => {
  // ✅ Validate input fields
  if (
    !useremail.value.trim() ||
    !usermessage.value.trim() ||
    !username.value.trim()
  ) {
    statusMsg.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  // ✅ Prepare email data
  const templateParams = {
    user_email: useremail.value,
    user_name: username.value,
    user_message: usermessage.value,
  };

  // ✅ Send email using EmailJS
  emailjs
    .send("service_75tyb48", "template_w7o55rg", templateParams) // Wrapped in quotes
    .then((response) => {
      statusMsg.textContent = "✅ Message sent successfully!";
      username.value = "";
      useremail.value = ""; // ✅ Clears input field
      usermessage.value = ""; // ✅ Clears message field
    })
    .catch((error) => {
      statusMsg.textContent = "❌ Error sending message. Try again.";
      console.error("EmailJS error:", error);
    });
});

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
