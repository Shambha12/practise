import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_practise';

  parentData: string = '';
  childData: string = '';

  sendDataToChild(data: any) {
    this.parentData = data;
  }

  dataReceivedFromChild(value: any) {
    this.childData = value;
  }
}
