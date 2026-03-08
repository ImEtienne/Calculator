"use strict";

let input = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string).toString();
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == '%') {
            string = (eval(string) / 100).toString();
            input.value = string;
        } else {
            if (string.length < 10) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    })
});











































/**
 function delDisplay() {
    const del = document.getElementById("del");
    del.addEventListener("click", () => {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    });
}

function clearDisplay(){
    const clear_btn = document.getElementById("clear");
    let val = 0;
    clear_btn.addEventListener("click", () => {
        document.getElementById("display").value = val
    });
}

function appendToDisplay() {
    const buttons = document.querySelectorAll(".btn");
    const excludeIds = ["del", "clear", "decimal", "equals"];
    buttons.forEach(button => {
        if (!excludeIds.includes(button.id)) {
            button.addEventListener("click", () => {
                const display = document.getElementById("display");
                if (display.value.length < 9) {
                    display.value += button.textContent;
                }
            });
        }
    });
}

function dotDisplay(){
    const dot_btn = document.getElementById("decimal");
    dot_btn.addEventListener("click", () => {
        const display = document.getElementById("display");
        if (!display.value.includes(".") && display.value.length < 9) {
            display.value += ".";
        }
    });
}

function init() {
    delDisplay();
    clearDisplay();
    appendToDisplay();
    dotDisplay();
}   

init();
 */