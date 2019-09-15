import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from 'src/app/modules/shared/models/table';
import { Dish } from 'src/app/modules/shared/models/dish';

@Component({
  selector: 'app-inventory-add-dialog',
  templateUrl: './inventory-add-dialog.component.html',
  styleUrls: ['./inventory-add-dialog.component.scss']
})
export class InventoryAddDialogComponent implements OnInit {

  tableData: Table = {
    number: null,
    status: 0
  };

  dishData: Dish = {
    name: null,
    description: null,
    price: null,
    type: null
  };

  constructor(
    public dialogRef: MatDialogRef<InventoryAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onDissmiss() {
    let data: any;
    if (this.tableData.number) {
      data = this.tableData;

    } else if (this.dishData.name) {
      data = this.dishData;
    } else {
      this.dialogRef.close();
    }
    this.dialogRef.close(data);
  }
}
