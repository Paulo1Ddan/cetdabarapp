import { Component, OnInit } from '@angular/core';
import { UrlService } from "../../servidor/url.service";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  cursos: any
  constructor(public servidorUrl:UrlService, public http:HttpClient) { 
    this.listaCursos()
  }
 
  ngOnInit() {
  }

  listaCursos(){
    this.http.get(this.servidorUrl.pegarUrl() + "cursos.php").pipe(map(res=> res)).subscribe(listaDados =>{
      this.cursos = listaDados;
      for(let i = 0; i < this.cursos.length; i++){
        this.cursos[i].descCurso = this.cursos[i].descCurso.slice(0, 200)+"..."
      }
    })
  }
}
