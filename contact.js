const form = document.getElementById("contactForm");
const successMsg = document.querySelector(
  '[data-testid="test-contact-success"]'
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Reset messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.textContent = "";

  // Name validation
  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!email.value.trim()) {
    document.getElementById("error-email").textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    document.getElementById("error-email").textContent = "Enter a valid email";
    isValid = false;
  }

  // Subject
  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent =
      "Subject is required";
    isValid = false;
  }

  // Message
  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent =
      "Message must be at least 10 characters";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent =
      "✅ Thank you! Your message has been sent successfully.";
    form.reset();
  }
});
