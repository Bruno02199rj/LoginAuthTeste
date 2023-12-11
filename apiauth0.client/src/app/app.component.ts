import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


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
  
    console.log(data)
    this.http.post(`/weatherforecast/login?username=${data.Username}&password=${data.Password}`, data,)
      .subscribe((res) => {
        console.log(res)
      })

  }
  }

  

