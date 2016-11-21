import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { Hallo}   from "./Hallo";
import { ConsumerLoan } from "./ConsumerLoan";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({

    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ConsumerLoan],
    bootstrap: [ConsumerLoan]
})
export class AppModule { }

