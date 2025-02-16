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

    // Determine the response based on the score
    let resultText;
    if (totalScore <= 5) {
        resultText = `Your total score is: ${totalScore}<br><br>Thank you for completing the survey!<br>We appreciate your feedback.`;
    } else if (totalScore <= 10) {
        resultText = `Your total score is: ${totalScore}<br><br>Great job!<br>We value your input and will use it to improve.`;
    } else if (totalScore <= 15) {
        resultText = `Your total score is: ${totalScore}<br><br>Excellent!<br>Your responses are very helpful to us.`;
    } else {
        resultText = `Your total score is: ${totalScore}<br><br>Outstanding!<br>Thank you for your detailed feedback.`;
    }
    // Display the result with line breaks
    document.getElementById('result').innerHTML = resultText;
}
