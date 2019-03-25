import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1,'Usiniambie, mimi Mtanzania bana.', 'Leo'),
    new Quote(2,'Sit Down,Be humble','Nelson'),
    new Quote(3,'Pambana na hali yako my friend', 'Ciku'),
  ]

  completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
