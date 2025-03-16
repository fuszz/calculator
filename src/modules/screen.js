import calculator from './calculator.js';

class Screen {
    element = document.getElementById("screen");

    checkErrorFlag() {
        if(calculator.getErrorFlag() === true){
            this.clear();
            calculator.setErrorFlag(false);
        }
    }

    addCipher(event){
        this.checkErrorFlag();
        if (this.element.innerText === '0') {
            this.element.innerText = event.target.innerText;
        }

        else {
            this.element.innerText += event.target.innerText;
        }
    }

    addDot(){
        this.checkErrorFlag();
        if (!this.element.innerText.includes('.')) {
            this.element.innerText += '.';
        }
    }

    setValue(value){
        this.element.innerText = value;
    }

    clear(){
        this.element.innerText = String(0);
    }

    getValue(){
        this.checkErrorFlag();
        return Number(this.element.innerText);
    }

    changeSign(){
        this.checkErrorFlag();

        if(Number(this.element.innerText) === 0){
            this.element.innerText = '-';
        }
        else if(this.element.innerText === '-'){
            this.element.innerText = '0';
        }
        else{
            this.element.innerText = String(Number(this.element.innerText) * (-1));
        }
    }

    removeLastCipher(){
        this.checkErrorFlag();
        if(this.element.innerText === '-'){
            this.element.innerText = '0';
        }
        else if(this.element.innerText === '0' || this.element.innerText.length === 1){
            this.element.innerText = '0';
        }
        else{
            this.element.innerText = this.element.innerText.slice(0, -1);
        }
    }
}

export default new Screen();
