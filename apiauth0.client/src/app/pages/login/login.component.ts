import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  http: any;

  constructor(http: HttpClient) { }
  Enviar(data: { Username: string, Password: string }) {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    console.log(data)
    this.http.post(`/weatherforecast/login?username${data.Username}=&password=${data.Password}`, data,)
      .subscribe((res: any) => {
        console.log(res)
      })
  }
}
