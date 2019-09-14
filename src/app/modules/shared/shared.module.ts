import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from './notification.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UiComponentsModule } from './ui-components.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiComponentsModule,
    SimpleNotificationsModule.forRoot(),
    NgMaterialMultilevelMenuModule,
  ], exports: [
    SimpleNotificationsModule,
    BreadcrumbComponent,
    NgMaterialMultilevelMenuModule,
  ], providers:[
    NotificationService
  ]
})
export class SharedModule { }
