import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component'
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuotesFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
