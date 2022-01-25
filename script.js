var userinput;
var computerinput, yourpoint=0, computerpoint=0;

function user(x)
{
    document.getElementById("userchoice").innerHTML = x;
    userinput = x;
    computer();
}

function computer(){
    var arr=['Stone','Paper','Scissor'];
    var b = Math.floor(Math.random()*3);
    document.getElementById('computerchoice').innerHTML = arr[b];
    computerinput = arr[b];
    result(userinput,computerinput);
}

function result(a,b){
    switch(a+b){
        case 'StoneScissor':
        case 'PaperStone' :
        case 'ScissorPaper':
            document.getElementById("result").innerHTML = "You Won 😊";
            yourpoint++;
            document.getElementById("yourpoint").innerHTML = yourpoint;
            break;
        case 'ScissorStone':
        case 'StonePaper':
        case 'PaperScissor':
            computerpoint++;
            document.getElementById("result").innerHTML = "You Lost 😓 ";
            document.getElementById("computerpoint").innerHTML = computerpoint;
            break;
        case 'StoneStone':
        case 'PaperPaper':
        case 'ScissorScissor':
            document.getElementById("result").innerHTML = "Draw 😞";
            break;
    }
}