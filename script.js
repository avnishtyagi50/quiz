/*let index=0;
let attempt=0;
let score=0;
let wrong=0;
let questions=quiz.sort(function(){
    return 0.5-Math.random();
})
let totalQuestion=10;

$(function()
{
    let totalTime=100;
    let min=0;
    let sec=0;
    let counter=0;

    let timer=setInterval(function()
{
    counter++;
    min=Math.floor((totalTime-counter)/60);
    sec=totalTime-min*60-counter;
    $(".timeBox span").text(min + ":" +sec);
    if(counter==totalTime)
    {
        alert("Time's up. Press Ok to show the result.");
        showResult();
        clearInterval(timer);
    }
},1000)
printQuestion(index);

});

function printQuestion(i)

{
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);

}

function checkAnswer(option)
{
    attempt++<=10;
    let optionClicked = $(option).data("opt");
    // console.log(questions[index]);

    if(optionClicked == questions[index].answer)
    {
        $(option).addClass("right");
        score++;
    }
    else
    {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick","");
}

function showNext()
{
    if(index >= questions.length -1)
    {
        showResult(0);
        return;
    }
    index++;
    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printQuestion(index);
}

function showResult()
{
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}*/






let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

// Assuming `quiz` is the list of thousands of questions
let questions = quiz.sort(function() {
    return 0.5 - Math.random();  // Shuffle the entire array randomly
}).slice(0, 10);  // Take the first 10 questions after shuffling

let totalQuestion = 10;  // Number of questions to be asked

$(function() {
    let totalTime = 100;  // Total time in seconds
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function() {
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter;
        $(".timeBox span").text(min + ":" + sec);

        if (counter == totalTime) {
            alert("Time's up. Press Ok to show the result.");
            showResult();
            clearInterval(timer);
        }
    }, 1000);

    // Display the first question
    printQuestion(index);
});

function printQuestion(i) {
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option) {
    attempt++;  // Increase the attempt counter for each question answered
    let optionClicked = $(option).data("opt");

    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick", "");  // Disable further clicks on options
}

function showNext() {
    if (index >= questions.length - 1) {
        showResult();  // Show the result if it's the last question
        return;
    }
    index++;  // Move to the next question
    $(".optionBox span").removeClass();  // Clear previous answer styling
    $(".optionBox span").attr("onclick", "checkAnswer(this)");  // Re-enable the option click event
    printQuestion(index);  // Print the new question
}

function showResult() {
    $("#questionScreen").hide();  // Hide the question screen
    $("#resultScreen").show();  // Show the result screen

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}



