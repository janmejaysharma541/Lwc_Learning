import { LightningElement } from 'lwc';

export default class Quiz_App extends LightningElement {

    MyQuestions =[
        {
            id:"Question 1",
            question:"Which one of the Following is not a Template Loop",
            answer:{
                a:"for:each ",
                b:"iterator",
                c:"map loop"

            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            question:"Which  of the File is Invalid",
            answer:{
                a:".svg ",
                b:".js",
                c:".apex"

            },
            correctAnswer:"c"
        },
        {
            id:"Question 3",
            question:"Which one of the Following is not a Directive in LWC",
            answer:{
                a:"if:true ",
                b:"@track",
                c:"for:each"

            },
            correctAnswer:"b"
        }
    ]
    selectedQueAnswer={};
    get notAllSelected(){
        return !(Object.keys(this.selectedQueAnswer).length === this.MyQuestions.length);
    }
    changeHandler(event){
        console.log("Name",event.target.name);
        console.log("Value",event.target.value);
        const {name,value}=event.target;
        this.selectedQueAnswer ={...this.selectedQueAnswer,[name]:value};
        console.log(" this.selectedQueAnswer", this.selectedQueAnswer)
    }
    Submitform(event){
        event.preventDefault();
        let correct = this.MyQuestions.filter(item=>this.selectedQueAnswer[item.id]=== item.correctAnswer);
        console.log("item",this.MyQuestions.filter(item=>this.selectedQueAnswer[item.id]));
        console.log("item.correctAnswer", this.MyQuestions.filter(item=>item.correctAnswer));
        console.log("correct",correct);
    }
    ResetForm(event){

    }
   
}