import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';
import { InventoryRoutingModule } from './inventory.routing';
import { UiComponentsModule } from '../shared/ui-components.module';
import { InventoryEditDialogComponent } from './components/inventory-edit-dialog/inventory-edit-dialog.component';
import { InventoryModuleService } from './services/inventory-module.service';
import { InventoryAddDialogComponent } from './components/inventory-add-dialog/inventory-add-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InventoryHomeComponent,
    InventoryEditDialogComponent,
    InventoryAddDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiComponentsModule,
    InventoryRoutingModule
  ],
  providers: [
    InventoryModuleService
  ],
  entryComponents: [
    InventoryEditDialogComponent,
    InventoryAddDialogComponent
  ]
})
export class InventoryModule { }
