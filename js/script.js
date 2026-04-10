const form = document.getElementById("supportForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill out all fields.";
        feedback.style.color = "red";
        feedback.classList.remove("hidden");
        return;
    }

    feedback.textContent = "Request submitted successfully!";
    feedback.style.color = "green";
    feedback.classList.remove("hidden");

    form.reset();
});