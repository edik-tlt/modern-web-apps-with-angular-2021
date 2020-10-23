import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigateByUrl('/feeds');
    }
  }
  
  login(username: string, password: string) {
    this.auth.login(username, password).subscribe(res => {
      if (res.token) {
        this.router.navigateByUrl('/feeds');
      } else {
        this.error = res.error;
      }
    });
  }
}
