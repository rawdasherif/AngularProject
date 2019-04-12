import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public userarray=[];

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.userarray=JSON.parse(localStorage.getItem('RegisteredUser'));
      if(this.userarray==null)
      {
      this.userarray=[]
      this.userarray.push(this.registerForm.value);
      localStorage.setItem("RegisteredUser", JSON.stringify(this.userarray));
      this.router.navigate(['/home']);
      }
      else{
        this.userarray.push(this.registerForm.value);
        localStorage.setItem("RegisteredUser", JSON.stringify(this.userarray));
        this.router.navigate(['/home']);
      }
    }
    else{
      return;
    }
    console.log(this.registerForm.value)
}

}
