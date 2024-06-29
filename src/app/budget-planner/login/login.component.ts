import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:any;
registerform:any;
activeForm: 'login'|'register'='login';
  registerForm: any;
constructor(private fb: FormBuilder,
  private router: Router,
  private snackBar: MatSnackBar
){}
ngOnInit(){
  this.loginForm = this.fb.group({

    email: ['',[Validators.required, Validators.email
    ]],
    password: ['',Validators.required]
  });

  this.registerform = this.fb.group({
    username: ['',[Validators.required, Validators.email]],
    
    email: ['',[Validators.required, Validators.email
    ]],
    password: ['',Validators.required]
  });
}
toggleForm(form: 'login'|'register'){
  this.activeForm = form;
}
login(){
  if (this.loginForm.valid){
    console.log("Login info==>", this.loginForm.value);
    this.router.navigate(['/budget-planner/dashboard'])
  }
  else{
    this.snackBar.open('Invalid email or password!' , 'Close', {duration: 3000});
  }
}
register(){
  if(this.registerForm.valid){
    console.log("Register info==>>",this.registerForm.value);
    setTimeout(() => {
      window.location.reload();
    },2000);
    this.router.navigate(['/budget-planner/login']);

  }
  else{
    this.snackBar.open('Please fill in all fields correctly!', 'Close',{duration: 3000});
  }
}
}
