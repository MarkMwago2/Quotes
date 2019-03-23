import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quotes:Quotes;
  constructor() { }

  ngOnInit() {
  }

}
