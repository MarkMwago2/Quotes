import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component'
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
