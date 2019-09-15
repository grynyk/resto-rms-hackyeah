import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';
import { InventoryRoutingModule } from './inventory.routing';
import { UiComponentsModule } from '../shared/ui-components.module';
import { InventoryEditDialogComponent } from './components/inventory-edit-dialog/inventory-edit-dialog.component';

@NgModule({
  declarations: [InventoryHomeComponent, InventoryEditDialogComponent],
  imports: [
    CommonModule,
    UiComponentsModule,
    InventoryRoutingModule
  ],
  entryComponents: [
    InventoryEditDialogComponent
  ]
})
export class InventoryModule { }
