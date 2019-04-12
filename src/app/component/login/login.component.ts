import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      var userdata = localStorage.getItem("RegisteredUser");
      var data = JSON.parse(userdata);
      for(var i=0; i<data.length; i++){
         if(data[i].email==this.loginForm.value.email){
          this.router.navigate(['/home']);
         }
      }
    }
    else{
      return;
    }
}


}
