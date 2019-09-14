import { Component, OnInit } from '@angular/core';
import { UpdateTableDialogComponent } from '../update-table-dialog/update-table-dialog.component';
import { MatDialog } from '@angular/material';
import { Table } from '../../../shared/models/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tablesData: Table[] = [
    {
      id: 1,
      number: 1,
      status: 'empty'
    },
    {
      id: 2,
      number: 2,
      status: 'occupied'
    },
    {
      id: 3,
      number: 3,
      status: 'served'
    },
    {
      id: 4,
      number: 4,
      status: 'occupied'
    },
    {
      id: 5,
      number: 5,
      status: 'empty'
    },
    {
      id: 6,
      number: 6,
      status: 'served'
    },
    {
      id: 7,
      number: 7,
      status: 'occupied'
    },
    {
      id: 8,
      number: 8,
      status: 'empty'
    },
    {
      id: 9,
      number: 9,
      status: 'empty'
    },
    {
      id: 10,
      number: 10,
      status: 'empty'
    },
    {
      id: 11,
      number: 11,
      status: 'served'
    },
    {
      id: 12,
      number: 12,
      status: 'occupied'
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  updateTableDialog(table: Table) {
    const dialogRef = this.dialog.open(UpdateTableDialogComponent, {
      data: { table: table },
      width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('u');
      }
    });
  }

}
