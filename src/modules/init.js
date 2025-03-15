export function initializeUI() {
    genCiphers();
    genOperators();
}

function genCiphers() {
    const main = document.getElementById('keyboard');
    for(let i=0; i<10; i++){
        const button = document.createElement('button');
        button.innerText = i;
        button.id = String(i);
        button.dataset.value = i;
        button.classList.add('button')
        button.style.gridArea = 'b'+i.toString();
        main.appendChild(button);
    }
}

function genOperators() {
    const main = document.getElementById('keyboard');
    const operators = ['+', '-', '*', '/', '=', '.', 'CE', '\u221a', '+ \/ -', '\u232B'];
    const names = ['plus', 'minus', 'asterisk', 'slash', 'equal', 'dot', 'ce', 'sqrt', 'plusminus', 'backspace'];

    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.innerText = operators[i];
        button.id = names[i];
        button.dataset.value = names[i];
        button.classList.add('button');
        button.style.gridArea = 'b'+names[i];
        main.appendChild(button);
    }
}

