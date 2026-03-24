import { Component, OnInit } from '@angular/core';
import { Datahandlers } from '../../services/datahandlers';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  errMsg = '';
  processing = false;

  constructor(private dataSav: Datahandlers, private router: Router, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginUser() {
    if(this.processing){
      return 
    }
    this.processing = true;
    const formData = this.loginForm.value;
    this.dataSav.login(formData.email, formData.password).subscribe(
      (res: any) => {
        if(res?.status == true){
          localStorage.setItem('token', res?.data?.token);
          // const user = JSON.stringify(res.user);
          console.log('ddd');
          setTimeout(() => {
            this.processing = false
            this.router.navigate(['/dashboard']);
          }, 2000);
        }else{
          this.processing = false
          this.errMsg = "something went worng" 
        }
      },
      (error: any) => {
        this.processing = false
        this.errMsg = 'Wrong credentials';
      }
    )
    setTimeout(() => {
      this.processing = false
    this.errMsg = '';
    }, 3000);
  }
}

