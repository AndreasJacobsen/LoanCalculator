import {Component} from "@angular/core";

@Component({
    selector: "consumer",
    templateUrl: "./app/skjema.html"
})
export class ConsumerLoan {

    public melding: string;

    constructor() {
        this.melding = "Take out a loan, player.";
    }
}