import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component {

  user:string="";
  constructor(private Srv:SharedService){}

  sendData(){
    this.Srv.sendData(this.user);
  }
}
