import { Component, OnInit, Inject } from '@angular/core';
import { CommonDialogComponent } from 'src/app/modules/shared/components/common-dialog/common-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-inventory-edit-dialog',
  templateUrl: './inventory-edit-dialog.component.html',
  styleUrls: ['./inventory-edit-dialog.component.scss']
})
export class InventoryEditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
