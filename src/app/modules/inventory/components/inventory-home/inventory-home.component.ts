import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Dish } from '../../../shared/models/dish';
import { Table } from '../../../shared/models/table';
import { CommonDialogComponent } from 'src/app/modules/shared/components/common-dialog/common-dialog.component';
import { InventoryEditDialogComponent } from '../inventory-edit-dialog/inventory-edit-dialog.component';

@Component({
  selector: 'app-inventory-home',
  templateUrl: './inventory-home.component.html',
  styleUrls: ['./inventory-home.component.scss']
})
export class InventoryHomeComponent implements OnInit {

  tablesDisplayedColumns = ['number', 'actions'];
  tablesDataSource = new MatTableDataSource();
  dishesDisplayedColumns = ['name', 'type', 'price', 'actions'];
  dishesDataSource = new MatTableDataSource();
  showRowButtons = false;
  showButtonsRowId = null;
  dishes: Dish[] = [
    {
      id: 1,
      name: 'Lasagne',
      type: 'main',
      price: 0.50
    },
    {
      id: 2,
      name: 'Pasta Bolognese',
      type: 'main',
      price: 2.80
    },
    {
      id: 3,
      name: 'Soup',
      type: 'main',
      price: 1.25
    },
    {
      id: 4,
      name: 'Strawberry Ice cream',
      type: 'main',
      price: 1.00
    },
    {
      id: 5,
      name: 'Roast chicken',
      type: 'main',
      price: 15.50
    },
    {
      id: 6,
      name: 'Caesar salad cooked with 0 temperature by Kelvin',
      type: 'main',
      price: 90.25
    },
    {
      id: 7,
      name: 'Crispy fingers of freshly baked oak table in a fridge',
      type: 'main',
      price: 88.25
    },
    {
      id: 8,
      name: 'Mashed pork sausages with rice icecream',
      type: 'main',
      price: 15.25
    },
    {
      id: 9,
      name: 'Strong smell onion soup with pieces of carbonara legs',
      type: 'main',
      price: 15.25
    },
    {
      id: 10,
      name: 'Rare deer beef with blood from it eggs',
      type: 'main',
      price: 56.84
    },
    {
      id: 11,
      name: 'Steak from chicken killed with multiple ultra fatality',
      type: 'main',
      price: 25.25
    },
    {
      id: 12,
      name: 'Euskaliptus Post-Carpathian made by Ruslan Stickyfingerdge',
      type: 'main',
      price: 200.25
    },
  ];

  tables: Table[] = [
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

  @ViewChild('tablesPaginator', {read: MatPaginator}) tablesPaginator: MatPaginator;
  @ViewChild('dishesPaginator', {read: MatPaginator}) dishesPaginator: MatPaginator;

  constructor(public dialog: MatDialog) {
    this.tablesDataSource = new MatTableDataSource(this.tables);
    this.dishesDataSource = new MatTableDataSource(this.dishes);
  }

  applyFilter(filterValue: string, type: string) {
    if (type === 'tables') {
      this.tablesDataSource.filter = filterValue.trim().toLowerCase();
    if (this.tablesDataSource.paginator) {
      this.tablesDataSource.paginator.firstPage();
    }
    } else if (type === 'dishes') {
      this.dishesDataSource.filter = filterValue.trim().toLowerCase();
    if (this.dishesDataSource.paginator) {
      this.dishesDataSource.paginator.firstPage();
    }
    }
  }

  ngOnInit() {
    this.tablesDataSource.paginator = this.tablesPaginator;
    this.dishesDataSource.paginator = this.dishesPaginator;
  }

  onDelete(row, type: string) {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      data: { title: `Are you sure you want to delete this item ?` },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('u');
      }
    });
  }

  onEdit(row, type: string) {
    const dialogRef = this.dialog.open(InventoryEditDialogComponent, {
      data: { title: `EDIT ${type}` },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('u');
      }
    });
  }

}
