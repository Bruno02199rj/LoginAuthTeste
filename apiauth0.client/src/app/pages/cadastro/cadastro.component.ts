import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private http: HttpClient) { }


  Enviar(data: { Name: string, Username: string, Password: string }) {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

    this.http.post(`https://localhost:7196/WeatherForecast/cadastrar?Name=${data.Name}&Username=${data.Username}&Password=${data.Password}
`, data,)
      .subscribe((res) => {
        alert(JSON.stringify(res));

        console.log(res)
      })
  }
}
