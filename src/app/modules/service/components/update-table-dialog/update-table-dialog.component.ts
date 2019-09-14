import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { Dish } from 'src/app/modules/shared/models/dish';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-table-dialog',
  templateUrl: './update-table-dialog.component.html',
  styleUrls: ['./update-table-dialog.component.scss']
})
export class UpdateTableDialogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  receiptDisplayedColumns = ['name', 'price', 'actions'];
  receiptDataSource = new MatTableDataSource();
  dishes = [
    { name: 'Kukushka w pesdet', bill: 45.12},
    { name: 'Kukushka w pesdet', bill: 5.99},
    { name: 'Kukushka w pesdet', bill: 220.20},
    { name: 'Kukushka w pesdet', bill: 40.00},
    { name: 'Kukushka w pesdet0', bill: 25.00},
    { name: 'Kukushka w pesdet', bill: 15.30},
  ];
  addFormVisible = false
  filteredStates: Observable<any>;
  stateCtrl = new FormControl();
  states = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<UpdateTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.receiptDataSource = new MatTableDataSource(this.dishes);
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map((state: any) => state ? this._filterStates(state) : this.states.slice())
      );
    }

  ngOnInit() {
    this.receiptDataSource.paginator = this.paginator;
  }

  private _filterStates(value: string) {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  getTotal() {
    return this.receiptDataSource.data.map((t: any) => t.bill).reduce((acc, value) => acc + value, 0);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
