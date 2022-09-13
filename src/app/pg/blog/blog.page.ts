import { Component, OnInit } from '@angular/core';
import { UrlService } from "../../servidor/url.service";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  artigos: any
  constructor(public servidorUrl:UrlService, public http:HttpClient) { 
    this.listaCursos()
  }
 
  ngOnInit() {
  }

  listaCursos(){
    this.http.get(this.servidorUrl.pegarUrl() + "blog.php").pipe(map(res=> res)).subscribe(listaDados =>{
      this.artigos = listaDados;
    })
  }
}
