const button = document.getElementById('viewWorkButton');
const countdownDiv = document.getElementById('countdown');
const countElement = document.getElementById('count');

button.addEventListener('click', () => {
    button.style.display = 'none'; // Hide the button
    countdownDiv.style.display = 'block'; // Show the countdown

    let count = 3; // Start the countdown at 3
    const timer = setInterval(() => {
        count -= 1; // Decrement the count
        countElement.textContent = count; // Update the count element

        if (count === 0) {
            clearInterval(timer); // Stop the timer
            window.location.href = "projects.html"; // Redirect to the projects page
        }
    } , 1000); // Run the timer every second
});
