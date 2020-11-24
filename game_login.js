function addUser() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location.replace("game_page.html");
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
    document.getElementById("word").value="";
}