import { Component, OnInit, Inject } from '@angular/core';
import { CommonDialogComponent } from 'src/app/modules/shared/components/common-dialog/common-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from 'src/app/modules/shared/models/table';
import { Dish } from 'src/app/modules/shared/models/dish';

@Component({
  selector: 'app-inventory-edit-dialog',
  templateUrl: './inventory-edit-dialog.component.html',
  styleUrls: ['./inventory-edit-dialog.component.scss']
})
export class InventoryEditDialogComponent implements OnInit {

  dishData: Dish;

  constructor(
    public dialogRef: MatDialogRef<InventoryEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.dishData = this.data.dish;
  }

  onDissmiss() {
    let data: any;
    if (this.dishData.name) {
      data = this.dishData;
    } else {
      this.dialogRef.close();
    }
    this.dialogRef.close(data);
  }
}
