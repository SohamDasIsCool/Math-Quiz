function addUser() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location.replace("game_page.html");
    answer_turn == "player1";
    question_turn == "player2";
}
function send() {
get_number1=document.getElementById("number1").value;
get_number2=document.getElementById("number2").value;
equation=get_number1+"x"+get_number2;
    question_word="<h4 id='word_display'>Q."+equation+"</h4>";
    input_box="<br>Answer: <input type='number' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    word=get_word*get_word;
    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check() {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case"+answer);
    document.getElementById("player1_name").innerHTML=player1_name+":";
    document.getElementById("player2_name").innerHTML=player2_name+":";
    if(answer==word && answer_turn == "player1") {
        player1_score += 1;
        document.getElementById("player1_score").innerHTML=player1_score;
        answer_turn="player2";
        question_turn="player1";
        document.getElementById("player_question").innerHTML=question_turn;
        document.getElementById("player_answer").innerHTML=answer_turn;
    }  
        else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML=player2_score;
            answer_turn="player1";
            question_turn="player2";
            document.getElementById("player_question").innerHTML=question_turn;
            document.getElementById("player_answer").innerHTML=answer_turn;
        }
    }
    if(answer != word && answer_turn == "player1") {
        if(answer_turn == "player1") {
            answer_turn="player2";
            question_turn="player1";
            document.getElementById("player_question").innerHTML=question_turn;
            document.getElementById("player_answer").innerHTML=answer_turn;
        }
        else {
            answer_turn="player1";
            question_turn="player2";
            document.getElementById("player_question").innerHTML=question_turn;
            document.getElementById("player_answer").innerHTML=answer_turn;
        }
    }