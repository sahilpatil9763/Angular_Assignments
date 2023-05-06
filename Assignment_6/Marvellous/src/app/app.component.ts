import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <button (click)="onClickMe()">Upper</button>
    {{clickMessage}}`
})
export class AppComponent {
  title = 'Marvellous';
  clickMessage = 'Marvellous Infosystems';

  onClickMe() {
    this.clickMessage = 'Educating for Better tomorrow';
  }
}
