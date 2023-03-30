import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    Cars=['bmw','Audi','Mercedes','Porsche']
    isVisible=false;
    handleClick(event){
        this.isVisible=true;
    }
}