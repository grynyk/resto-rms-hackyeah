import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from './notification.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UiComponentsModule } from './ui-components.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    CommonDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UiComponentsModule,
    SimpleNotificationsModule.forRoot(),
    NgMaterialMultilevelMenuModule,
  ], exports: [
    SimpleNotificationsModule,
    CommonDialogComponent,
    BreadcrumbComponent,
    NgMaterialMultilevelMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ], providers: [
    NotificationService
  ],
  entryComponents: [
    CommonDialogComponent
  ]
})
export class SharedModule { }
