import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// todo: kanskje fjerne denne rett under om ting funker
///////////////////////////////////////////////////////////
import {ConsumerLoan}  from "./ConsumerLoan";
///////////////////////////////////////////////////////////
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
