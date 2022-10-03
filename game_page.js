player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0
player2score=0

document.getElementById("player1").innerHTML=player1name+" : "
document.getElementById("player2").innerHTML=player2name+" : "
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score

document.getElementById("playerquestion").innerHTML="question turn-"+player1name;
document.getElementById("playeranswer").innerHTML="answer turn-"+player2name;

function send()
{
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    word=parseInt(n1)*parseInt(n2);
    question="<h4 id='display'>"+n1+"X"+n2+"</h4>";
    input="<br>  Answer:<input type='number'id='input'>";
    checkbutton="<br> <br> <button class='btn btn-info',onclick='check()'>check</button>";
    row=question+input+checkbutton
    document.getElementById("output").innerHTML=row

}
question_turn="player1"
answer_turn="player2"
function check()
{
    answer=document.getElementById("input").value
    

    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            player1score=player1score+1
            document.getElementById("player1score").innerHTML=player1score
        }
        else
        {
            player2score=player2score+1
            document.getElementById("player2score").innerHTML=player2score
        }


    }
    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("playeranswer").innerHTML="answer turn="+player2name
    }
    else
    {
        answer_turn="player1"
        document.getElementById("playeranswer").innerHTML="answer turn="+player1name
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("playerquestion").innerHTML="question turn="+player2name
    }
    else
    {
        question_turn="player1"
        document.getElementById("playerquestion").innerHTML="question turn="+player1name
    }
}