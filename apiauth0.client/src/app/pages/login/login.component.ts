import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  forecasts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.getForecasts();

  }


  getForecasts() {
    this.http.get('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      });
  }
  
  Enviar(data: { Username: string, Password: string }) {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

    this.http.post(`https://localhost:7196/WeatherForecast/login?username=${data.Username}&password=${data.Password}`, data,)
      .subscribe((res) => {
        alert(JSON.stringify(res));

        console.log(res)
      })
  }
}
