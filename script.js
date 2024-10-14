let string = "";
let oupt = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let isResultDisplayed = false;
let isOpen = false;

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e);
        let buttonVal = e.target.innerText.trim();
        if (isResultDisplayed &&  buttonVal !== "backspace" && buttonVal !== "=") {
            string = "";
            oupt.value = string;
            isResultDisplayed = false;
        }
        if (buttonVal === "=") {
           try {
            string = eval(string);
            oupt.value = string;
            isResultDisplayed = true;
           } catch (error) {
            string = "error";
            oupt.value = string;
            isResultDisplayed = true;
           }
        } else if (buttonVal === "X") {
            string += "*";
            oupt.value += "X";
        } else if (buttonVal === "( )") {
            if (!isOpen) {
                buttonVal = "(";
                isOpen = true;
            } else {
                buttonVal = ")";
                isOpen = false;
            }
            string += buttonVal;
            oupt.value += buttonVal;
        } else if (buttonVal === "AC") {
            string = "";
            oupt.value = string;
            isResultDisplayed = false;
        } else if (buttonVal === "backspace") {
            if (string[string.length-1] === "(") {
                isOpen = false;
            } else if (string[string.length -1] === ")") {
                isOpen = true;
            }
            string = string.slice(0,-1);
            oupt.value = string;
        } else {
            // console.log(e.target);
        string += buttonVal;
        oupt.value += buttonVal;
        }
    });
});