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

  ngOnInit() {
    
    this.formulario = new FormGroup({
      Username: new FormControl(),
      Password: new FormControl()
    })

  }
 

  Enviar(): void {
    
    const User: User = this.formulario.value
    this.usersService.Enviar(User).subscribe(result => {
      alert('pessoa incluida')
    })
  }
}
