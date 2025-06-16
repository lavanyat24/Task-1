// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    message.textContent = "All fields are required!";
    message.style.color = "red";
  } else if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    this.reset();
  }
});

// TO-DO FUNCTIONALITY
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">X</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
