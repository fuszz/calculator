import calculator from "./calculator.js";
import calcScreen from "./screen.js";

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
    calculator.setMemory(calcScreen.getValue());
    console.log(calcScreen.getValue());
    calculator.setOperation(event.target.innerText);
    calcScreen.clear();
}

function performSqrt(){
    let value = calcScreen.getValue();
    const result = value < 0 ? "Error" : Math.sqrt(value);

    calcScreen.clear();
    calcScreen.setValue(result);
    calculator.defaultState();
}

function performMath(){
    let a = Number(calculator.getMemory());
    let b = Number(calcScreen.getValue());
    let result;

    if (calculator.getOperation() === '*') result = a*b;
    else if (calculator.getOperation() === '+') result = a+b;
    else if(calculator.getOperation() === '-') result = a-b;
    else if(calculator.getOperation() === '/') result = b < 0 ? "Error" : a/b;
    else if(calculator.getOperation() == null) {
        result = b;
        calculator.defaultState(result);
    }
    calculator.defaultState();
    calcScreen.setValue(result);
}



