import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from './User';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})



export class UsersComponent {
  formulario: any

  constructor(private usersService: UsersService) {

  }

  

  }

