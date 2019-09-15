import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Dish } from '../../../shared/models/dish';
import { Table } from '../../../shared/models/table';
import { CommonDialogComponent } from 'src/app/modules/shared/components/common-dialog/common-dialog.component';
import { InventoryEditDialogComponent } from '../inventory-edit-dialog/inventory-edit-dialog.component';
import { InventoryModuleService } from '../../services/inventory-module.service';
import { InventoryAddDialogComponent } from '../inventory-add-dialog/inventory-add-dialog.component';

@Component({
  selector: 'app-inventory-home',
  templateUrl: './inventory-home.component.html',
  styleUrls: ['./inventory-home.component.scss']
})
export class InventoryHomeComponent implements OnInit {

  tablesDisplayedColumns = ['number', 'actions'];
  tablesDataSource = new MatTableDataSource();
  dishesDisplayedColumns = ['name', 'type', 'description', 'price', 'actions'];
  dishesDataSource = new MatTableDataSource();
  showRowButtons = false;
  showButtonsRowId = null;

  @ViewChild('tablesPaginator', {read: MatPaginator}) tablesPaginator: MatPaginator;
  @ViewChild('dishesPaginator', {read: MatPaginator}) dishesPaginator: MatPaginator;

  constructor(public dialog: MatDialog, private inventoryModuleService: InventoryModuleService) {
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
    this.loadTablesList();
    this.loadDishesList();
  }

  loadTablesList() {
    this.inventoryModuleService.getTablesList().subscribe((tables: Table[]) => {
      this.tablesDataSource = new MatTableDataSource(tables);
      this.tablesDataSource.paginator = this.tablesPaginator;
    });
  }

  loadDishesList() {
    this.inventoryModuleService.getDishesList().subscribe((dishes: Dish[]) => {
      this.dishesDataSource = new MatTableDataSource(dishes);
      this.dishesDataSource.paginator = this.dishesPaginator;
    });
  }

  onDelete(row: Table | Dish, type: string) {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      data: { title: `Are you sure you want to delete this item ?` },
      panelClass: 'dialog-style'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('u');
      }
    });
  }

  onAdd(type: string) {
    const dialogRef = this.dialog.open(InventoryAddDialogComponent, {
      data: { title: `ADD NEW ${type}`, type: type },
      width: '300px',
      panelClass: 'dialog-style'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('u', result);
        if (type === 'table') {
          this.inventoryModuleService.addTable(result).subscribe(res => {
            this.loadTablesList();
          });
        } else if (type === 'dish') {
          this.inventoryModuleService.addDish(result).subscribe(res => {
            this.loadDishesList();
          });
        }
      }
    });
  }

  onEdit(row) {
    const dialogRef = this.dialog.open(InventoryEditDialogComponent, {
      data: { title: `EDIT ${row.name}`, dish: row },
      width: '300px',
      panelClass: 'dialog-style'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryModuleService.editDish(result).subscribe(res => {
          this.loadDishesList();
        });
      }
    });
  }

}
