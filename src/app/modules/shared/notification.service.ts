import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor(private fb: FormBuilder, private notificationsService: NotificationsService) {}
    show(type: string, title: string, content: string, timeOut: number) {
        const options = this.fb.group({
                type: type,
                title: title,
                content: content,
          timeOut: timeOut,
          clickIconToClose:true,
          showProgressBar:false,
                clickToClose: true,
                animate: 'scale'
        }).getRawValue();
        this.notificationsService.create(options.title, options.content,options.type,options);
      }
}
