import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { NotificationService } from '../../../shared/notification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  getState: Observable<any>;
  errorMessage: Observable<string> | null;

  constructor(private router: Router,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    localStorage.setItem('loginned', 'false');
  }

  onSubmit(): void {
    localStorage.setItem('loginned', 'true');
    this.router.navigateByUrl('/');
    this.notificationService.show('success', 'Success', 'you have successfully logged in', 1000);
  }

}
