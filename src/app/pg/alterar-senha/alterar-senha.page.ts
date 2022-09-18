import { Component, OnInit } from '@angular/core'
import { UrlService } from 'src/app/servidor/url.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';;

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  id: any;
  alterarSenha: any;
  senhaAtual: any;
  senhaNova: any;
  msg: any;

  constructor(public servidorUrl: UrlService, public http: HttpClient) {
    this.id = localStorage.getItem('idUser');
  }

  ngOnInit() {
  }

  enviarDados(dados){
    let cabecalho = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    return this.http.post(`${this.servidorUrl.pegarUrl()}alterarDados.php?idUser=${this.id}`, dados, {
      headers: cabecalho
    }).pipe(map((res)=>{ return res}))
  }

  alterarSenhaUser(){
    if(this.senhaAtual === undefined || this.senhaNova === undefined){
      this.servidorUrl.Alerta("Atenção", "Preencha todos os campos")
    }else{
      this.alterarSenha = {
        value: {
          senhaAtual: this.senhaAtual,
          senhaNova: this.senhaNova
        }
      }
      console.log(this.alterarSenha)
      this.enviarDados(this.alterarSenha.value).subscribe(
        data=>{
          this.msg = data;
          if(this.msg.statusMsg){
            this.servidorUrl.AlertaOptions("Atenção", this.msg.msg, "/tabs/pg/perfil")
          }else{
            this.servidorUrl.Alerta("Atenção", this.msg.msg)
          }
        }, err => {
          console.log(err)
        }
      )
    }
  }

}
