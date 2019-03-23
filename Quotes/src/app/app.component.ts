import { Component } from '@angular/core';
import { Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
    quotes = [
      new Quotes(1,"Usiniambie, mimi Mtanzania bana."),
      new Quotes(2,"Sit Down,Be humble"),
      new Quotes(3,"Pambana na hali yako my friend"),
    ]
  }
