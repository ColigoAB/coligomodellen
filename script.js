function calculateScore() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;

    // Define weights for each question
    const weights = {
        question1: 5,
        question2: 5,
        question3: 5
    };

    // Calculate the total score
    const totalScore = (question1 * weights.question1) + (question2 * weights.question2);

    // Determine the response based on the score
    let resultText;
    if (totalScore <= 15) {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Katastrof!</strong> Här finns det mycket att åtgärda, kontakta oss snarast så hjälper vi dig upp på banan.`;
    } else if (totalScore <= 30) {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Helt okej!</strong> Du är på god väg men det är långt kvar, hör av dig så hjälper vi dig!`;
    } else if (totalScore <= 45) {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Riktigt bra!</strong> Du ligger rätt bra till men det finns mer att göra. Hör av dig!`;
    } else {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Fantastiskt!</strong> Du ligger väldigt bra till men det finns säkerligen mer att göra. Hör av dig!`;
    }
    // Display the result with line breaks
    document.getElementById('result').innerHTML = resultText;
}
