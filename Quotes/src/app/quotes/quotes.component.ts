import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1,"Usiniambie, mimi Mtanzania bana."),
    new Quotes(2,"Sit Down,Be humble"),
    new Quotes(3,"Pambana na hali yako my friend"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
