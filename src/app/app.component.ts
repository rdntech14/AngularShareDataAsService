import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMessage() {
    this.data.changeMessage("hello from app");
  }

}
