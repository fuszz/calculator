class Screen {
    element = document.getElementById("screen");

    addCipher(event){
        if (this.element.innerText === '0') {
            this.element.innerText = event.target.innerText;
        }
        else {
            this.element.innerText += event.target.innerText;
        }
    }

    addDot(){
        if (!this.element.innerText.includes('.')) {
            this.element.innerText += '.';
        }
    }

    setValue(value){
        this.element.innerText = value;
    }

    clear(){
        this.element.innerText = 0;
    }

    getValue(){
        return Number(this.element.innerText);
    }

    changeSign(){
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
