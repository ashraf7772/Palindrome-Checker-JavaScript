const input = document.getElementById("input") //you need to first know what was typed

function reverseString(s) {  //s for string
    return s.split("").reverse().join("") //.split splits a string based on the delimiter value we specify

}

function check() { //output what the value is
    const value = input.value //remember ';' are line terminators in JS
    //alert(value)
    const reverse = reverseString(value)
    //alert(reverse)
    if (value === reverse) {
        alert("PALINDROME HERE")
    } else {
        alert("NO PALINDROME")
    }

    input.value = "" //we are setting the value instead of getting the value
}