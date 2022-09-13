import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UrlService } from 'src/app/servidor/url.service';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.page.html',
  styleUrls: ['./detalhe-curso.page.scss'],
})
export class DetalheCursoPage implements OnInit {
  dadosCurso: any;//Recebe os dados do banco
  dados: Array<{
    idCurso: any,
    curso: any,
    descCurso: any,
    imgCurso: any,
    duracaoCurso: any,
    instrutorCurso: any,
    mensagemCurso: any,
    statusCurso: any
  }>;//Armazena os dados no array
  idCurso: any;
  descText: any;

  constructor(public dadosUrl: ActivatedRoute, public servidorUrl:UrlService,public http:HttpClient) {
    this.dadosUrl.params.subscribe(paramsId=>{
      this.idCurso = paramsId.idCurso
      this.listaDetalheCurso()
      this.dados = []
    })
  }

  ngOnInit() {
  }

  listaDetalheCurso(){
    this.http.get(this.servidorUrl.pegarUrl() + 'detalheCurso.php?idCurso='+this.idCurso).pipe(map(res => res)).subscribe(listaDetalhe=>{
      this.dadosCurso = listaDetalhe
      for(let i = 0; i< this.dadosCurso.length; i++){
        this.dados.push({
          idCurso: listaDetalhe[i]['idServico'],
          curso: listaDetalhe[i]['curso'],
          descCurso: listaDetalhe[i]['descCurso'],
          imgCurso: listaDetalhe[i]['imgCurso'],
          duracaoCurso: listaDetalhe[i]['duracaoCurso'],
          instrutorCurso: listaDetalhe[i]['instrutorCurso'],
          mensagemCurso: listaDetalhe[i]['mensagemCurso'],
          statusCurso: listaDetalhe[i]['statusCurso']
        })
      }
      if(this.dados[0].statusCurso == 1){
        this.dados[0].statusCurso = "Ativo"
      }else if(this.dados[0].statusCurso == 2){
        this.dados[0].statusCurso = "Inativo"
      }
      this.descText = this.dados[0].descCurso;
        
      console.log(this.dados[0].curso)
    })
  }

}
