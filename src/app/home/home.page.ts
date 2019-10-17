import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: any[];

  constructor(private http: HttpService) {}

  cargarUsuarios(){
    this.http.loadUsers().then(
      (res) => {
        this.usuarios = res['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
