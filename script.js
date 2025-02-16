function calculateScore() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;

    // Define weights for each question
    const weights = {
        question1: 2,
        question2: 3
    };

    // Calculate the total score
    const totalScore = (question1 * weights.question1) + (question2 * weights.question2);

    // Display the result
    document.getElementById('result').innerText = `Your total score is: ${totalScore}`;
}
