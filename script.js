function calculateScore() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;

    // Define weights for each question
    const weights = {
        question1: 5,
        question2: 5
    };

    // Calculate the total score
    const totalScore = (question1 * weights.question1) + (question2 * weights.question2);

    // Determine the response based on the score
    let resultText;
    if (totalScore <= 5) {
        resultText = `Dina poäng är: ${totalScore}<br><br>Katastrof!<br>Här finns det mycket att åtgärda, kontakta oss snarast så hjälper vi dig upp på banan.`;
    } else if (totalScore <= 10) {
        resultText = `Dina poäng är: ${totalScore}<br><br>In och jobba!<br>Du är på god väg men det är långt kvar, hör av dig så hjälper vi dig!`;
    } else if (totalScore <= 15) {
        resultText = `Dina poäng är: ${totalScore}<br><br>Helt okej!<br>Du ligger rätt bra till men det finns mer att göra. Hör av dig!.`;
    } else {
        resultText = `Dina poäng är: ${totalScore}<br><br>Fantastiskt!<br>Du ligger väldigt bra till och det finns inte så mycket vi på Coligo kan göra, men däremot kan vi säkerligen hjälpa dig med andra områden.`;
    }
    // Display the result with line breaks
    document.getElementById('result').innerHTML = resultText;
}
