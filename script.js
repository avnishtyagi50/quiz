let index=0;
let attempt=0;
let score=0;
let wrong=0;
let questions=quiz.sort(function(){
    return 0.5-Math.random();
})
let totalQuestion=questions.length;

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
    attempt++;
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
}