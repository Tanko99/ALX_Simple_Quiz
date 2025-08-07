// Step 1: Define the function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 5: Handle case when no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    // Step 6: Get the user's selected value
    const userAnswer = selectedOption.value;

    // Step 7: Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect! Try again.";
        feedback.style.color = "red";
    }

    // Step 8: Display the feedback
    feedback.style.display = "block";
}

// Step 9: Add event listener to submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
