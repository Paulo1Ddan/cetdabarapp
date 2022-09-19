import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from 'src/app/servidor/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.page.html',
  styleUrls: ['./matricula.page.scss'],
})
export class MatriculaPage implements OnInit {

  id: any
  dadosMatricula: any
  dados: Array<{
    idCurso: any,
    idTurma: any,
    idUsuario: any,
    nomeUsuario: any,
    nomeTurma: any,
    curso: any,
    emailUsuario: any,
    dataMatricula: any,
    duracaoCurso: any,
    andamentoTurma: any,
    statusMatricula: any,
    statusTurma: any,
    instrutorCurso: any,
  }>;

  constructor(public servidorUrl: UrlService, public http: HttpClient, public dadosUrl: ActivatedRoute) {
    this.dadosUrl.params.subscribe(paramsId => {
      this.id = paramsId.idMatricula
      this.listaMatricula(this.id)
      this.dados = []
    })
  }

  ngOnInit() {
  }

  listaMatricula(id){
    this.http.get(this.servidorUrl.pegarUrl() + "matriculaCompleta.php?idMatricula=" + id).pipe(map(res => res)).subscribe(data => {
      this.dadosMatricula = data
      for(let i = 0; i < this.dadosMatricula.length; i++){
        this.dados.push({
          idCurso: data[i]["idCurso"],
          idTurma: data[i]["idTurma"],
          idUsuario: data[i]["idUsuario"],
          nomeUsuario: data[i]["nomeUsuario"],
          nomeTurma: data[i]["nomeTurma"],
          curso: data[i]["curso"],
          emailUsuario: data[i]["emailUsuario"],
          dataMatricula: data[i]["dataMatricula"],
          duracaoCurso: data[i]["duracaoCurso"],
          andamentoTurma: data[i]["andamentoTurma"],
          statusMatricula: data[i]["statusMatriculado"],
          statusTurma: data[i]["statusTurma"],
          instrutorCurso: data[i]["instrutorCurso"],
        })
      }
      console.log(this.dados[0])
    })
  }

}
