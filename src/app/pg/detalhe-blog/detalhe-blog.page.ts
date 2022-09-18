import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UrlService } from 'src/app/servidor/url.service';

@Component({
  selector: 'app-detalhe-blog',
  templateUrl: './detalhe-blog.page.html',
  styleUrls: ['./detalhe-blog.page.scss'],
})
export class DetalheBlogPage implements OnInit {

  dadosArtigo: any;//Recebe os dados do banco
  dados: Array<{
    idArtigo: any,
    tituloArtigo: any,
    imgBanner: any,
    artigo: any,
  }>;//Armazena os dados no array
  idArtigo: any;
  txtArtigo: any;

  constructor(public dadosUrl: ActivatedRoute, public servidorUrl:UrlService,public http:HttpClient) {
    this.dadosUrl.params.subscribe(paramsId=>{
      this.idArtigo = paramsId.idArtigo
      this.listaDetalheArtigo()
      this.dados = []
    })
  }

  ngOnInit() {
  }

  listaDetalheArtigo(){
    this.http.get(this.servidorUrl.pegarUrl() + 'detalheBlog.php?idArtigo='+this.idArtigo).pipe(map(res => res)).subscribe(listaDetalhe=>{
      this.dadosArtigo = listaDetalhe
      for(let i = 0; i< this.dadosArtigo.length; i++){
        this.dados.push({
          idArtigo: listaDetalhe[i]['idArtigo'],
          tituloArtigo: listaDetalhe[i]['tituloArtigo'],
          imgBanner: listaDetalhe[i]['imgBanner'],
          artigo: listaDetalhe[i]['artigo']
        })
      }
      this.txtArtigo = this.dados[0].artigo.split("\r\n\r\n", 3);
    })
  }

}
