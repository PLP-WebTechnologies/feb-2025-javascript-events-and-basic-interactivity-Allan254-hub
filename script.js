
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (!name || !email || !age) {
        alert("Please fill in all fields correctly.");
        return; 
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return; 

    document.getElementById("userName").textContent = name;
    document.getElementById("confirmationMessage").classList.remove("hidden");

    document.getElementById("userForm").classList.add("hidden");
});


document.getElementById("resetBtn").addEventListener("click", function() {

    document.getElementById("userForm").reset();

    document.getElementById("confirmationMessage").classList.add("hidden");
    document.getElementById("userForm").classList.remove("hidden");
});
