import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './modules/main/home/home.component';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main/main.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '', component: HomeComponent, data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'service',
        loadChildren: './modules/service/service.module#ServiceModule'
      },
      {
        path: 'inventory',
        loadChildren: './modules/inventory/inventory.module#InventoryModule'
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});