function send()
{
    number1_input= document.getElementById("number1_input").value;
    number2_input= document.getElementById("number2_input").value;
    actual_answer= parseInt(number1_input) * parseInt(number2_input);
    question_number= "<h4>" + number1_input + " X " + number2_input + "</h4>";
    input_box= "<br>Answer : <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value="";
    document.getElementById("number2_input").value=""; 
}