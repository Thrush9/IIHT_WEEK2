import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  constructor(private routerObj: Router, private registerService: RegisterService) {
    this.user = new User();
  }

  ngOnInit(): void {

  }

  clearForm() {
    this.user = new User();
  }

  register() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(resp => {
      console.log(resp);
      this.user = new User();
      this.routerObj.navigate(['thanks']);
    },
      err => console.log(err));
  }

}
