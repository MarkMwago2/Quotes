import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1,"Usiniambie, mimi Mtanzania bana.", "Leo Igane"),
    new Quotes(2,"Sit Down,Be humble","Nelson Kioko"),
    new Quotes(3,"Pambana na hali yako my friend", "Ciku Kariuki"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
