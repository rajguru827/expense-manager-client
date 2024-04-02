import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signIn(this.signInForm.value).subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/');
      }
    });
  }
}
