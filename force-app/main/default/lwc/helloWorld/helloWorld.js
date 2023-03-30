import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
    name=" Janmejay";
    title ="Aura";

    @track address={
        city:'shahdol',
        postalCode:484001
    }
    // getter example
    User=["janmejay","sharma"];
    num1=10;
    num2=22;
    get returnaddition(){
        return this.num1+this.num2;
    }
    get returnUser(){
        return this.User[1];
    }

    onChangeHandler(event){
        this.title =event.target.value;
    }
    trackChangeHandler(event){
        this.address={...this.address,"city":event.target.value} //this.address.city = event.target.value;
    }
}