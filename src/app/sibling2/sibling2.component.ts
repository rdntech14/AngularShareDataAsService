import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.data.changeMessage("hello from sibling 2");
  }

}
