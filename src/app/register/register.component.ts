import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterUser } from '../RegisterUser';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  warning: any;
  success: boolean = false;
  loading: boolean = false;
  registerUser:RegisterUser={userName: "", password: "", password2: ""};

  constructor(private auth : AuthService) { 

  }

  onSubmit(f: NgForm): void {
    this.loading = true;
    this.auth.register(this.registerUser)
    .subscribe(
      (success) => 
      {
        this.success =true;
        this.warning =null;
        this.loading= false;
      },
      (err) =>
      {
        this.success = false;
        this.warning = err.error.message;
        this.loading =false;
      }
    );
  }

  ngOnInit(): void {
  }

}
