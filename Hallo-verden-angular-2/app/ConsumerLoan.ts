import {Component} from "@angular/core";
import {ConsumerData} from "./ConsumerData";
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule} from "@angular/forms";

@Component({
    selector: "consumer",
    templateUrl: "./app/skjema.html"
})


export class ConsumerLoan {
   
    public name: string;
    public adress: string;
    public phone: string;
    public person: string;
    public year: string;

    public Consumer: Array<ConsumerData> = []; 

    addConsumer(): void {
        var consumer = new ConsumerData(this.name, this.adress, this.phone, this.person, this.year);
        this.Consumer.push(consumer); 
    }




}