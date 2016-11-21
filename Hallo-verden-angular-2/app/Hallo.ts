import {Component} from "@angular/core";

@Component({
    selector: "min-app",
    templateUrl: "./app/skjema.html"
})
export class Hallo {

    public melding: string;

    constructor() {
        this.melding = "Ferdig å laste, player.";
    }
}
