import { Component, OnInit } from '@angular/core';
import { UrlService } from "../../servidor/url.service"
import { HttpClient } from "@angular/common/http"
import { NavController } from '@ionic/angular';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;
  dadosUsuario: any;
  constructor(public servidorUrl: UrlService, public http: HttpClient, public nav: NavController) {
    console.log(localStorage.getItem('logado'));
    if(localStorage.getItem('logado') == 'true'){
      location.href= '/tabs/pg/perfil'
    }
  }

  ngOnInit() {
    document.querySelector('ion-tab-bar').style.display = 'none'
  }

  Login() {
    if (this.email == undefined || this.senha == undefined) {
      this.servidorUrl.Alerta("Alerta", "Preencha todos os campos")
    } else {
      this.http.get(`${this.servidorUrl.pegarUrl()}login.php?email=${this.email}&senha=${this.senha}`).pipe(map(res => res)).subscribe(data => {
        this.dadosUsuario = data
        if (this.dadosUsuario[0].msg.logado === "sim") {
          if (this.dadosUsuario[0].dados.statusUsuario == 1) {
            this.servidorUrl.Alerta("Atenção", "Seja bem vindo, " + this.dadosUsuario[0].dados.nomeUsuario)
            //Armazenando os dados do usuario no localstorage
            localStorage.setItem('idUser', this.dadosUsuario[0].dados.idUsuario)
            localStorage.setItem('nameUser', this.dadosUsuario[0].dados.nomeUsuario)
            localStorage.setItem('emailUser', this.dadosUsuario[0].dados.emailUsuario)
            localStorage.setItem('telUser', this.dadosUsuario[0].dados.telUsuario)
            localStorage.setItem('dataNasc', this.dadosUsuario[0].dados.dataNasc)
            localStorage.setItem('imgUser', this.dadosUsuario[0].dados.imgUsuario)
            localStorage.setItem('dataCad', this.dadosUsuario[0].dados.dataCad)
            localStorage.setItem('statusUser', this.dadosUsuario[0].dados.statusUsuario)
            localStorage.setItem('catUser', this.dadosUsuario[0].dados.catUsuario)
            localStorage.setItem('logado', 'true')

            //Atribuindo os valores do setters
            this.servidorUrl.setIdUser(this.dadosUsuario[0].dados.idUsuario)
            this.servidorUrl.setNameUser(this.dadosUsuario[0].dados.nomeUsuario)
            this.servidorUrl.setEmailUser(this.dadosUsuario[0].dados.emailUsuario)
            this.servidorUrl.setTelUser(this.dadosUsuario[0].dados.telUsuario)
            this.servidorUrl.setDataNasc(this.dadosUsuario[0].dados.dataNasc)
            this.servidorUrl.setImgUser(this.dadosUsuario[0].dados.imgUsuario)
            this.servidorUrl.setStatusUser(this.dadosUsuario[0].dados.telUsuario)
            this.servidorUrl.setCatUser(this.dadosUsuario[0].dados.catUsuario)

            this.email = undefined
            this.senha = undefined
            document.querySelector('ion-tab-bar').style.display = 'flex'
            this.nav.navigateBack('/tabs/pg/perfil')
          } else {
            this.servidorUrl.Alerta("Atenção", "Contate o administrador do sistema")
            this.email = undefined
            this.senha = undefined
          }
        } else {
          this.servidorUrl.Alerta("Atenção", this.dadosUsuario[0].msg.texto)
          this.email = undefined
          this.senha = undefined
        }
      })
    }
  }

}
