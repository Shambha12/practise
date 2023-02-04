import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {


  childData:string="";
  @Input()parentReceivedData:string=""

  @Output()emitChildData:EventEmitter<string>= new EventEmitter();

  sendDataToParent(value:any){
    this.emitChildData.emit(value);
  }


}
