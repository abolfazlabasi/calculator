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