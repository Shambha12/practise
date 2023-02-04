import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss'],
})
export class Subject2Component {
  receivedData: any;

  constructor(private Srv: SharedService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.Srv.subjectObservable$.subscribe((data: any) => {
      this.receivedData = data;
    });
  }
}
