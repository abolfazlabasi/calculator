var number = "0";
var result_text = document.getElementById("res-text");
var is_decimal = false;
var equation = 0, last_event = "";

function update_show(text){
    result_text.innerText = text;
}
function add_digit(digit){
    if (number != "0" && number != "NaN" && number != "Cannot divide by zero") number += digit;
    else{
        if (digit != ".")
            number = digit;
        else
            number = "0.";
    } 
    update_show(number);
}
function remove_digit(){
    last_letter = number[number.length - 1];
    
    if (number.length > 0){
        number = number.substring(0, number.length - 1);
        if (number.length == 0) number = "0";
        if (last_letter == ".") is_decimal = false;
    }

    update_show(number);
}
function decimal(){
    if (is_decimal == false){
        add_digit(".");
        is_decimal = true;
    }
}
function change_sign(){
    if (parseFloat(number) > 0) number = "-" + number;
    else number = number.substring(1, number.length);

    update_show(number);
}

function reset_after_event(event){
    number = "0";
    last_event = event;
    is_decimal = false;

    update_show(number);
}
function sum(){
    equation += parseFloat(number);

    reset_after_event("sum");
}

function sub(){
    if (last_event == "") equation = parseFloat(number);
    else equation -= parseFloat(number);

    reset_after_event("sub");
}
function times(){
    if (last_event == "") equation = parseFloat(number);
    else equation *= parseFloat(number);

    reset_after_event("times");
}
function divide(){
    if (last_event == "") equation = parseFloat(number);
    else{
        if (parseFloat(number) != 0)
            equation /= parseFloat(number);
        else{
            clear_all();
            equation = "Cannot divide by zero";
            update_show(equation);
        }
    }
    reset_after_event("divide");
}

function equation_answer(){
    if (last_event == "sum") sum();
    if (last_event == "sub") sub();
    if (last_event == "times") times();
    if (last_event == "divide") divide();

    number = equation.toString();
    equation = 0;
    is_decimal = false;
    last_event = "";

    update_show(number);
}