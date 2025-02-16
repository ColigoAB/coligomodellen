function calculateScore() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;

    // Define weights for each question
    const weights = {
        question1: 10,
        question2: 10
    };

    // Calculate the total score
    const totalScore = (question1 * weights.question1) + (question2 * weights.question2);

    // Create the result text with line breaks
    const resultText = `Your total score is: ${totalScore}<br><br>Thank you for completing the survey!<br>We appreciate your feedback.`;

    // Display the result with line breaks
    document.getElementById('result').innerHTML = resultText;
}
