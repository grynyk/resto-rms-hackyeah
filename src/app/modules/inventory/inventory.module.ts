import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';
import { InventoryRoutingModule } from './inventory.routing';
import { UiComponentsModule } from '../shared/ui-components.module';

@NgModule({
  declarations: [InventoryHomeComponent],
  imports: [
    CommonModule,
    UiComponentsModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
