import calculator from "./calculator.js";
import calcScreen from "./screen.js";
import history from "./history.js";

export function addButtonEvents() {
    addNumberButtonEvents();
    addOperatorButtonEvents();
}

function addNumberButtonEvents() {
    for(let i = 0; i < 10; i++) {
        const button = document.getElementById(String(i));
        button.addEventListener('click', (event) => calcScreen.addCipher(event));
    }
}

function addOperatorButtonEvents() {
    document.getElementById('dot').addEventListener('click', () => {calcScreen.addDot()});
    document.getElementById('plus').addEventListener('click', chooseOperator);
    document.getElementById('minus').addEventListener('click', chooseOperator);
    document.getElementById('asterisk').addEventListener('click', chooseOperator);
    document.getElementById('slash').addEventListener('click', chooseOperator);
    document.getElementById('equal').addEventListener('click', performMath);
    document.getElementById('sqrt').addEventListener('click', performSqrt);
    document.getElementById('ce').addEventListener('click', () => {calcScreen.clear()});
    document.getElementById('plusminus').addEventListener('click', () => {calcScreen.changeSign()});
    document.getElementById('backspace').addEventListener('click', () => {calcScreen.removeLastCipher()});
}

function chooseOperator(event){
    calcScreen.checkErrorFlag();
    calculator.setMemory(calcScreen.getValue());
    calculator.setOperation(event.target.innerText);
    calcScreen.clear();
}

function performSqrt(){
    calcScreen.checkErrorFlag();
    let value = calcScreen.getValue();
    const result = value < 0 ? "Error" : Math.sqrt(value);

    calcScreen.clear();
    calcScreen.setValue(result);
    calculator.defaultState();
    if(result === "Error") calculator.setErrorFlag(true);
    archiveSqrtMessage(value, result);
}

function archiveSqrtMessage(a, result){
    if (result === "Error"){
        history.addError('\u221a '+ Number(a) + '\u2192 Error');
    } else {
        history.addOperation('\u221a '+ Number(a) + ' = ' + Number(result));
    }
}

function archiveMessage(a, b, result, operator){
    if (result === "Error"){
        history.addError(Number(a) + ' '
                            + String(operator) + ' '
                            + Number(b) + '\u2192 Error');
    } else {
        history.addOperation(Number(a) + ' '
            + String(operator) + ' '
            + Number(b) + ' = ' + Number(result));
    }
}

function performMath(){
    calcScreen.checkErrorFlag();
    let a = Number(calculator.getMemory());
    let b = Number(calcScreen.getValue());
    let result;

    if (calculator.getOperation() === '*') result = a*b;
    else if (calculator.getOperation() === '+') result = a+b;
    else if(calculator.getOperation() === '-') result = a-b;
    else if(calculator.getOperation() === '/') result = (Number(b) === 0) ? "Error" : (a/b);
    else if(calculator.getOperation() == null) {
        return;
    }
    archiveMessage(a, b, result, calculator.getOperation());
    calculator.defaultState();
    calcScreen.setValue(result);
    if(result === "Error" || result === String(NaN)) calculator.setErrorFlag(true);
}



