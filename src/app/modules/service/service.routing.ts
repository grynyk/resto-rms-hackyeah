import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';

const serviceModuleRoutes: Routes = [
    {
      path: '',
      redirectTo: 'tables',
      pathMatch: 'full'
    },
    {
      path: 'tables',
      component: TablesComponent,
      data: {
        breadcrumb: 'Tables'
      }
    }
  ];

  export const ServiceRoutingModule = RouterModule.forChild(serviceModuleRoutes);
