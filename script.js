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
    const totalScore = (question1 * weights.question1) + (question2 * weights.question2) + (question3 * weights.question3);

    // Determine the response based on the score
    let resultText;
    if (totalScore <= 15) {
        //resultText = `Dina poäng är: ${totalScore}<br><br><strong>Katastrof!</strong> Här f.....`;
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Katastrof!</strong> Här finns det mycket att åtgärda, hör av dig snarast så hjälper vi dig upp på banan och in i framtiden.<br><br>Kontakta mig via <a href="https://teams.microsoft.com/l/chat/0/0?users=andreas.stenhall@coligo.se">Teams</a> eller <a href="mailto:andreas.stenhall@coligo.se">e-post</a>. /<strong>Andreas Stenhall</strong>, Trusted Advisor på Coligo och Microsoft MVP på Windows i 16 år.`;
    } else if (totalScore <= 35) {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Helt okej!</strong> Du är på god väg men det finns mycket att komma ikapp med, hör av dig så hjälper vi dig in i framtiden!<br><br>Kontakta mig via <a href="https://teams.microsoft.com/l/chat/0/0?users=andreas.stenhall@coligo.se">Teams</a> eller <a href="mailto:andreas.stenhall@coligo.se">e-post</a>. /<strong>Andreas Stenhall</strong>, Trusted Advisor på Coligo och Microsoft MVP på Windows i 16 år.`;
    } else if (totalScore <= 45) {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Riktigt bra!</strong> Du ligger rätt bra till men det finns mer att göra. Hör av dig så hjälper vi dig få ännu bättre förutsättningar för framtiden!<br><br>Kontakta mig via <a href="https://teams.microsoft.com/l/chat/0/0?users=andreas.stenhall@coligo.se">Teams</a> eller <a href="mailto:andreas.stenhall@coligo.se">e-post</a>. /<strong>Andreas Stenhall</strong>, Trusted Advisor på Coligo och Microsoft MVP på Windows i 16 år.`;
    } else {
        resultText = `Dina poäng är: ${totalScore}<br><br><strong>Fantastiskt!</strong> Du ligger väldigt bra till men det finns säkerligen mer att göra. Hör av dig så tar vi det vidare!<br><br>Kontakta mig via <a href="https://teams.microsoft.com/l/chat/0/0?users=andreas.stenhall@coligo.se">Teams</a> eller <a href="mailto:andreas.stenhall@coligo.se">e-post</a>. /<strong>Andreas Stenhall</strong>, Trusted Advisor på Coligo och Microsoft MVP på Windows i 16 år.`;
    }
    // Display the result with line breaks
    document.getElementById('result').innerHTML = resultText;
}
