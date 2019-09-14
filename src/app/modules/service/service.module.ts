import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './components/tables/tables.component';
import { ServiceRoutingModule } from './service.routing';
import { UiComponentsModule } from '../shared/ui-components.module';
import { UpdateTableDialogComponent } from './components/update-table-dialog/update-table-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablesComponent,
    UpdateTableDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRoutingModule,
    UiComponentsModule
  ],
  entryComponents: [
    UpdateTableDialogComponent
  ]
})
export class ServiceModule { }
