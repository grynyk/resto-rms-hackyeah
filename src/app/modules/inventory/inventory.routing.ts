import { Routes, RouterModule } from '@angular/router';
import { InventoryHomeComponent } from './components/inventory-home/inventory-home.component';

const inventoryModuleRoutes: Routes = [
    {
      path: '',
      component: InventoryHomeComponent,
      data: {
        breadcrumb: 'Inventory'
      }
    }
  ];

  export const InventoryRoutingModule = RouterModule.forChild(inventoryModuleRoutes);
