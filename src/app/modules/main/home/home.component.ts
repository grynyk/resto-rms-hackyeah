import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['table', 'bill'];
  billingsDataSource = [
    { tableNumber: '3', bill: 45.12},
    { tableNumber: '2', bill: 5.99},
    { tableNumber: '1', bill: 220.20},
    { tableNumber: '4', bill: 40.00},
    { tableNumber: '10', bill: 25.00},
    { tableNumber: '8', bill: 15.30},
  ];
  constructor() {}

  getTotal() {
    return this.billingsDataSource.map(t => t.bill).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }
  
}
