// ================= NAVBAR =================

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  navMenu.classList.toggle("active");
}

// Close menu when clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navMenu").classList.remove("active");
  });
});

// ================= CONTACT FORM =================

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill all the fields.");

    return;
  }

  alert("Thank you " + name + "! Your message has been received.");

  document.querySelector(".contact-form").reset();
}
