import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();




  quoteComplete(complete:boolean){
      this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }
}
